# Deployment Guide

## Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js portfolio.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI/ML portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!**
   - Your site will be live at `https://your-project.vercel.app`
   - Every push to `main` will trigger a new deployment
   - Get a custom domain in Vercel settings

### Environment Variables (if needed)

If you add Formspree or other integrations:
- Go to Project Settings → Environment Variables
- Add your keys
- Redeploy

## Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or higher

2. **Deploy**
   - Connect your GitHub repo
   - Configure build settings
   - Deploy

## Option 3: Self-Hosting

### Build for Production

```bash
npm run build
npm start
```

### Using Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Using PM2 (for VPS)

```bash
npm install -g pm2
npm run build
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## SSL Certificate

Both Vercel and Netlify provide free SSL certificates automatically.

For self-hosting, use [Let's Encrypt](https://letsencrypt.org/).

## Performance Optimization

Your portfolio is already optimized, but here are some tips:

1. **Images**: Replace placeholder images with optimized versions
2. **Fonts**: Inter is already optimized via `next/font`
3. **Analytics**: Add Vercel Analytics or Google Analytics
4. **Monitoring**: Use Vercel's built-in monitoring

## Updating After Deployment

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
4. Vercel/Netlify will auto-deploy

## Troubleshooting

### Build Fails

Check:
- Node version (should be 18+)
- No TypeScript errors: `npm run build`
- All dependencies installed: `npm install`

### Site Not Updating

- Clear Vercel/Netlify cache and redeploy
- Check build logs for errors
- Verify git push was successful

### Images Not Loading

- Ensure images are in the `public/` folder
- Use correct paths: `/image.png` not `./image.png`
- Configure image domains in `next.config.js` if using external images

## Contact Form Setup

To make the contact form work in production:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Get your form endpoint
4. Add it to environment variables:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
5. Update `components/sections/contact.tsx` to use the endpoint

## Monitoring & Analytics

### Vercel Analytics (Free)

Add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to environment variables
3. Install `@next/third-parties`
4. Add to layout

## Security

Your portfolio is static and secure by default. Additional tips:

- Never commit `.env` files with secrets
- Use environment variables for API keys
- Keep dependencies updated: `npm audit`
- Enable Vercel's security features

## Cost

- **Vercel Free Tier**: Unlimited personal projects
- **Netlify Free Tier**: 100GB bandwidth/month
- **Domain**: ~$10-15/year (optional)

## Support

If you encounter issues:
1. Check build logs in Vercel/Netlify dashboard
2. Verify all placeholder links are updated
3. Test locally first: `npm run build && npm start`
4. Check [Next.js documentation](https://nextjs.org/docs)
