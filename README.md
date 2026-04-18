# Manoj Sachdev Portfolio — Next.js

Dark minimal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Setup (3 steps)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
manoj-portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Home/Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects section
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## ✏️ Customization

- **Your Name/Info** → `components/About.tsx` and `components/Contact.tsx`
- **Projects** → `components/Projects.tsx` → edit the `projects` array
- **Skills** → `components/Skills.tsx` → edit the `categories` array
- **Social Links** → `components/Navbar.tsx` and `components/Footer.tsx`
- **Your Photo** → Replace the blob placeholder in `components/Hero.tsx` with:
  ```tsx
  import Image from 'next/image'
  <Image src="/your-photo.jpg" width={420} height={520} alt="Manoj" />
  ```
  (Put your photo in the `public/` folder)

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```
