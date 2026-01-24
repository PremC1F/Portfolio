# Prem Babu Kanaparthi - AI/ML Engineer Portfolio

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing AI/ML engineering expertise with smooth animations and a clean, minimal design.

## Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for micro-interactions
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach
- **Type-Safe**: Full TypeScript implementation
- **Content Management**: Easy-to-update data files
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Accessible**: WCAG compliant components

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout with theme provider
│   ├── page.tsx          # Main page with all sections
│   └── globals.css       # Global styles and theme variables
├── components/
│   ├── navigation.tsx    # Sticky nav with smooth scroll
│   ├── theme-toggle.tsx  # Dark/light mode toggle
│   ├── footer.tsx        # Footer with social links
│   ├── ui/               # shadcn/ui components
│   ├── providers/        # Theme provider wrapper
│   └── sections/         # Page sections
│       ├── hero.tsx
│       ├── about.tsx
│       ├── experience.tsx
│       ├── projects.tsx
│       ├── skills.tsx
│       ├── education.tsx
│       └── contact.tsx
└── data/                 # Content management
    ├── types.ts          # TypeScript interfaces
    ├── projects.ts       # Projects data
    ├── experience.ts     # Work experience
    ├── skills.ts         # Skills & technologies
    ├── education.ts      # Education history
    ├── publications.ts   # Publications & certifications
    └── contact.ts        # Contact information
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Updating Content

All content is stored in TypeScript files in the `/data` directory. Simply edit these files to update your portfolio:

### Projects (`data/projects.ts`)

```typescript
{
  id: "unique-id",
  title: "Project Title",
  description: "Short description",
  details: ["Bullet point 1", "Bullet point 2"],
  tags: ["Tag1", "Tag2"],
  category: "RAG Systems", // or "MLOps", "Computer Vision", "NLP"
  github: "https://github.com/username/repo",
  demo: "https://demo-url.com" // optional
}
```

### Experience (`data/experience.ts`)

```typescript
{
  id: "unique-id",
  role: "Job Title",
  company: "Company Name",
  location: "City, State/Country",
  period: "Month Year - Month Year",
  startDate: "YYYY-MM",
  endDate: "YYYY-MM",
  achievements: ["Achievement 1", "Achievement 2"]
}
```

### Skills (`data/skills.ts`)

```typescript
{
  category: "Category Name",
  skills: ["Skill1", "Skill2", "Skill3"]
}
```

### Contact Info (`data/contact.ts`)

Update your contact information, social links, and location.

### Education (`data/education.ts`)

Add or update your degrees and certifications.

### Publications (`data/publications.ts`)

Add research papers or certifications with respective links.

## Customization

### Colors

The portfolio uses a clean color scheme defined in `app/globals.css`. The primary gradient uses blue-to-purple:

- Light mode: Clean whites, soft grays, blue/purple accents
- Dark mode: Dark backgrounds (#0a0a0a), subtle grays, adjusted accents

To change the accent colors, search for:
- `from-blue-600 to-purple-600` (gradients)
- `text-blue-600` and `text-purple-600` (text colors)

### Fonts

The portfolio uses Inter font. To change it, edit `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

### Animations

Animations are configured in component files using Framer Motion. To adjust:

- **Fade-in duration**: Change `duration: 0.5` in `fadeInUp` objects
- **Delay between items**: Adjust `delay: index * 0.1`
- **Hero gradient**: Modify the `animate` array in `hero.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

Build the production bundle:

```bash
npm run build
npm start
```

## Contact Form Integration

The contact form currently uses a `mailto:` fallback. For a better experience, integrate with [Formspree](https://formspree.io/):

1. Sign up at Formspree
2. Create a new form
3. Update `components/sections/contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: JSON.stringify(formState),
    headers: { "Content-Type": "application/json" }
  });
};
```

## Performance

- Images: Use Next.js `Image` component for optimization
- Fonts: Automatically optimized via `next/font`
- Code splitting: Automatic with Next.js App Router
- CSS: Tailwind CSS purges unused styles in production

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)
