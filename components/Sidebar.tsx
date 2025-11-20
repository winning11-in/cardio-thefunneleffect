import React from 'react';
import Link from 'next/link';

interface PopularPost {
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

interface Category {
  name: string;
  count: number;
}

interface SidebarProps {
  popularPosts: PopularPost[];
  categories: Category[];
}

const Sidebar: React.FC<SidebarProps> = ({ popularPosts = [], categories = [] }) => {
  return (
    <aside className="space-y-5">
      {/* About Widget */}
      <div className="bg-white dark:bg-black rounded-xl p-5 shadow-sm border border-gray-50 dark:border-gray-800">
        <div className="text-center">
          <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
            <span className="text-base font-bold text-white">F</span>
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Funnel Effect.</h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-3">
            Your go-to platform for learning programming and technology. We create comprehensive tutorials, 
            guides, and resources to help you master coding skills and advance your tech career.
          </p>
          <div className="flex justify-center space-x-2">
            <a href="#" className="w-7 h-7 bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900/50 dark:to-green-800/50 hover:from-emerald-400 hover:to-green-500 hover:text-white rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 transition-all duration-200 hover:scale-110 shadow-sm">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-7 h-7 bg-gray-100 dark:bg-gray-800 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Popular Posts */}
      {popularPosts.length > 0 && (
        <div className="bg-white dark:bg-black rounded-xl p-5 shadow-sm border border-gray-50 dark:border-gray-800">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">Popular Blogs</h3>
          <div className="space-y-3">
            {popularPosts.map((post, index) => (
              <div key={index} className="group">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1 mb-1">
                      <Link href={`/blogs/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs">{post.category}</span>
                      <span className="ml-2 text-xs">{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <div className="bg-white dark:bg-black rounded-xl p-5 shadow-sm border border-gray-50 dark:border-gray-800">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">Explore Topics</h3>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <div key={index}>
                <Link 
                  href={`/blogs?category=${category.name.toLowerCase()}`}
                  className="flex items-center justify-between py-1.5 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                >
                  <span className="text-xs font-medium">{category.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {category.count}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;