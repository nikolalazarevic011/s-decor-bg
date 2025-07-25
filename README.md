# Stefan Portfolio - Next.js Website

Professional website for Stefan's PVC and Aluminum carpentry services. Built with Next.js for optimal SEO performance.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd "C:\Nikola\ME\proj\Stefan-NextJS"
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your website!

### 3. Build for Production
```bash
npm run build
npm run export
```

This creates a static export in the `out` folder ready for hosting.

## 📁 Project Structure

```
Stefan-NextJS/
├── components/           # Reusable React components
│   ├── ui/              # UI components (Button, Card, etc.)
│   ├── figma/           # Figma-related components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Services.tsx     # Services section
│   ├── Portfolio.tsx    # Portfolio section
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer
│   └── SEO.tsx          # SEO component
├── pages/               # Next.js pages
│   ├── _app.tsx         # App wrapper
│   ├── _document.tsx    # Document wrapper
│   └── index.tsx        # Homepage
├── styles/              # Global styles
│   └── globals.css      # Tailwind CSS imports
├── public/              # Static assets
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies
```

## 🎨 Features

- **SEO Optimized**: Server-side rendered with proper meta tags
- **Responsive Design**: Works perfectly on all devices
- **Static Export**: Can be hosted on any static hosting service
- **Fast Loading**: Optimized images and minimal JavaScript
- **Contact Form**: Ready-to-use contact form
- **Portfolio Filter**: Interactive portfolio with category filters

## 🔧 Customization

### Update Content
- Edit components in the `components/` folder
- Update SEO information in `components/SEO.tsx`
- Modify portfolio projects in `components/Portfolio.tsx`

### Styling
- All styling uses Tailwind CSS
- Global styles in `styles/globals.css`
- Component-specific styles inline with Tailwind classes

### Images
- Replace placeholder images with your own
- Images are optimized automatically with Next.js Image component

## 🌐 Deployment

### Static Hosting (Recommended)
1. Run `npm run build && npm run export`
2. Upload the `out` folder to any static hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

### Vercel (Easiest)
1. Push code to GitHub
2. Connect repository to Vercel
3. Automatic deployment on every push

## 📱 SEO Features

- Proper meta tags and Open Graph
- Structured data (Schema.org)
- Fast loading times
- Mobile-friendly
- Search engine optimized URLs

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

## 📞 Support

For any questions about the website setup, contact the development team.
