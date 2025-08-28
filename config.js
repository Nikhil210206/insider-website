const CONFIG = {

  recaptchaSiteKey: "6LeymYYrAAAAADgX0OxY3ocZwhi_RDbEEq63pjiN",

  validation: {
    mobilePattern: "[0-9]{10}",
    srmEmailPattern: "[a-z0-9._%+-]+@srmist\\.edu\\.in$",
    minDateOffset: 0 
  },

  ui: {
    primaryColor: "#45B4FF",
    hoverColor: "#1e90ff",
    backgroundColor: "#181A20",
    inputBackground: "#23262F",
    borderColor: "#353945"
  },

  successMessage: {
    title: "Application Submitted!",
    description: "Thank you for your interest in joining the SRM Insider Community! We will review your application and contact you soon."
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}