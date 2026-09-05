# Hostinger Deployment Guide — KanpurCabs Production Bundle

This package is a **fully compiled, standalone production bundle** for your Kanpur Car Rental & Tourism website. It includes all compiled Next.js pages, CSS/JS bundles, server runtime, minimal production dependencies, and configurations.

**Bundle File Location:** `d:\Downloads\carweb\kanpurcabs-hostinger-bundle.zip` (26.96 MB)

---

## 📋 What's Inside the Bundle

```text
kanpurcabs-hostinger-bundle.zip
├── server.js               # Standalone production Node.js server entry point
├── package.json            # Application metadata and dependencies
├── ecosystem.config.js     # PM2 configuration for process management
├── .htaccess               # LiteSpeed / Apache reverse proxy rules (if needed)
├── .env                    # Production environment configuration
├── .env.production         # Backup production environment template
├── README.txt              # Quick reference text file
├── public/                 # Static assets, robots.txt, sitemap.xml
├── prisma/                 # Database schema & migrations/seed
├── node_modules/           # Pre-bundled production runtime dependencies
└── .next/                  # Pre-compiled HTML, static chunks, manifests
```

> [!TIP]
> Because this is a Next.js **standalone bundle**, you do **NOT** need to run `npm install` or `npm run build` on your server. Everything is pre-compiled and ready to run immediately.

---

## 🚀 Deployment Option 1: Hostinger Web / Cloud Hosting (hPanel Node.js Manager)

If your Hostinger plan includes **Node.js support** (Cloud Hosting, Business Web Hosting, etc.):

### Step 1: Upload the Bundle
1. Log in to your **Hostinger hPanel** (`hpanel.hostinger.com`).
2. Go to **Websites** → click **Manage** next to your domain.
3. In the left menu, select **Files** → **File Manager** (access files for your domain).
4. Navigate to your website folder (typically `public_html` or create a subfolder like `app`).
5. Click **Upload** (top right) and upload `kanpurcabs-hostinger-bundle.zip`.
6. Right-click the uploaded `.zip` file and click **Extract**. Extract all files into your target directory.
7. (Optional) Delete the `.zip` file after extraction to save disk space.

### Step 2: Configure the Node.js Application
1. In hPanel, go to **Advanced** → **Node.js** (or search "Node.js" in the top search bar).
2. Click **Create Application** (or **Add Application**):
   * **Node.js version:** Select `18.x` or `20.x` (LTS recommended)
   * **Application mode:** `Production`
   * **Application root:** Choose the folder where you extracted the files (e.g., `public_html`)
   * **Application startup file:** `server.js`
   * **Application URL:** Select your domain (e.g., `yourdomain.com`)
3. Click **Create** or **Save**.

### Step 3: Configure Environment Variables
1. In the Node.js application management panel or via **File Manager**, open `.env`.
2. Update the following values:
   ```bash
   NEXTAUTH_URL="https://yourdomain.com"
   NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
   NEXTAUTH_SECRET="your-generated-random-secret-key-32-chars"
   ```
3. Save the file.

### Step 4: Start the Website
1. In the Node.js manager, click **Restart** (or **Start**).
2. Open your domain (`https://yourdomain.com`) in your browser.
3. Your Kanpur Car Rental website is now **live**!

---

## 🖥️ Deployment Option 2: Hostinger VPS (Ubuntu / Debian)

If you are using a **Hostinger VPS** with root SSH access:

### Step 1: Connect and Upload
Upload `kanpurcabs-hostinger-bundle.zip` to your VPS via SCP/SFTP or FileZilla:
```bash
scp d:\Downloads\carweb\kanpurcabs-hostinger-bundle.zip root@YOUR_SERVER_IP:/var/www/
```

### Step 2: Extract Files
SSH into your server:
```bash
ssh root@YOUR_SERVER_IP
cd /var/www/
mkdir -p kanpurcabs
unzip kanpurcabs-hostinger-bundle.zip -d kanpurcabs
cd kanpurcabs
```

### Step 3: Install Node.js (if not installed)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pm2
```

### Step 4: Configure and Run with PM2
```bash
# Update .env with your domain
nano .env

# Start with PM2
pm2 start ecosystem.config.js

# Ensure it starts automatically on system reboot
pm2 save
pm2 startup
```

### Step 5: Configure Nginx Reverse Proxy
Create an Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/kanpurcabs
```

Paste the following configuration (replace `yourdomain.com` with your actual domain):
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site and reload Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/kanpurcabs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Enable Free SSL via Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 🔑 Default Admin Portal Credentials

Once deployed, visit:
* **Admin Login URL:** `https://yourdomain.com/admin/login`
* **Email:** `admin@kanpurcabs.com`
* **Password:** `admin123`

You can change these credentials directly in `.env` or in the admin settings panel.

---

## 🧪 Post-Deployment Testing Checklist

1. **Homepage:** Verify all 12 sections (Hero tabbed booking form, Stats counter, Services grid, Car fleet showcase, Why choose us, Popular outstation routes, Tour packages, Testimonials, FAQ accordion, CTA banner, Footer).
2. **Fleet Pages:** Check `/cars` and test filtering by category (Sedan, SUV, Hatchback, Luxury, Tempo Traveller).
3. **Vehicle Details:** Click into any car (e.g. `/cars/maruti-dzire`) and verify specs and booking sidebar.
4. **Outstation Routes:** Test `/outstation` and individual routes like `/outstation/lucknow`, `/outstation/agra`.
5. **Tour Packages:** Test `/tours` and detail pages like `/tours/kanpur-half-day`.
6. **Booking Flow:** Submit a test booking at `/booking` and verify confirmation ID display.
7. **Contact Form:** Submit a message at `/contact`.
8. **Admin Dashboard:** Log in at `/admin/login` and verify stats and booking management tables.
9. **Mobile Experience:** Open the site on a smartphone to test the hamburger menu, sticky WhatsApp button, and mobile card layouts.
