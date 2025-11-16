export interface Episode {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  publishDate: string;
  audioUrl: string;
  featured?: boolean;
}

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  description?: string;
  category: string;
  readTime: string;
  date: string;
  publishDate?: string;
  image: string;
  author: string;
  featured?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}