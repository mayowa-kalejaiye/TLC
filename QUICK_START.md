# TLC Website - Quick Start Guide

## 🎉 Development Server is Running!

The website is now live at: **http://localhost:3000**

## ✅ What's Been Built (So Far)

### Homepage Sections (Complete):
1. ✅ **Hero Section** - Full-screen with tagline, CTAs, and live indicator
2. ✅ **Welcome Section** - Mission statement with 3 action cards
3. ✅ **Featured Sermon** - Latest message with YouTube link
4. ✅ **Daily Devotionals** - Today's devotional preview
5. ✅ **Ministries** - 5 department cards
6. ✅ **Giving Section** - Online/bank transfer options
7. ✅ **Newsletter Signup** - Email subscription form

### Core Components (Complete):
- ✅ **Navbar** - Responsive navigation with logo
- ✅ **Footer** - 4-column footer with links and social icons

## 📋 Next Steps

### Immediate (To See Full Homepage):
1. **Add the TLC logo:**
   - Save the logo image as `public/images/tlc-logo.png`
   - Size: 180x60px minimum

2. **Add hero background image:**
   - Save as `public/images/hero-bg.jpg`
   - Minimum 1920x1080px
   - Photo of Apostle Nelson teaching or congregation

### Short Term (Inner Pages):
- About page
- Sermons archive page
- Devotionals page
- Ministries page
- Events page
- Give page (with payment integration)
- Testimonies page
- Contact page

### Integrations Needed:
- YouTube Data API (auto-pull sermons)
- Paystack/Flutterwave payment gateway
- Email service (Resend or SendGrid)
- WhatsApp click-to-chat

## 🎨 Brand Colors (Already Configured)

```css
Gold: #F5B82E      /* Primary - buttons, accents */
Orange: #F39237    /* Secondary */
Cream: #FFF9F0     /* Backgrounds */
Navy: #1A202C      /* Text */
```

## 🚀 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Testing

- **Desktop:** Open http://localhost:3000
- **Mobile:** Find your local IP, then access from phone on same network
- **Browser DevTools:** Press F12 to test responsive design

## 🔧 Making Changes

All components are in `components/` folder:
- Edit `components/Hero.tsx` to change hero section
- Edit `components/Welcome.tsx` for welcome text
- Edit `app/page.tsx` to reorder homepage sections
- Edit `tailwind.config.ts` to adjust colors/styles

## ⚠️ Current Limitations (Will Fix Soon)

- Logo and images show as broken (need actual image files)
- "LIVE NOW" indicator always shows (need YouTube API to detect live status)
- Newsletter form doesn't actually send emails yet (need email API)
- No inner pages yet (About, Sermons, etc.)
- No payment integration yet

## 📞 Questions?

Review the main README.md or check component files for inline comments.

---

**Last Updated:** November 8, 2025  
**Status:** Homepage foundation complete ✅
