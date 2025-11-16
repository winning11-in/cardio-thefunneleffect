'use client';

import React from 'react';
import { Headphones, BookOpen, TrendingUp, Users } from 'lucide-react';
import { Feature } from '@/types';

interface FeaturesSectionProps {
  features: Feature[];
}

const iconMap = {
  Headphones,
  BookOpen, 
  TrendingUp,
  Users
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What You'll <span className="gradient-text">Discover</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive platform designed to accelerate your growth in the tech industry.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Headphones;
            
            return (
              <div 
                key={feature.id}
                className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 card-hover text-center group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;