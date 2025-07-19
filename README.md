# SRM Insider Community - Backend Developer Application Form

A modern, responsive enquiry form website for the SRM Insider Community backend developer recruitment process. This website follows the exact design theme of the existing SRM Insider waitlist website.

## 🎨 Design Theme

The website follows the SRM Insider brand guidelines:
- **Primary Color**: `#45B4FF` (Bright Blue)
- **Background**: Black (`bg-black`)
- **Secondary Colors**: 
  - `#181A20` (Dark Gray - Form Background)
  - `#23262F` (Medium Gray - Input Backgrounds)
  - `#353945` (Light Gray - Borders)
- **Typography**: Modern, clean fonts with blue accent colors
- **UI Elements**: Rounded corners, smooth transitions, hover effects

## ✨ Features

### 📝 Comprehensive Application Form
- **Personal Information**:
  - Full Name
  - SRM Email ID (with domain validation for @srmist.edu.in)
  - Personal Email ID
  - Mobile Number (10-digit validation)
  - SRM Registration Number

- **Social Media Profiles**:
  - GitHub Profile URL
  - LinkedIn Profile URL

- **Motivation & Experience**:
  - Why do you want to join the SRM Insider Community?
  - What makes you stand out from other candidates?
  - Projects you have worked on before
  - Achievements, certifications, and relevant experience

### 📅 Interview Scheduling System
- **Date Selection**: Calendar picker with minimum date set to today
- **Time Slot Selection**: Interactive time slot picker with 6 available slots:
  - 10:00 AM - 11:00 AM
  - 11:00 AM - 12:00 PM
  - 2:00 PM - 3:00 PM
  - 3:00 PM - 4:00 PM
  - 4:00 PM - 5:00 PM
  - 5:00 PM - 6:00 PM

### 🔒 Security & Validation
- Google reCAPTCHA integration
- Form validation for all required fields
- Email domain validation for SRM email addresses
- Mobile number format validation
- URL validation for social media profiles

### 🎯 User Experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Loading States**: Beautiful loading animation during form submission
- **Success Modal**: Elegant confirmation modal after successful submission
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Proper labels, focus states, and keyboard navigation

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Internet connection (for Tailwind CSS CDN and reCAPTCHA)

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. The website is ready to use!

### Local Development
```bash
# If you have Python installed
python -m http.server 8000

# If you have Node.js installed
npx serve .

# If you have PHP installed
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🔧 Customization

### Modifying Time Slots
To change the available time slots, edit the `timeSlots` array in the JavaScript section:

```javascript
const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  // Add your custom time slots here
];
```

### Changing reCAPTCHA Site Key
Replace the reCAPTCHA site key with your own:

```html
<div
  class="g-recaptcha flex justify-center"
  data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
></div>
```

### API Integration
To connect to a backend API, uncomment and modify the fetch request in the JavaScript:

```javascript
fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-width form with optimal spacing
- **Tablet**: Adjusted layout for medium screens
- **Mobile**: Stacked layout with touch-friendly elements

## 🎨 Custom Styling

The website uses Tailwind CSS for styling. Key custom styles include:

- Custom scrollbar styling
- Date picker icon inversion for dark theme
- Time slot hover and selection effects
- reCAPTCHA widget inversion for dark theme

## 🔍 Form Validation

The form includes comprehensive validation:
- Required field validation
- Email format validation
- SRM email domain validation (@srmist.edu.in)
- Mobile number format validation (10 digits)
- URL format validation for social media profiles
- Date selection validation (minimum today)
- Time slot selection validation

## 📊 Data Collection

The form collects the following data:
- Personal information (name, emails, phone, registration number)
- Social media profiles (GitHub, LinkedIn)
- Motivation and experience details
- Interview scheduling preferences

## 🚀 Deployment

The website can be deployed to any static hosting service:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3**
- **Firebase Hosting**

Simply upload the `index.html` file to your hosting provider.

## 🤝 Contributing

This project is designed for the SRM Insider Community. For any modifications or improvements, please follow the existing design patterns and color scheme.

## 📄 License

This project is created for the SRM Insider Community backend developer recruitment process.

## 📞 Support

For any questions or issues, please contact the SRM Insider Community team.

---

**Built with ❤️ for the SRM Insider Community** 