import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ApiPage } from '@/services/api';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  className?: string;
  // Additional SEO props
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noIndex?: boolean;
  post?: ApiPage | null;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "The Funnel Effect - Professional Writer & Creative Blogger",
  description = "Hello, I'm a content writer who is fascinated by content features, creativity and lifestyle. She helps brands bring the right content to the right people.",
  ogTitle,
  ogDescription,
  ogImage,
  className = "min-h-screen bg-white dark:bg-black",
  // Additional SEO props
  metaTitle,
  metaDescription,
  metaKeywords,
  author = "Cardio Effect Team",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noIndex = false,
  post
}) => {
  // Extract meta information from post if provided
  const postTitle = post ? `${post.title} - Cardio Effect` : undefined;
  const postDescription = post ? post.description : undefined;
  const postMetaTitle = post ? post.metaTitle : undefined;
  const postMetaDescription = post ? post.metaDescription : undefined;
  const postMetaKeywords = post ? post.metaKeywords : undefined;
  const postOgTitle = post ? `${post.title} - Cardio Effect` : undefined;
  const postOgDescription = post ? post.description : undefined;
  const postOgImage = post ? (post.imageUrl || post.thumbnailUrl) : undefined;
  const postPublishedTime = post ? post.createdAt : undefined;
  const postModifiedTime = post ? post.updatedAt : undefined;
  const postSection = post ? (post.category || "Blog") : undefined;
  const postTags = post ? post.tags : undefined;
  const postCanonical = post ? `https://thefunneleffect.com/blogs/${post.slug}` : undefined;

  const finalTitle = postMetaTitle || metaTitle || postTitle || title;
  const finalDescription = postMetaDescription || metaDescription || postDescription || description;
  const finalOgTitle = ogTitle || postOgTitle || finalTitle;
  const finalOgDescription = ogDescription || postOgDescription || finalDescription;
  const finalKeywords = metaKeywords || postMetaKeywords || (postTags || tags).join(', ');
  const finalAuthor = author;
  const finalPublishedTime = publishedTime || postPublishedTime;
  const finalModifiedTime = modifiedTime || postModifiedTime;
  const finalSection = section || postSection;
  const finalTags = postTags || tags;
  const finalCanonical = canonical || postCanonical;
  const finalOgImage = ogImage || postOgImage;

  return (
    <>
      <Head>
        <title>{finalTitle}</title>
        <meta name="description" content={finalDescription} />
        
        {/* SEO Meta Tags */}
        {finalKeywords && <meta name="keywords" content={finalKeywords} />}
        <meta name="author" content={finalAuthor} />
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
        {finalCanonical && <link rel="canonical" href={finalCanonical} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={finalOgTitle} />
        <meta property="og:description" content={finalOgDescription} />
        <meta property="og:type" content="website" />
        {finalOgImage && <meta property="og:image" content={finalOgImage} />}
        <meta property="og:site_name" content="Cardio Effect" />
        
        {/* Article specific Open Graph */}
        {finalSection && <meta property="article:section" content={finalSection} />}
        {finalAuthor && <meta property="article:author" content={finalAuthor} />}
        {finalPublishedTime && <meta property="article:published_time" content={finalPublishedTime} />}
        {finalModifiedTime && <meta property="article:modified_time" content={finalModifiedTime} />}
        {finalTags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={finalOgTitle} />
        <meta name="twitter:description" content={finalOgDescription} />
        {finalOgImage && <meta name="twitter:image" content={finalOgImage} />}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${className} pb-16 md:pb-0`}>
        <Header />
        <div className="pt-0 md:pt-0">
          {children}
        </div>
        <Footer socialLinks={[]} />
      </main>
    </>
  );
};

export default Layout;