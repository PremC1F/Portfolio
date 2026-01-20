# Content Update Guide

This guide will help you quickly update your portfolio content.

## Quick Updates

All your content lives in the `/data` folder. Each file is a TypeScript file that exports data in a structured format.

### 1. Update Contact Information

**File:** `data/contact.ts`

Replace the placeholder links with your actual information:

```typescript
export const contactInfo: ContactInfo = {
  email: "prem.b.kanaparthi@gmail.com",
  phone: "585-290-3036",
  linkedin: "https://linkedin.com/in/YOUR-PROFILE", // Update this
  github: "https://github.com/YOUR-USERNAME",        // Update this
  location: "Rochester, NY",
};
```

### 2. Add or Update Projects

**File:** `data/projects.ts`

To add a new project, copy this template and add it to the `projects` array:

```typescript
{
  id: "unique-project-id",
  title: "Your Project Title",
  description: "One-line description (appears on card)",
  details: [
    "Key achievement or feature 1",
    "Key achievement or feature 2",
    "Key achievement or feature 3",
  ],
  tags: ["Technology1", "Technology2", "Technology3"],
  category: "RAG Systems", // Options: "RAG Systems", "MLOps", "Computer Vision", "NLP", "Multi-Agent"
  github: "https://github.com/username/repo",
  demo: "https://your-demo-url.com", // Optional - remove if not needed
}
```

**Filter Categories:**
- "RAG Systems"
- "MLOps"
- "Computer Vision"
- "NLP"
- "Multi-Agent"

### 3. Update Experience

**File:** `data/experience.ts`

To add a new job, add this to the beginning of the `experiences` array:

```typescript
{
  id: "company-name-lowercase",
  role: "Your Job Title",
  company: "Company Name",
  location: "City, State/Country",
  period: "Month Year - Present",      // e.g., "Jan 2024 - Present"
  startDate: "YYYY-MM",                 // e.g., "2024-01"
  endDate: "YYYY-MM",                   // or "present" for current role
  achievements: [
    "Quantified achievement with metrics (e.g., improved X by 25%)",
    "Technical accomplishment with technologies used",
    "Impact on business or team",
  ],
},
```

### 4. Update Skills

**File:** `data/skills.ts`

The skills are organized into three categories. Add new skills to the appropriate array:

```typescript
{
  category: "Machine Learning & AI",
  skills: ["PyTorch", "TensorFlow", "Your New Skill"], // Add here
},
```

### 5. Update Education

**File:** `data/education.ts`

Your current degrees are already added. To add a new degree:

```typescript
{
  id: "institution-abbreviation",
  degree: "Degree Name (e.g., PhD in Computer Science)",
  institution: "University Name",
  location: "City, State/Country",
  period: "Month Year - Month Year",
  specialization: "Your focus area (optional)",
  gpa: "X.XX/4.00 (optional)",
}
```

### 6. Add Publications or Certifications

**File:** `data/publications.ts`

To add a new publication or certification:

```typescript
{
  id: "publication-id",
  title: "Publication or Certification Title",
  type: "paper",  // or "certification"
  link: "https://link-to-paper-or-cert.com",
  description: "Brief description (optional)",
}
```

## Testing Your Changes

After making changes:

1. Save the file
2. The development server will automatically reload
3. Check the website at `http://localhost:3000`
4. Verify your changes appear correctly

## Common Tasks

### Replace Placeholder Links

Search for `#` in all data files and replace with actual URLs:

```bash
# In projects.ts
github: "#"  →  github: "https://github.com/username/repo"

# In publications.ts
link: "#"  →  link: "https://actual-link.com"

# In contact.ts
linkedin: "#"  →  linkedin: "https://linkedin.com/in/your-profile"
```

### Change the About Section Text

**File:** `components/sections/about.tsx`

Find the paragraphs in the `AboutSection` component and update the text:

```typescript
<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
  Your new introduction text here...
</p>
```

### Update the Hero Section

**File:** `components/sections/hero.tsx`

Change the tagline:

```typescript
<motion.p className="text-lg sm:text-xl...">
  Your new tagline here
</motion.p>
```

## Tips

1. **Keep it concise**: Bullet points should be 1-2 lines max
2. **Use metrics**: Numbers and percentages make achievements more impressive
3. **Update regularly**: Keep your projects and experience current
4. **Test on mobile**: Check how it looks on different screen sizes
5. **Proofread**: Typos are more noticeable on a clean design

## Need Help?

- Check the main [README.md](README.md) for more detailed documentation
- All TypeScript files have type definitions in `data/types.ts`
- The project uses strict typing, so your editor will help catch mistakes
