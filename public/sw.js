// -------------------------------------------------------------
// ⚡ Service Worker — Safe Caching & Offline Support
// -------------------------------------------------------------
const STATIC_CACHE = "static-v1";
const DYNAMIC_CACHE = "dynamic-v1";

// Assets to cache immediately (critical app shell)
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/logo.svg",
  "/kkp.pdf",
];

// -------------------------------------------------------------
// 🧱 INSTALL — Precache essential assets
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

  // Skip logos or third-party trackers
  if (url.includes("logo.clearbit.com") || url.includes("google-analytics")) {
    return false;
  }

  return true;
}

// -------------------------------------------------------------
// ⚙️ FETCH — Main caching strategy
// -------------------------------------------------------------
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = request.url;

  // Skip unsupported or unsafe caching
  if (!shouldCache(url)) return;

  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    return;
  }

  // 🏠 Handle navigation requests (SPA routing)
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

  // 🔌 Handle API calls
  if (parsedUrl.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return res;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 🎨 Handle static and dynamic assets
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request)
        .then((response) => {
          // Skip failed or non-basic responses
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          // ✅ MIME-SAFE FILTER — Only cache text-based content
          const contentType = response.headers.get("content-type") || "";
          const isTextAsset =
            contentType.includes("text") ||
            contentType.includes("javascript") ||
            contentType.includes("json") ||
            contentType.includes("css") ||
            contentType.includes("svg") ||
            contentType.includes("html");

          if (!isTextAsset) {
            // Don’t cache binary (images, fonts, PDFs, etc.)
            return response;
          }

          // Safe to cache
          const clone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, clone);
          });

          return response;
        })
        .catch((error) => {
          console.warn("Fetch failed for:", request.url, error);
          return new Response("Network error", {
            status: 408,
            headers: { "Content-Type": "text/plain" },
          });
        });
    })
  );
});

// -------------------------------------------------------------
// 🔁 Background Sync (future-ready)
// -------------------------------------------------------------
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form") {
    event.waitUntil(handleOfflineFormSubmissions());
  }
});

// -------------------------------------------------------------
// 🔔 Push Notifications (optional future use)
// -------------------------------------------------------------
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: "/logo.svg",
      badge: "/logo.svg",
      vibrate: [100, 50, 100],
      data: { dateOfArrival: Date.now(), primaryKey: data.primaryKey },
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// -------------------------------------------------------------
// 📨 Offline Form Submission Placeholder
// -------------------------------------------------------------
async function handleOfflineFormSubmissions() {
  console.log("Handling offline form submissions...");
}
