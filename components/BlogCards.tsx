import React from "react";
import Link from "next/link";
import { ApiPage } from "@/services/api";

const BlogCard: React.FC<{
  title: string;
  excerpt: string;
  category?: string;
  readTime?: number;
  date: string;
  image?: string;
  slug: string;
}> = ({ title, excerpt, category, readTime, date, image, slug }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReadTime = () => {
    if (readTime) {
      return `${readTime} min read`;
    }
    return "5 min read"; // default
  };

  return (
    <article className="bg-white dark:bg-black rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-50 dark:border-gray-800">
      <div className="relative overflow-hidden">
        <div
          className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: image ? `url(${image})` : undefined,
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
            {category || "Blog"}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-2">
          <span>{formatDate(date)}</span>
          <span>•</span>
          <span>{getReadTime()}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 leading-tight">
          <Link href={`/blogs/${slug}`}>{title}</Link>
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        <Link
          href={`/blogs/${slug}`}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm transition-colors inline-flex items-center"
        >
          Continue Reading
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

const BlogCards: React.FC<{
  limit?: number;
  showViewAll?: boolean;
  posts: ApiPage[];
}> = ({ limit, showViewAll = false, posts }) => {

  const displayPosts = limit ? posts.slice(0, limit) : posts;

  if (displayPosts.length === 0) {
    return (
      <section className="py-0">
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-12 h-12 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No Blog Posts Found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Check back later for new content!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayPosts.map((post) => (
          <BlogCard
            key={post._id}
            title={post.title}
            excerpt={post.description}
            category={post.category}
            readTime={post.readTime}
            date={post.createdAt}
            image={post.thumbnailUrl}
            slug={post.slug}
          />
        ))}
      </div>

      {showViewAll && displayPosts.length > 0 && (
        <div className="text-center mt-8">
          <Link
            href="/blogs"
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center"
          >
            View All Blogs
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
};

export default BlogCards;
