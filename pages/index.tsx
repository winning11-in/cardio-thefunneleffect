import React from "react";
import { GetStaticProps } from "next";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import BlogCards from "@/components/BlogCards";
import Sidebar from "@/components/Sidebar";
import YouTubePlaylists from "@/components/YouTubePlaylists";
import { pagesAPI, ApiPage } from "@/services/api";

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

interface HomeProps {
  blogPosts: ApiPage[];
  popularPosts: PopularPost[];
  categories: Category[];
}

export default function Home({ blogPosts, popularPosts, categories }: HomeProps) {
  return (
    <Layout>
      <Hero />

      <YouTubePlaylists />

      {/* Featured Content Section */}
      <div className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950 dark:via-gray-900 dark:to-teal-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200 dark:bg-emerald-800 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-200 dark:bg-teal-800 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-200 dark:bg-green-800 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              Latest Medical Insights
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Discover{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                Cardiology Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore cutting-edge cardiology research, clinical breakthroughs, and evidence-based practices
              that are shaping the future of cardiovascular medicine and patient care.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="xl:col-span-8">
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-100 dark:border-emerald-800">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Articles</h3>
                  <div className="flex items-center text-emerald-600 dark:text-emerald-400">
                    <span className="text-sm font-medium mr-2">View All</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <BlogCards limit={6} showViewAll={true} posts={blogPosts} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="xl:col-span-4">
              <div className="sticky top-8">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 dark:border-emerald-800">
                  <Sidebar popularPosts={popularPosts} categories={categories} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
     const allBlogsResponse = await pagesAPI.getPages({
       groups: ['cardiology'],
      limit: 100,  
      page: 1
    });
    
     const latestBlogs = allBlogsResponse.pages.slice(0, 6);
    
     const popularPosts: PopularPost[] = allBlogsResponse.pages
      .filter(post => post.popular === true) // Filter posts marked as popular
      .slice(0, 4) // Limit to 4
      .map(post => ({
        title: post.title,
        category:  post.category || 'Uncategorized',
        date: new Date(post.createdAt).toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        }),
        image: post.thumbnailUrl || post.imageUrl || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop&crop=center',
        slug: post.slug
      }));
    
     if (popularPosts.length === 0) {
      const fallbackPopular: PopularPost[] = allBlogsResponse.pages
        .slice(0, 4)
        .map(post => ({
          title: post.title,
          category: post.tags?.[0] || post.category || 'Uncategorized',
          date: new Date(post.createdAt).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          }),
          image: post.thumbnailUrl || post.imageUrl || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop&crop=center',
          slug: post.slug
        }));
      popularPosts.push(...fallbackPopular);
    }
    
     const categoryMap = new Map<string, number>();
    allBlogsResponse.pages.forEach(post => {
      const category =  post.category || 'Uncategorized';
      categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
    });
    
     const categories: Category[] = Array.from(categoryMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count); 
    
    return {
      props: {
        blogPosts: latestBlogs,
        popularPosts,
        categories,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps for home page:', error);
    return {
      props: {
        blogPosts: [],
        popularPosts: [],
        categories: [],
      },
    };
  }
};
