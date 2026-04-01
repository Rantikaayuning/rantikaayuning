# Rantika Ayuning - Frontend Developer Portfolio

A modern, responsive portfolio website showcasing my frontend development skills and projects. Built with Next.js 14, React 18, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Modern Design**: Clean, professional design with gradient accents and glassmorphism effects
- **Responsive**: Fully responsive on desktop, tablet, and mobile devices
- **Dark Mode**: Dark/light mode toggle with smooth transitions
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Contact Form**: Fully functional contact form with email notifications
- **SEO Optimized**: Metadata configuration for better search engine visibility
- **Performance**: Optimized for fast loading and smooth interactions

## 📋 Sections

1. **Hero/Home**: Eye-catching introduction with call-to-action buttons
2. **About Me**: Personal introduction and key achievements
3. **Skills**: Technical skills with proficiency levels
4. **Projects**: Featured projects with descriptions and links
5. **Contact**: Contact information and functional contact form
6. **Footer**: Quick navigation and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes
- **Email**: Nodemailer
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd rantikaayuning
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env.local
```

## 🚀 Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/route.ts      # Email API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # Reusable components
└── data/
    └── portfolio.ts              # Portfolio content
```

## 🎯 Customization

Edit `src/data/portfolio.ts` to update your:

- Personal information
- Skills and proficiency levels
- Projects and descriptions
- Social media links

## 📧 Email Configuration

Set up email notifications in `.env.local`:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

For Gmail, use an app-specific password from your Google Account settings.

## 🚀 Deployment

Deploy to Vercel with one click - it's optimized for Next.js!
