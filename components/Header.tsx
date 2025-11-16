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
      <header className="hidden md:block fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            {/* <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                
                <span className="text-gray-900 dark:text-white text-xl font-bold font-serif"> Cardio Effect</span>
              </Link>
            </div> */}

            {/* Desktop Navigation */}
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                                    className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
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
      <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="flex items-center justify-between h-14 px-4">
          <h1 className="text-gray-900 dark:text-white text-lg font-bold font-serif">Cardio Effect</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="flex items-center justify-around h-16 px-4">
          <Link
            href="/"
            className="flex flex-col items-center justify-center space-y-1 text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link
            href="/blogs"
            className="flex flex-col items-center justify-center space-y-1 text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-xs font-medium">Blogs</span>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center space-y-1 text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition-colors"
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
 