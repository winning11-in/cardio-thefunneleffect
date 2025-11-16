import { Episode, BlogPost, Feature, SocialLink } from '@/types';

export const latestEpisode: Episode = {
  id: "ep-001",
  title: "Building Scalable Systems: Lessons from Tech Giants",
  description: "Dive deep into the architectural decisions that power the world's largest tech companies. Learn about microservices, distributed systems, and the challenges of scaling to millions of users.",
  thumbnail: "/images/episode-001.jpg",
  duration: "45:32",
  publishDate: "2024-11-10",
  audioUrl: "/audio/episode-001.mp3",
  featured: true
};

export const recentEpisodes: Episode[] = [
  {
    id: "ep-002",
    title: "The Future of AI in Software Development",
    description: "Exploring how artificial intelligence is transforming the way we write, test, and deploy code.",
    thumbnail: "/images/episode-002.jpg",
    duration: "38:15",
    publishDate: "2024-11-03",
    audioUrl: "/audio/episode-002.mp3"
  },
  {
    id: "ep-003",
    title: "DevOps Best Practices for Modern Teams",
    description: "A comprehensive guide to implementing effective DevOps practices in your organization.",
    thumbnail: "/images/episode-003.jpg",
    duration: "42:20",
    publishDate: "2024-10-27",
    audioUrl: "/audio/episode-003.mp3"
  }
];

 

export const features: Feature[] = [
  {
    id: "tutorials",
    title: "Step-by-Step Tutorials",
    description: "Comprehensive tutorials covering programming languages, frameworks, and tools with hands-on examples and practical projects.",
    icon: "BookOpen"
  },
  {
    id: "guides",
    title: "Learning Guides",
    description: "Structured learning paths for beginners to advanced developers, covering everything from basics to advanced concepts.",
    icon: "TrendingUp"
  },
  {
    id: "tips",
    title: "Pro Tips & Tricks",
    description: "Expert tips, best practices, and insider knowledge to help you code more efficiently and avoid common pitfalls.",
    icon: "Users"
  },
  {
    id: "resources",
    title: "Learning Resources",
    description: "Curated collection of tools, libraries, documentation, and resources to accelerate your tech learning journey.",
    icon: "Headphones"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    url: "https://youtube.com/@thefunneleffect",
    icon: "Youtube"
  },
  {
    name: "Instagram", 
    url: "https://instagram.com/thefunneleffect",
    icon: "Instagram"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/thefunneleffect", 
    icon: "Twitter"
  }
];

// Re-export blog functions for consistency
export { blogPosts, getBlogPosts, getBlogPost, getCategories } from './blogPosts';