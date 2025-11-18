import { Code, Heart, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { APP_CONFIG } from "../config/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <Code className="h-6 w-6 text-blue-400" /> */}
              <span className="text-xl font-bold text-white">Kamal Kiran Polisetty</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Building the web one line of code at a time. Full-stack developer
              specializing in modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
  {/* Email */}
  <li className="flex items-start space-x-3">
    <Mail className="h-5 w-5 text-blue-400 mt-1" />
    <a
      href={`mailto:${APP_CONFIG.email}`}
      className="text-gray-400 hover:text-blue-400 transition-colors"
    >
      {APP_CONFIG.email}
    </a>
  </li>

  {/* LinkedIn */}
  <li className="flex items-start space-x-3">
    <Linkedin className="h-5 w-5 text-blue-400 mt-1" />
    <a
      href={APP_CONFIG.social.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 transition-colors"
    >
      {new URL(APP_CONFIG.social.linkedin).pathname}
    </a>
  </li>

  {/* GitHub */}
  <li className="flex items-start space-x-3">
    <Github className="h-5 w-5 text-blue-400 mt-1" />
    <a
      href={APP_CONFIG.social.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 transition-colors"
    >
      {new URL(APP_CONFIG.social.github).pathname}
    </a>
  </li>

  {/* Instagram */}
  <li className="flex items-start space-x-3">
    <Instagram className="h-5 w-5 text-blue-400 mt-1" />
    <a
      href={APP_CONFIG.social.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 transition-colors"
    >
      {`@${APP_CONFIG.social.instagram.split("/").filter(Boolean).pop()}`}
    </a>
  </li>
</ul>

          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to my newsletter to receive updates on my latest projects and tech articles.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Kamal Kiran Polisetty. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-500 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and
              React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
