import React from 'react';
import { Play } from 'lucide-react';

const YouTubePlaylists: React.FC = () => {

  const playlists = [
    {
      title: "Web Performance Optimization",
      description: "Learn how to optimize your web applications for better performance and user experience",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop&crop=center",
      videoCount: "14 videos",
      url: "https://www.youtube.com/watch?v=RqKA_TJKuFE&list=PLJ6UMyI6HnLFHSQOrfwhf3C7pZC6OzZYt",
      category: "Web Development"
    },
    {
      title: "React Advanced Concepts",
      description: "Master advanced React patterns, hooks, and performance optimization techniques",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop&crop=center",
      videoCount: "87 videos",
      url: "https://www.youtube.com/watch?v=r384pWZIL_s&list=PLJ6UMyI6HnLFFvoMt9skouZRc1IFrgRgw",
      category: "React"
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Complete guide to machine learning algorithms and practical implementations",
      thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=225&fit=crop&crop=center",
      videoCount: "4 videos",
      url: "https://www.youtube.com/watch?v=yeufmGYwfkU&list=PLJ6UMyI6HnLGEkdvBf_pMpuszVw2dqfW5",
      category: "ML/AI"
    },
 
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            YouTube{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Playlists
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Watch our comprehensive video tutorials and deep-dive into various programming topics
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Playlist Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playlists.slice(0, 3).map((playlist, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary-600 rounded-full p-4">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {playlist.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      {playlist.videoCount}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {playlist.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {playlist.description}
                  </p>
                  <a
                    href={playlist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors mt-auto"
                  >
                    <Play size={16} />
                    Watch Playlist
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Visit Channel Link */}
          <div className="text-center mt-8">
            <a 
              href="https://www.youtube.com/@TheFunnelEffect/playlists"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
            >
              Visit Channel for More Playlists →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubePlaylists;