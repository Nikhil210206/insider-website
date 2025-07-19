# Deployment Guide - SRM Insider Community Application Form

This guide will help you deploy the application form to various hosting platforms.

## 🚀 Quick Deploy Options

### 1. GitHub Pages (Free)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SRM Insider Application Form"
   git branch -M main
   git remote add origin https://github.com/yourusername/srm-insider-form.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at**: `https://yourusername.github.io/srm-insider-form`

### 2. Netlify (Free)

1. **Drag & Drop Method**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop your project folder to the deploy area
   - Your site will be live instantly

2. **Git Integration**
   - Connect your GitHub repository
   - Netlify will automatically deploy on every push

### 3. Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts and your site will be live**

### 4. Firebase Hosting (Free)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Deploy**
   ```bash
   firebase deploy
   ```

## 🔧 Pre-Deployment Checklist

Before deploying, make sure to:

### 1. Update reCAPTCHA Site Key
Replace the reCAPTCHA site key in `index.html`:
```html
<div
  class="g-recaptcha flex justify-center"
  data-sitekey="YOUR_ACTUAL_SITE_KEY"
></div>
```

### 2. Configure API Endpoint
If you have a backend API, update the endpoint in the JavaScript:
```javascript
fetch('https://your-api-domain.com/api/submit-application', {
  // ... rest of the code
})
```

### 3. Customize Time Slots
Update the time slots in `config.js` or directly in `index.html`:
```javascript
const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  // Add your preferred time slots
];
```

### 4. Test Locally
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## 🌐 Domain Configuration

### Custom Domain Setup

1. **Purchase a domain** (if you don't have one)
2. **Configure DNS**:
   - For GitHub Pages: Add CNAME record pointing to `yourusername.github.io`
   - For Netlify: Add CNAME record pointing to your Netlify subdomain
   - For Vercel: Add A record pointing to Vercel's IP
   - For Firebase: Add A record pointing to Firebase's IP

3. **SSL Certificate**: Most platforms provide free SSL certificates automatically

## 📊 Analytics & Monitoring

### Google Analytics
Add Google Analytics to track form submissions:

```html
<!-- Add this in the <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Form Analytics
Consider using services like:
- **Formspree**: For form handling and analytics
- **Netlify Forms**: Built-in form handling
- **Google Forms**: Simple form backend

## 🔒 Security Considerations

1. **HTTPS**: Ensure your site uses HTTPS (most platforms provide this automatically)
2. **reCAPTCHA**: Keep the reCAPTCHA enabled to prevent spam
3. **Input Validation**: The form includes client-side validation, but also implement server-side validation
4. **Rate Limiting**: Implement rate limiting on your backend API

## 📱 Mobile Optimization

The form is already mobile-optimized, but verify:
- Touch targets are large enough (minimum 44px)
- Text is readable on small screens
- Form fields are easy to fill on mobile keyboards

## 🧪 Testing Checklist

Before going live, test:

- [ ] Form validation works correctly
- [ ] reCAPTCHA integration
- [ ] Time slot selection
- [ ] Date picker functionality
- [ ] Mobile responsiveness
- [ ] Loading states
- [ ] Success modal
- [ ] All required fields
- [ ] Email validation (especially @srmist.edu.in)
- [ ] Cross-browser compatibility

## 🚨 Troubleshooting

### Common Issues

1. **reCAPTCHA not working**
   - Check if the site key is correct
   - Ensure the domain is added to reCAPTCHA settings

2. **Form not submitting**
   - Check browser console for errors
   - Verify API endpoint is correct
   - Ensure all required fields are filled

3. **Styling issues**
   - Clear browser cache
   - Check if Tailwind CSS is loading
   - Verify custom CSS is included

### Support

For deployment issues:
- Check the platform's documentation
- Look for error messages in browser console
- Test locally first to isolate issues

## 📈 Post-Deployment

After deployment:

1. **Monitor form submissions**
2. **Check for any errors in logs**
3. **Test the complete user journey**
4. **Share the URL with your team**
5. **Set up notifications for new submissions**

---

**Your SRM Insider Community application form is now ready to collect applications! 🎉**