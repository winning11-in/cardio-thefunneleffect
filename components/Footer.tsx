"use client";

import React from "react";
import Link from "next/link";
import {
  Youtube,
  Instagram,
  Twitter,
  Home,
  Headphones,
  BookOpen,
  Mail,
} from "lucide-react";
import { SocialLink } from "@/types";

interface FooterProps {
  socialLinks: SocialLink[];
}

const iconMap = {
  Youtube,
  Instagram,
  Twitter,
};

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-white text-2xl font-bold">
                Cardio Effect
              </span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed max-w-md">
              Your ultimate destination for learning programming, web
              development, and technology skills. We provide comprehensive
              tutorials and guides to help you master coding and advance your
              tech career.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 dark:bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/thefunnel.effect/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 dark:bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="flex items-center gap-2 text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <BookOpen className="w-4 h-4" />
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Learning Hub</h4>
            <p className="text-gray-300 dark:text-gray-400 text-sm mb-4">
              Explore our comprehensive learning resources.
            </p>
            <div className="space-y-2">
              <a
                href="https://www.youtube.com/@thefunneleffect"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg"
              >
                <Youtube className="w-4 h-4" />
                YouTube Channel
              </a>
              <a
                href="https://medium.com/@thefunneleffect"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
                Medium Articles
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="pt-8 border-t border-gray-700 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Funnel Effect. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <a
                href="#"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
