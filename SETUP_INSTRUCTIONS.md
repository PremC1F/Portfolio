# Setup Instructions for Your New Portfolio

## What's New? 🎨

Your portfolio now features:
- ✨ **AI-Inspired Dynamic Theme** - Beautiful neural network-style gradients
- 🖼️ **Profile Picture Section** - Showcase your professional photo
- 📄 **Resume Section** - Download/view functionality
- 🌊 **Animated Backgrounds** - Floating orbs and particles
- 🎯 **Modern Color Palette** - Electric blue, vibrant purple, glowing cyan

## Quick Setup (5 minutes)

### 1. Add Your Profile Picture

**Step 1:** Get a professional headshot photo
- Square format works best (e.g., 800x800px)
- JPG or PNG format
- Good lighting, professional background

**Step 2:** Save it to your portfolio
```bash
# Save your photo as:
portfolio/public/profile.jpg
```

**Step 3:** Uncomment the image code
Edit `components/sections/hero.tsx` around line 131-137:

**Remove these lines:**
```tsx
<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
  <div className="text-center">
    <Sparkles className="w-16 h-16 mx-auto mb-4 text-blue-500 dark:text-blue-400" />
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Add your photo here:
      <br />
      <code className="text-xs">public/profile.jpg</code>
    </p>
  </div>
</div>
```

**Uncomment these lines:**
```tsx
<Image
  src="/profile.jpg"
  alt="Prem Babu Kanaparthi"
  fill
  className="object-cover"
  priority
/>
```

### 2. Add Your Resume PDF

**Step 1:** Export your resume as PDF
- Name it exactly: `resume.pdf`
- Make sure it's properly formatted

**Step 2:** Save it to public folder
```bash
# Save your PDF as:
portfolio/public/resume.pdf
```

**That's it!** The download and view buttons will now work automatically.

### 3. Update Colors (Optional)

The new theme uses:
- **Electric Blue** (#3b82f6) - Primary actions
- **Vibrant Purple** (#a855f7) - Secondary accents
- **Glowing Cyan** (#06b6d4) - Highlights

Want to change? Edit `app/globals.css` starting at line 49.

## What You'll See

### Hero Section (Top)
- **Animated floating orbs** (blue, purple, cyan) in background
- **Floating particles** drifting upward
- **Profile picture** with glowing ring effect
- **Rotating badges** ("AI/ML Engineer", "RIT 🎓")
- **Three CTA buttons**: View Projects, View Resume, Contact Me
- **"Available for opportunities" badge** at top

### Resume Section (New!)
- **Animated preview card** showing resume mockup
- **Download button** - Downloads PDF
- **View Online button** - Opens in new tab
- **Stats cards** - Years of experience, projects, skills
- **Glowing decorations** and smooth animations

### Background Theme
- **Light Mode**: Soft blues and purples on white
- **Dark Mode**: Deep space blue-black with neon accents
- **Subtle pulse animation** throughout the page
- **No more plain black!** Now it's a beautiful gradient

## Testing Your Changes

1. Make sure dev server is running:
```bash
cd portfolio
npm run dev
```

2. Open: http://localhost:3001

3. Test these features:
   - ✅ Profile picture loads and looks good
   - ✅ Resume download works
   - ✅ Resume view opens in new tab
   - ✅ Theme toggle (sun/moon) - see the colors change!
   - ✅ Smooth scroll to Resume section
   - ✅ Background animations are smooth

## File Locations

```
portfolio/
├── public/
│   ├── profile.jpg       ← ADD YOUR PHOTO HERE
│   └── resume.pdf        ← ADD YOUR RESUME HERE
├── components/sections/
│   ├── hero.tsx          ← Profile picture code
│   └── resume.tsx        ← Resume section
└── app/
    └── globals.css       ← Theme colors
```

## Troubleshooting

### Profile Picture Not Showing?
- Check file name is exactly `profile.jpg`
- Must be in `public/` folder
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors

### Resume Download Not Working?
- Check file name is exactly `resume.pdf`
- Must be in `public/` folder
- Try clicking "View Online" first
- Check file isn't corrupted

### Colors Look Wrong?
- Try toggling dark/light mode
- Clear browser cache
- Check `globals.css` saved correctly
- Restart dev server

### Animations Laggy?
- Normal on first load (initializing)
- Should be smooth after 2-3 seconds
- Check your browser's performance

## Advanced Customization

### Change Gradient Colors

Edit `components/sections/hero.tsx`:

**Find animated orbs (lines 28-65):**
```tsx
className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
```

**Change colors:**
- `blue-500` → any Tailwind color
- `/20` → opacity (higher = more visible)

### Adjust Animation Speed

**Slower animations:**
```tsx
duration: 20  →  duration: 30
```

**Faster animations:**
```tsx
duration: 20  →  duration: 10
```

### Remove Particles

Delete lines 68-86 in `hero.tsx` (the particle map loop)

### Change Profile Picture Shape

In `hero.tsx`, find:
```tsx
rounded-full  →  rounded-lg  (for square with rounded corners)
```

## What Makes This Unique?

Unlike typical developer portfolios with plain backgrounds:

✨ **Apple-Inspired Design Philosophy:**
- Subtle, purposeful animations
- Breathing space (generous padding)
- Focus on content hierarchy
- Premium feel without clutter

🎨 **AI/Neural Network Theme:**
- Floating orbs represent neural nodes
- Particles simulate data flow
- Gradients evoke connectivity
- Electric colors suggest innovation

🚀 **Performance:**
- GPU-accelerated animations
- Optimized blur effects
- No janky scrolling
- Fast loading times

## Need Help?

1. Check browser console (F12) for errors
2. Restart dev server: `npm run dev`
3. Clear cache: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
4. Check all files saved properly

## Next Steps

1. ✅ Add profile.jpg
2. ✅ Add resume.pdf
3. ✅ Test everything works
4. ✅ Customize colors if desired
5. ✅ Deploy to Vercel

Your portfolio is now truly unique and professional! 🎉
