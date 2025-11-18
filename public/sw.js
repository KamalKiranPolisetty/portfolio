// -------------------------------------------------------------
// ⚡ Service Worker — Safe Caching & Offline Support
// -------------------------------------------------------------
const STATIC_CACHE = "static-v2"; // <-- bump version to force refresh
const DYNAMIC_CACHE = "dynamic-v2";

// Assets to cache immediately (critical app shell)
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/logo.svg",
];

// -------------------------------------------------------------
// 🧱 INSTALL — Precache essential static assets
// -------------------------------------------------------------
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .catch((err) => console.warn("Static caching failed:", err))
      .then(() => self.skipWaiting())
  );
});

// -------------------------------------------------------------
// 🔄 ACTIVATE — Cleanup old caches
// -------------------------------------------------------------
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// -------------------------------------------------------------
// 🚫 PDF BYPASS — Let PDFs load normally (fixes resume issue)
// -------------------------------------------------------------
function isPDFRequest(request) {
  return request.url.endsWith(".pdf");
}

// -------------------------------------------------------------
// 🚦 shouldCache — Skip problematic URLs (chrome-extension, data, etc.)
// -------------------------------------------------------------
function shouldCache(url) {
  if (
    url.startsWith("chrome-extension://") ||
    url.startsWith("chrome://") ||
    url.startsWith("about:") ||
    url.startsWith("data:")
  ) {
    return false;
  }

  // Skip trackers/logos
  if (url.includes("logo.clearbit.com") || url.includes("google-analytics")) {
    return false;
  }

  return true;
}

// -------------------------------------------------------------
// ⚙️ FETCH — Smart caching strategy
// -------------------------------------------------------------
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // ❌ DO NOT CACHE PDFs → fixes opening homepage issue
  if (isPDFRequest(request)) {
    return; // let browser handle normally
  }

  // ❌ Skip caching unsafe URLs
  if (!shouldCache(request.url)) return;

  let parsedUrl;
  try {
    parsedUrl = new URL(request.url);
  } catch {
    return;
  }

  // 🏠 SPA Routing (HTML navigation)
  if (request.mode === "navigate") {
    event.respondWith(
      caches.match("/index.html").then((cached) => {
        return (
          cached ||
          fetch(request)
            .then((res) => {
              if (res && res.status === 200) {
                const clone = res.clone();
                caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));
              }
              return res;
            })
            .catch(() => caches.match("/index.html"))
        );
      })
    );
    return;
  }

  // 🔌 API Requests
  if (parsedUrl.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res && res.status === 200) {
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 🎨 Static assets, images, scripts, etc.
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request)
        .then((response) => {
          // Skip non-basic / opaque / unsuccessful responses
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          // Cache only text-based assets (avoid PDF caching)
          const contentType = response.headers.get("content-type") || "";
          const isTextAsset =
            contentType.includes("text") ||
            contentType.includes("javascript") ||
            contentType.includes("json") ||
            contentType.includes("css") ||
            contentType.includes("svg") ||
            contentType.includes("html");

          if (!isTextAsset) return response;

          // Cache safely
          const clone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));

          return response;
        })
        .catch(() => new Response("Network error", { status: 408 }));
    })
  );
});

// -------------------------------------------------------------
// 🔁 Background Sync Placeholder
// -------------------------------------------------------------
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form") {
    event.waitUntil(Promise.resolve());
  }
});

// -------------------------------------------------------------
// 🔔 Push Notifications Placeholder
// -------------------------------------------------------------
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: "/logo.svg",
        badge: "/logo.svg",
      })
    );
  }
});
