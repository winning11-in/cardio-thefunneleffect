import React from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  User,
} from "lucide-react";
import { ApiPage, pagesAPI } from "@/services/api";
import Layout from "@/components/Layout";

interface BlogDetailPageProps {
  post: ApiPage | null;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ post }) => {
  if (!post) {
    return (
      <Layout
        title="Blog Post Not Found - Cardio Effect"
        description="The blog post you're looking for doesn't exist."
        noIndex={true}
      >
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blogs"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReadTime = () => {
    if (post.readTime) {
      return `${post.readTime} min read`;
    }
    return "5 min read"; // default
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.title,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <Layout post={post}>
      <div className="relative bg-white dark:bg-black pt-20 pb-0">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-6">
            <Link
              href="/blogs"
              className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 group text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Blogs
            </Link>
          </div>

          <div className="mb-4">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
              {post.tags?.[0] || post.category || "Blog"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center text-sm">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-bold text-white">F</span>
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Cardio Effect
              </span>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2" />
              <span>{getReadTime()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {(post.imageUrl || post.thumbnailUrl) && (
        <div className="relative bg-gray-50 dark:bg-black  ">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-black p-1">
              <img
                src={post.imageUrl || post.thumbnailUrl}
                alt={post.title}
                className="w-full object-cover rounded-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-none">
            {post.content ? (
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="blog-content text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-xl mb-8 font-light leading-relaxed">{post.description}</p>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                        Content Coming Soon
                      </h3>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        The full content for this blog post is currently being prepared. Check back soon for the complete article!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Article Footer */}
      <div className="bg-gray-50 dark:bg-black py-8">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white dark:bg-black rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Enjoyed this article?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Share it with your network or explore more insights from our blog.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
                <Link
                  href="/blogs"
                  className="inline-flex items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 text-sm"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await pagesAPI.getPages({
      groups: ["cardiology"],
      limit: 100
    });
    const paths = response.pages.map((post) => ({
      params: { slug: post.slug },
    }));

    console.log(
      "Generated paths for blogs:",
      paths.map((p) => p.params.slug)
    );

    return {
      paths,
      fallback: false, // Only pre-built paths are valid
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  if (!slug) {
    console.log("No slug provided");
    return {
      notFound: true,
    };
  }

  try {
    console.log("Fetching blog post with slug:", slug);
    const post = await pagesAPI.getPageBySlug(slug);

    if (!post) {
      console.log("No post found for slug:", slug);
      return {
        notFound: true,
      };
    }

    console.log("Found post:", {
      title: post.title,
      slug: post.slug,
      groups: post.groups,
      hasContent: !!post.content,
      availableFields: Object.keys(post),
    });

    // Check if the post belongs to the blogs group
    if (!post.groups || !post.groups.includes("cardiology")) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
    };
  } catch (error: any) {
    console.error("Error fetching blog post for slug:", slug, error);
    // Log more details about the error
    if (error?.response) {
      console.error(
        "API Error Response:",
        error.response.status,
        error.response.data
      );
    }
    return {
      notFound: true,
    };
  }
};

export default BlogDetailPage;
