import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, BookOpen, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-green-200/50 dark:border-green-800/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-green-600 dark:text-green-400 text-xl font-bold font-serif">The Funnel Effect</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 dark:bg-green-400 group-hover:w-full transition-all duration-200"></span>
                </Link>
              ))}
            </nav>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Simple top bar */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-green-200/50 dark:border-green-800/50 shadow-sm">
        <div className="flex items-center justify-between h-14 px-4">
          <h1 className="text-green-600 dark:text-green-400 text-lg font-bold font-serif">The Funnel Effect</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-green-200/50 dark:border-green-800/50">
        <div className="flex items-center justify-around h-16 px-4">
          <Link
            href="/"
            className="flex flex-col items-center justify-center space-y-1 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link
            href="/blogs"
            className="flex flex-col items-center justify-center space-y-1 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-xs font-medium">Blogs</span>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center space-y-1 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="text-xs font-medium">Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
 