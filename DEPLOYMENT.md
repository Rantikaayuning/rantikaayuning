# 🚀 Deployment Guides

## Deploy ke Vercel (Recommended - Paling Mudah)

### Prerequisites:

- GitHub account
- Vercel account (gratis)
- Project di-push ke GitHub

### Steps:

1. **Push code ke GitHub**

```bash
git add .
git commit -m "Initial Next.js portfolio"
git push origin master
```

2. **Connect ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import GitHub repository

3. **Configure Project**
   - Root Directory: `.`
   - Framework Preset: Auto-detect (Next.js)
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add `EMAIL_USER`
   - Add `EMAIL_PASSWORD`
   - Click Deploy!

5. **Done!** 🎉
   - Vercel akan generate URL untuk portfolio Anda
   - Automatic deployments setiap kali push ke GitHub

---

## Deploy ke Netlify

### Prerequisites:

- GitHub account
- Netlify account
- Project di GitHub

### Steps:

1. **Push ke GitHub** (sama seperti di atas)

2. **Connect ke Netlify**
   - Buka [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select GitHub
   - Choose your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 (atau lebih baru)

4. **Basic Deploy**
   - Site settings → Environment
   - Add variables: `EMAIL_USER`, `EMAIL_PASSWORD`
   - Trigger deploy

5. **Custom Domain** (optional)
   - Domain settings → Add custom domain
   - Update DNS records di registrar Anda

---

## Deploy dengan Docker

### Prerequisites:

- Docker installed
- Preferably on a VPS

### Steps:

1. **Create Dockerfile di root project**

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# Runtime stage
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
ENV NODE_ENV=production

CMD ["npm", "start"]
```

2. **Build Docker image**

```bash
docker build -t portfolio:latest .
```

3. **Run container**

```bash
docker run -p 3000:3000 \
  -e EMAIL_USER=your-email@gmail.com \
  -e EMAIL_PASSWORD=your-password \
  portfolio:latest
```

4. **Push ke Docker Hub** (optional)

```bash
docker tag portfolio:latest username/portfolio:latest
docker push username/portfolio:latest
```

---

## Deploy ke AWS (Advanced)

### Option 1: EC2 + Nginx

1. **Launch EC2 instance**
   - Ubuntu 20.04 LTS
   - Security group: Allow 80, 443, 22

2. **SSH ke instance**

```bash
ssh -i key.pem ubuntu@your-instance-ip
```

3. **Install dependencies**

```bash
sudo apt update
sudo apt install nodejs npm nginx git
```

4. **Clone dan setup project**

```bash
git clone your-repo.git
cd rantikaayuning
npm install --legacy-peer-deps
npm run build
```

5. **Setup Nginx**

```bash
sudo nano /etc/nginx/sites-available/default
```

Add:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **Setup PM2** (keep app running)

```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

7. **Setup SSL** (Let's Encrypt - Free)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

### Option 2: AWS Amplify (Easiest for AWS)

1. **Connect repository to AWS Amplify**
2. **Follow the wizard** - it auto-detects Next.js
3. **Add environment variables**
4. **Done!** Auto-deploys on push

---

## Deploy ke Linode/Akamai

1. Create Linode instance (Ubuntu 20.04)
2. Follow same as AWS EC2 steps above
3. Very similar process

---

## Deploy ke Railway.app (Simple & Modern)

1. **Install Railway CLI**

```bash
npm install -g @railway/cli
```

2. **Login & Deploy**

```bash
railway login
railway init
railway up
```

3. **Add Environment Variables**
   - Via Railway dashboard
   - Set EMAIL_USER, EMAIL_PASSWORD

---

## Compare Platforms

| Platform     | Easiness   | Cost      | Speed      | Custom Domain |
| ------------ | ---------- | --------- | ---------- | ------------- |
| Vercel       | ⭐⭐⭐⭐⭐ | Free      | ⭐⭐⭐⭐⭐ | ✅            |
| Netlify      | ⭐⭐⭐⭐⭐ | Free      | ⭐⭐⭐⭐⭐ | ✅            |
| Railway      | ⭐⭐⭐⭐   | Free tier | ⭐⭐⭐⭐   | ✅            |
| Docker + VPS | ⭐⭐⭐     | $5-20/mo  | ⭐⭐⭐⭐   | ✅            |
| AWS Amplify  | ⭐⭐⭐⭐   | Free tier | ⭐⭐⭐⭐   | ✅            |
| AWS EC2      | ⭐⭐       | $5+/mo    | ⭐⭐⭐⭐⭐ | ✅            |

## Recommendations:

- **For beginners**: **Vercel** atau **Netlify** (free, easy, reliable)
- **For more control**: **Railway** atau **Docker on VPS**
- **For enterprise**: **AWS** dengan **Amplify** atau **EC2**

## Post-Deployment Checklist:

- [ ] Domain configured correctly
- [ ] SSL certificate active (HTTPS)
- [ ] Environment variables set
- [ ] Contact form tested
- [ ] All links working
- [ ] Responsive design verified
- [ ] Analytics setup (optional)
- [ ] Email notifications working
- [ ] Performance tested
- [ ] SEO checked

---

## Monitoring & Updates

### Enable Vercel Analytics

```js
// In next.config.js
const withAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withAnalyzer({
  // ... your config
});
```

### Setup Email Notifications

Get alerts for form submissions or deployment failures.

### Auto-update Dependencies

```bash
npm outdated  # Check for updates
npm update    # Update packages
```

---

**Good luck with deployment! 🚀**
