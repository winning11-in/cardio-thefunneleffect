'use client';

import React from 'react';
import { Play, Clock, Calendar } from 'lucide-react';
import { Episode } from '@/types';

interface LatestEpisodeProps {
  episode: Episode;
}

const LatestEpisode: React.FC<LatestEpisodeProps> = ({ episode }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Latest <span className="gradient-text">Episode</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive into our most recent conversation and discover insights that will transform your tech journey.
          </p>
        </div>

        {/* Episode card */}
        <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 lg:p-12 card-hover">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Episode thumbnail */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-500/30 to-primary-700/30 flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary-400" fill="currentColor" />
                </div>
              </div>
              {/* Play button overlay */}
              <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-all duration-300 rounded-2xl group">
                <div className="bg-primary-600 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </button>
            </div>

            {/* Episode content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(episode.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{episode.duration}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {episode.title}
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed">
                {episode.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex items-center justify-center gap-3">
                  <Play className="w-5 h-5" fill="currentColor" />
                  Play Now
                </button>
                <button className="btn-secondary flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5" />
                  Add to Playlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestEpisode;