# 🎯 Portfolio Setup Guide - PANDUAN LENGKAP

Selamat datang! Di sini adalah panduan lengkap untuk menggunakan portfolio Next.js barumu.

## 🚀 Persiapan Awal

### 1. Install Dependencies

Buka terminal dan jalankan:

```bash
npm install --legacy-peer-deps
```

Atau jika ada masalah dependency, gunakan:

```bash
npm install --force
```

### 2. Konfigurasi Environment Variables

Buat file `.env.local` di root folder project:

```bash
cp .env.example .env.local
```

Edit `.env.local` dengan email configuration Anda:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

#### Cara Setup Email (Gmail):

1. Buka [myaccount.google.com](https://myaccount.google.com)
2. Pergi ke "Security" (left sidebar)
3. Aktifkan "2-Step Verification" jika belum
4. Scroll ke bawah, cari "App passwords"
5. Select "Mail" dan "Windows Computer"
6. Google akan generate password - copy dan paste ke `.env.local`

### 3. Start Development Server

```bash
npm run dev
```

Buka browser dan kunjungi: [http://localhost:3000](http://localhost:3000)

## ✏️ Personalisasi Portfolio

### Update Profile Information

Edit `src/data/portfolio.ts`:

```typescript
export const profile: Profile = {
  name: "YOUR NAME HERE",
  title: "Your Title",
  subtitle: "Your Subtitle",
  email: "your@email.com",
  // ... etc
};
```

### Update Skills

```typescript
export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      // Add your skills here
    ],
  },
];
```

### Add Projects

```typescript
export const projects: Project[] = [
  {
    id: "1",
    name: "Project Name",
    description: "Short description",
    longDescription: "Detailed description",
    technologies: ["React", "Next.js", "Tailwind"],
    link: "https://project-link.com",
    github: "https://github.com/username/project",
    featured: true,
  },
];
```

### Update Social Links

```typescript
export const socials: Social[] = [
  {
    platform: "GitHub",
    url: "https://github.com/your-username",
    icon: "github",
  },
  // Add your socials
];
```

## 🎨 Customize Design

### Change Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#ec4899',   // Change primary color
  secondary: '#8b5cf6', // Change secondary color
  tertiary: '#3b82f6',  // Change tertiary color
}
```

Popular color options:

- **Tech Blue**: `#0066cc`
- **Modern Pink**: `#ec4899`
- **Purple Vibes**: `#a855f7`
- **Green Fresh**: `#10b981`
- **Orange Energy**: `#f97316`

### Change Fonts

Fonts are set in `globals.css`. Default adalah Poppins dari Google Fonts.

Untuk mengubah:

1. Edit `tailwind.config.ts` - fontFamily section
2. Atau langsung edit di `src/app/layout.tsx`

## 📱 Mobile Responsiveness

Portfolio sudah fully responsive! Tested pada:

- ✅ iPhone (375px - 812px)
- ✅ Tablet (768px - 1024px)
- ✅ Desktop (1440px+)

Untuk test, gunakan Chrome DevTools (F12) dan inspect mobile view.

## 📧 Configure Contact Form

### Option 1: Gmail (Free, recommended untuk permulaan)

Sudah dijelaskan di atas.

### Option 2: Resend (Free tier, best untuk production)

1. Sign up di [resend.com](https://resend.com)
2. Get API key
3. Update `.env.local`:

```
RESEND_API_KEY=your-api-key
```

4. Update `src/app/api/contact/route.ts`:

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Replace nodemailer with resend...
```

### Option 3: Custom SMTP

Edit `src/app/api/contact/route.ts` untuk menggunakan SMTP service apapun.

## 🚀 Deploy Portfolio

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect GitHub repo
5. Add Environment Variables (EMAIL_USER, EMAIL_PASSWORD)
6. Click Deploy!

### Deploy ke Netlify

1. Push ke GitHub
2. Buka [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add Environment Variables
7. Deploy!

### Deploy dengan Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🧪 Testing

### Run Build Test

```bash
npm run build
npm start
```

### Run Linting

```bash
npm run lint
```

## 🐛 Troubleshooting

### Problem: "Module not found"

**Solution**:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Problem: Port 3000 sudah digunakan

**Solution**:

```bash
npm run dev -- -p 3001  # Gunakan port 3001 instead
```

### Problem: Email tidak terkirim

**Checklist**:

- ✅ `.env.local` sudah dikonfigurasi dengan benar?
- ✅ Gmail app password (bukan regular password)?
- ✅ 2FA sudah enabled di Gmail?
- ✅ Email tidak blocked oleh security/firewall?

### Problem: Dark mode tidak work

**Solution**:

- Clear browser cache
- Check `ThemeProvider` di `src/app/providers.tsx`

## 📚 File Structure Explanation

```
src/
├── app/                  # Next.js app directory
│   ├── api/
│   │   └── contact/
│   │       └── route.ts  # Email API endpoint
│   ├── layout.tsx        # Root layout (semua halaman include ini)
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── providers.tsx     # Theme configuration
│
├── components/           # React components (reusable)
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About me section
│   ├── Skills.tsx        # Skills showcase
│   ├── Projects.tsx      # Projects gallery
│   ├── ProjectCard.tsx   # Individual project card
│   ├── Contact.tsx       # Contact section
│   ├── ContactForm.tsx   # Contact form component
│   ├── SocialLink.tsx    # Social media links
│   └── Footer.tsx        # Website footer
│
├── data/
│   └── portfolio.ts      # Semua data/konten portfolio
│
└── lib/                  # Utility functions (jika diperlukan)

public/                    # Static files (images, etc)
├── images/
│   └── (your images)

.env.example              # Environment variables template
.env.local                # Actual env vars (git ignored)
next.config.js            # Next.js configuration
tailwind.config.ts        # Tailwind CSS configuration
tsconfig.json             # TypeScript configuration
package.json              # Project dependencies
```

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Tips & Tricks

1. **Smooth Scrolling**: Click pada navigation links untuk smooth scroll ke sections
2. **Dark Mode**: Toggle dark/light theme menggunakan button di navbar
3. **Responsive Images**: Add project images di `public/images` dan reference di `portfolio.ts`
4. **Analytics**: Easily integrate Google Analytics atau Vercel Analytics
5. **SEO**: Update metadata di `src/app/layout.tsx`

## 🎉 Next Steps

1. ✅ Update portfolio data dengan informasi Anda
2. ✅ Customize warna dan design sesuai preferensi
3. ✅ Test contact form dengan email Anda
4. ✅ Add project images
5. ✅ Deploy ke Vercel/Netlify
6. ✅ Share portfolio link dengan recruiters!

## 📝 Need Help?

Jika ada pertanyaan atau issue:

1. Check troubleshooting section
2. Search di [Stack Overflow](https://stackoverflow.com)
3. Check dokumentasi official libraries
4. Reach out ke developer community

---

**Happy coding! 🚀** Semoga portfolio ini membantu Anda mendapatkan opportunities yang bagus!
