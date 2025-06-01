import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-textLight py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Brand + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">IdeaMarkz</h2>
          <p className="text-sm text-gray-400">
            Transform your creativity into real value. Share, verify, and monetize your ideas with ease.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-xl hover:text-primary transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-xl hover:text-primary transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-primary transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Line */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} IdeaMarkz. All rights reserved.
      </div>
    </footer>
  );
}
