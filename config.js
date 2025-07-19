// SRM Insider Community Application Form Configuration

const CONFIG = {
  // Available time slots for interviews
  timeSlots: [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM"
  ],

  // reCAPTCHA site key (replace with your own)
  recaptchaSiteKey: "6LeymYYrAAAAADgX0OxY3ocZwhi_RDbEEq63pjiN",

  // API endpoint for form submission (uncomment and modify when ready)
  // apiEndpoint: "https://your-api-endpoint.com/api/submit-application",

  // Form validation settings
  validation: {
    mobilePattern: "[0-9]{10}",
    srmEmailPattern: "[a-z0-9._%+-]+@srmist\\.edu\\.in$",
    minDateOffset: 0 // Days from today (0 = today)
  },

  // UI settings
  ui: {
    primaryColor: "#45B4FF",
    hoverColor: "#1e90ff",
    backgroundColor: "#181A20",
    inputBackground: "#23262F",
    borderColor: "#353945"
  },

  // Success message
  successMessage: {
    title: "Application Submitted!",
    description: "Thank you for your interest in joining the SRM Insider Community! We will review your application and contact you soon."
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} 