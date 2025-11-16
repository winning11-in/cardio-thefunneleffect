import axios from 'axios';

const API_BASE_URL = 'https://be-thefunneleffect.vercel.app/api';

export interface ApiPage {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  audioUrl?: string;
  groups: string[];
  slug: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  popular?: boolean;
  tags: string[];
  category?: string;
  readTime?: number;
  createdAt: string;
  updatedAt: string;
}

export interface PagesResponse {
  pages: ApiPage[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

class PagesAPI {
  private api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
  });

  // Get all pages with optional filters
  async getPages(params?: {
    page?: number;
    limit?: number;
    groups?: string[];
    category?: string;
    popular?: boolean;
    tags?: string[];
  }): Promise<PagesResponse> {
    try {
      const response = await this.api.get('/pages', { params });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching pages:', error);
      throw error;
    }
  }

  // Get pages by group (e.g., "blogs")
  async getPagesByGroup(group: string, params?: {
    page?: number;
    limit?: number;
  }): Promise<PagesResponse> {
    try {
      const response = await this.api.get('/pages', { 
        params: { 
          ...params,
          groups: [group]
        }
      });
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching pages for group ${group}:`, error);
      throw error;
    }
  }

  // Get a single page by slug
  async getPageBySlug(slug: string): Promise<ApiPage> {
    try {
      const response = await this.api.get(`/pages/${slug}`);
      // Handle both possible response structures
      return response.data.data || response.data;
    } catch (error) {
      console.error('Error fetching page by slug:', error);
      throw error;
    }
  }

  // Get popular pages
  async getPopularPages(limit?: number): Promise<PagesResponse> {
    try {
      const response = await this.api.get('/pages', { 
        params: { 
          popular: true,
          limit: limit || 10
        }
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching popular pages:', error);
      throw error;
    }
  }
}

export const pagesAPI = new PagesAPI();
export default pagesAPI;