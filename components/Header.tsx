import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, BookOpen, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Desktop Header: centered rounded pill UI (visual only) */}
      <header className="hidden md:block fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            <div className="w-full max-w-4xl bg-black/95 text-white dark:bg-gray-900/95 rounded-full px-3 py-2 flex items-center justify-between shadow-lg shadow-black/30 pointer-events-auto">
                {/* Desktop Navigation on the left (logo removed) */}
                <nav className="flex space-x-1 items-center">
                  {navigation.map((item) => {
                    const isActive = router.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`px-4 py-2 transition-colors duration-200 font-medium rounded-lg ${
                          isActive
                            ? 'text-green-400 dark:text-green-300'
                            : 'text-gray-200 dark:text-gray-200/80 hover:text-green-400 dark:hover:text-green-400'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>

              {/* Theme Toggle */}
              <div className="flex items-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header removed (top header not shown on mobile) */}

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
 