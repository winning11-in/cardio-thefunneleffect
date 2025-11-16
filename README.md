# Cardio Effect - Landing Page

A modern, responsive landing page for Cardio Effect podcast platform built with Next.js 14, TypeScript, and Tailwind CSS. Features static export for optimal performance and SEO.

## Features

- 🎯 **Modern Design**: Clean, dark theme with bluish accents
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Static Export**: Pre-built static files for fast loading
- 🎨 **Smooth Animations**: Hover effects and transitions
- 📧 **Newsletter Signup**: Email subscription functionality
- 🎵 **Episode Showcase**: Latest podcast episode display
- 📝 **Blog System**: Complete blog with listing and detail pages
- 🔍 **Search & Filter**: Blog search and category filtering
- 🔗 **Social Links**: YouTube, Instagram, Twitter integration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Export**: Static site generation
- **Deployment**: Vercel ready

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build and Export Static Site**
   ```bash
   npm run export
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── blogs/             # Blog pages
│   │   ├── [slug]/        # Dynamic blog detail pages
│   │   ├── layout.tsx     # Blog layout
│   │   └── page.tsx       # Blog listing
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── BlogSection.tsx   # Blog grid for home
│   ├── FeaturesSection.tsx # Features
│   ├── Footer.tsx        # Footer with navigation
│   ├── Hero.tsx          # Hero section
│   ├── LatestEpisode.tsx # Latest episode
│   └── Newsletter.tsx    # Email signup
├── data/                 # Static data
│   └── index.ts         # Episodes, blogs, features
├── types/               # TypeScript types
│   └── index.ts        # Type definitions
└── public/             # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run export` - Build and export static site
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

### Home Page (/)
- Hero section with CTAs
- Latest episode showcase
- Blog articles grid
- Features section
- Newsletter signup
- Footer with navigation

### Blog Listing (/blogs)
- Search functionality
- Category filtering
- Responsive grid layout
- Pagination ready

### Blog Detail (/blogs/[slug])
- Full article content
- Author information
- Related articles
- Social sharing
- Navigation breadcrumbs

## Static Export

This project is configured for static export, meaning it generates pre-built HTML files that can be hosted on any static hosting platform:

```bash
npm run export
```

The exported files will be in the `out/` directory and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## Customization

### Adding New Blog Posts
Edit `/data/index.ts` and add new blog post objects to the `blogPosts` array:

```typescript
{
  id: "unique-id",
  title: "Your Blog Title",
  description: "Brief description",
  publishDate: "2024-11-14",
  readTime: "5 min read",
  slug: "your-blog-slug",
  author: "Author Name",
  category: "Category"
}
```

### Styling
- Update `/tailwind.config.js` for theme changes
- Modify `/app/globals.css` for global styles
- Edit component files for specific styling

### Content
- Update `/data/index.ts` for episodes, features, and social links
- Modify components for layout changes

## Deployment

### Static Export to Vercel
1. Build the project: `npm run export`
2. Deploy the `out/` directory to Vercel
3. Configure custom domain if needed

### Other Hosting Platforms
The exported static files in the `out/` directory can be deployed to any static hosting platform.

## License

MIT License - see LICENSE file for details.