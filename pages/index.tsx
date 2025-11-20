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

       <div className="max-w-6xl mx-auto px-6 py-12 bg-white dark:bg-black transition-colors duration-300">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Tutorials
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay up-to-date with the latest programming tutorials, guides, and
            tech insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2">
            <BlogCards limit={6} showViewAll={true} posts={blogPosts} />
          </div>

           <div className="lg:col-span-1">
            <Sidebar popularPosts={popularPosts} categories={categories} />
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
