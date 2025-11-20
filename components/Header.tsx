import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Home, BookOpen, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-green-200/30 dark:border-green-800/30 shadow-lg shadow-green-500/5 dark:shadow-green-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
             
                <span className="text-gray-900 dark:text-white text-xl font-bold font-serif group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">The Funnel Effect</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex space-x-1">
              {navigation.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 transition-all duration-200 font-medium rounded-lg group ${
                      isActive
                        ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/50'
                        : 'text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/50'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              })}
            </nav>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <div className="p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/50 transition-colors duration-200">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-green-200/30 dark:border-green-800/30 shadow-lg shadow-green-500/5 dark:shadow-green-500/10">
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/" className="flex items-center group">
            <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 transition-transform duration-200">
              <span className="text-white text-xs font-bold">F</span>
            </div>
            <span className="text-gray-900 dark:text-white text-lg font-bold font-serif group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">The Funnel Effect</span>
          </Link>
          <div className="p-1 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/50 transition-colors duration-200">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-green-200/30 dark:border-green-800/30 shadow-lg shadow-green-500/5 dark:shadow-green-500/10">
        <div className="flex items-center justify-around h-16 px-4">
          <Link
            href="/"
            className={`flex flex-col items-center justify-center space-y-1 p-2 rounded-lg transition-all duration-200 group ${
              router.pathname === '/'
                ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/50'
                : 'text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/50'
            }`}
          >
            <Home className={`h-5 w-5 transition-transform duration-200 ${
              router.pathname === '/' ? 'scale-110' : 'group-hover:scale-110'
            }`} />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link
            href="/blogs"
            className={`flex flex-col items-center justify-center space-y-1 p-2 rounded-lg transition-all duration-200 group ${
              router.pathname === '/blogs' || router.pathname.startsWith('/blogs/')
                ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/50'
                : 'text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/50'
            }`}
          >
            <BookOpen className={`h-5 w-5 transition-transform duration-200 ${
              router.pathname === '/blogs' || router.pathname.startsWith('/blogs/') ? 'scale-110' : 'group-hover:scale-110'
            }`} />
            <span className="text-xs font-medium">Blogs</span>
          </Link>
          <Link
            href="/contact"
            className={`flex flex-col items-center justify-center space-y-1 p-2 rounded-lg transition-all duration-200 group ${
              router.pathname === '/contact'
                ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/50'
                : 'text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/50'
            }`}
          >
            <Mail className={`h-5 w-5 transition-transform duration-200 ${
              router.pathname === '/contact' ? 'scale-110' : 'group-hover:scale-110'
            }`} />
            <span className="text-xs font-medium">Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
 