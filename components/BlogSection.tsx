'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-dark-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into technical concepts, industry insights, and practical tutorials 
            written by experts in the field.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 card-hover group"
            >
              {/* Category badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-600/20 text-primary-400 mb-4">
                {post.category}
              </div>

              {/* Post title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>

              {/* Post description */}
              <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                {post.description}
              </p>

              {/* Post meta */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {/* <span>{new Date(post?.publishDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span> */}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{post.author}</span>
                </div>
                
                {/* Read more link */}
                <Link 
                  href={`/blogs/${post.slug}`}
                  className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all blogs button */}
        <div className="text-center">
          <Link href="/blogs" className="btn-secondary flex items-center gap-3 mx-auto">
            <ExternalLink className="w-5 h-5" />
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;