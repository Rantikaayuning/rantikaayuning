# 🎨 Customization Examples

Ini adalah contoh-contoh cara customize portfolio Anda.

## 1️⃣ Change Colors

Edit `tailwind.config.ts`:

### Option A: Modern Pink (Current)

```typescript
colors: {
  primary: '#ec4899',
  secondary: '#8b5cf6',
  tertiary: '#3b82f6',
}
```

### Option B: Pro Blue

```typescript
colors: {
  primary: '#0066cc',
  secondary: '#00d4ff',
  tertiary: '#0052a3',
}
```

### Option C: Vibrant Purple

```typescript
colors: {
  primary: '#a855f7',
  secondary: '#7c3aed',
  tertiary: '#d946ef',
}
```

### Option D: Fresh Green

```typescript
colors: {
  primary: '#10b981',
  secondary: '#059669',
  tertiary: '#047857',
}
```

### Option E: Energy Orange

```typescript
colors: {
  primary: '#f97316',
  secondary: '#ea580c',
  tertiary: '#c2410c',
}
```

## 2️⃣ Add Custom Sections

### Example: Add a Testimonials Section

Create `src/components/Testimonials.tsx`:

```typescript
'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Product Manager',
    company: 'Tech Corp',
    text: 'Rantika built an amazing website for us. Very professional and responsive!',
    image: '/path-to-image.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="section">
      <h2 className="section-title">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="glass p-6 rounded-lg">
            <p className="mb-4">"{testimonial.text}"</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

Then add to `src/app/page.tsx`:

```typescript
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      {/* ... other sections */}
      <Testimonials />
    </main>
  )
}
```

## 3️⃣ Add Blog Section

Create `src/app/blog/page.tsx`:

```typescript
'use client'

import { motion } from 'framer-motion'

const articles = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    slug: 'getting-started-nextjs',
    category: 'Tutorial',
    date: '2024-01-15',
    excerpt: 'Learn the basics of Next.js and start building...',
    readTime: '5 min read',
  },
]

export default function Blog() {
  return (
    <main className="pt-20">
      <section className="section">
        <h1 className="section-title">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <motion.article key={article.id} className="glass p-6 rounded-lg">
              <span className="text-sm text-primary">{article.category}</span>
              <h2 className="text-2xl font-bold mt-2 mb-3">{article.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{article.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
```

## 4️⃣ Customize Navbar Links

Edit `src/components/Navbar.tsx`:

```typescript
const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Blog", href: "/blog" }, // Add this
  { label: "Contact", id: "contact" },
];
```

## 5️⃣ Add Dark Mode Toggle to Navbar

Already implemented! Just click the sun/moon icon.

## 6️⃣ Change Hero Section Image

Edit `src/components/Hero.tsx`:

```typescript
// Replace existing image with yours
<img
  src="/images/your-hero-image.png"
  alt="Profile"
  className="w-48 h-48 rounded-full border-4 border-primary"
/>
```

## 7️⃣ Add Animation Variants

Edit `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in',
  'slide-up': 'slideUp 0.5s ease-out',
  'float': 'float 3s ease-in-out infinite',
  'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
},
keyframes: {
  pulseGlow: {
    '0%, 100%': {
      boxShadow: '0 0 5px rgba(236, 72, 153, 0.5)'
    },
    '50%': {
      boxShadow: '0 0 20px rgba(236, 72, 153, 0.9)'
    },
  },
}
```

## 8️⃣ Change Fonts

Add Google Font ke `src/app/layout.tsx`:

```typescript
import { Montserrat, Raleway } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout() {
  return (
    <html className={montserrat.className}>
      {/* ... */}
    </html>
  )
}
```

Popular fonts:

- **Montserrat**: Modern, geometric
- **Raleway**: Elegant, thin
- **Roboto**: Clean, professional
- **Poppins**: Friendly, rounded (current)
- **Inter**: Excellent for UI
- **Playfair Display**: Fancy, serif

## 9️⃣ Add Scroll Animation

Already implemented with Framer Motion!

Example of adding more:

```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Your content
</motion.div>
```

## 🔟 Add Background Blob Animation

Already exists in `Hero.tsx`! You can customize:

```typescript
<div className="absolute w-80 h-80
  bg-gradient-primary rounded-full
  mix-blend-multiply filter blur-3xl
  opacity-20 animate-blob" />
```

Change `opacity-20` to `opacity-30` for more visible blobs.

## 1️⃣1️⃣ Custom Email Template

Edit `src/app/api/contact/route.ts`:

```typescript
// Customize email HTML
html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h1 style="color: #ec4899;">New Contact Form Submission</h1>
    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <div style="border-top: 1px solid #ddd; margin: 20px 0; padding-top: 20px;">
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
    <p style="color: #666; font-size: 12px;">
      Sent from your portfolio website
    </p>
  </div>
`,
```

## 1️⃣2️⃣ Add Favicon

Place your favicon image here:

```
public/favicon.ico
```

It will automatically be used!

## 1️⃣3️⃣ Add Open Graph Tags (Social Sharing)

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Rantika Ayuning | Frontend Developer",
  description: "Professional frontend developer portfolio...",
  openGraph: {
    title: "Rantika Ayuning | Frontend Developer",
    description: "Check out my latest projects and skills",
    url: "https://your-domain.com",
    siteName: "Rantika Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
```

## 1️⃣4️⃣ Add Loading Skeleton

Create `src/components/SkeletonLoader.tsx`:

```typescript
export default function SkeletonLoader() {
  return (
    <div className="glass p-6 rounded-lg animate-pulse">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
  )
}
```

## 1️⃣5️⃣ Add Loading State to Form

Already implemented in `ContactForm.tsx`!

```typescript
<button disabled={status.type === 'loading'}>
  {status.type === 'loading' ? 'Sending...' : 'Send'}
</button>
```

---

## 📚 More Resources

- [Next.js Docs - Styling](https://nextjs.org/docs/app/building-your-application/styling)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Google Fonts](https://fonts.google.com/)

---

Pick what resonates dengan brand Anda! 🎨
