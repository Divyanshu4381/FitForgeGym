# FitForge Gym Website

A modern, responsive gym website built with HTML, CSS (Tailwind), and JavaScript.

## 🏋️ Features

- **6 Pages**: Home, About, Plans, Trainers, Gallery, Contact
- **Mobile-First Design**: Fully responsive across all devices
- **Modern UI**: Clean design with Fitness Orange accent color
- **WhatsApp Integration**: Floating button and direct contact links
- **Contact Form**: Email integration with EmailJS (configurable)
- **SEO Optimized**: Semantic HTML and meta tags
- **Fast Loading**: Minimal dependencies, optimized images

## 📁 Project Structure

```
gym/
├── index.html          # Home page
├── about.html          # About us page
├── plans.html          # Membership plans
├── trainers.html       # Trainers profiles
├── gallery.html        # Photo gallery
├── contact.html        # Contact page with form
├── css/
│   └── style.css       # Custom styles
├── js/
│   ├── main.js         # Main JavaScript
│   └── contact.js      # Contact form logic
├── assets/
│   └── images/         # Gym images
└── README.md
```

## 🚀 Quick Start

1. **Clone or Download** this project
2. **Open `index.html`** in your browser
3. **Customize** content as needed

## ⚙️ Configuration

### WhatsApp Number
Replace `919876543210` with your WhatsApp number in all HTML files:
```html
https://wa.me/YOUR_NUMBER
```

### Email Setup (Optional)

**Option 1: EmailJS (Recommended)**
1. Create free account at [EmailJS.com](https://www.emailjs.com/)
2. Get your Public Key, Service ID, and Template ID
3. Update `js/contact.js`:
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
// Uncomment EmailJS section in contact.js
```

**Option 2: WhatsApp Fallback (Current)**
- Form redirects to WhatsApp (already configured)

**Option 3: Mailto**
- Uncomment mailto section in `js/contact.js`

### Google Maps
Update the map embed in `contact.html` with your gym's location:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

## 🎨 Customization

### Colors
Edit Tailwind config in each HTML file:
```javascript
colors: {
    'fitness-orange': '#F97316',  // Change this
    'dark-slate': '#1F2937',      // Change this
}
```

### Images
Replace images in `assets/images/` with your gym photos.

### Content
- Update gym name, address, phone in all pages
- Modify membership prices in `plans.html`
- Update trainer info in `trainers.html`

## 📱 Mobile Optimization

- Responsive navbar with hamburger menu
- Touch-friendly buttons
- iOS input zoom prevention (16px font-size)
- Optimized images for mobile

## 🌐 Deployment

### Free Hosting Options:
1. **Netlify**: Drag & drop deployment
2. **Vercel**: Connect GitHub repo
3. **GitHub Pages**: Free static hosting
4. **Firebase Hosting**: Google's platform

### Steps:
1. Upload all files to hosting provider
2. Set `index.html` as entry point
3. Configure custom domain (optional)

## 📊 SEO Checklist

- ✅ Semantic HTML5 tags
- ✅ Meta descriptions on all pages
- ✅ Heading hierarchy (H1, H2, H3)
- ✅ Alt text for images
- ✅ Mobile-friendly design
- ✅ Fast loading speed

## 🛠️ Tech Stack

- **HTML5**: Structure
- **Tailwind CSS**: Styling (CDN)
- **JavaScript**: Interactivity
- **EmailJS**: Email service (optional)
- **Google Fonts**: Montserrat & Open Sans

## 📞 Support

For issues or questions:
- WhatsApp: +91 98765 43210
- Email: info@fitforgegym.com

## 📄 License

Free to use for personal and commercial projects.

---

**Built with 💪 by FitForge Gym**
