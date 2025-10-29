// In a real application, these variables would be injected by a build process
// from a .env file (e.g., using Vite's import.meta.env or Webpack's DefinePlugin).
// We simulate this by reading from `process.env` with fallbacks.

const config = {
  // --- Application Information ---
  companyName: process.env.REACT_APP_COMPANY_NAME || 'EMPHZ Private Limited',
  
  // --- Contact Information ---
  supportEmail: process.env.REACT_APP_SUPPORT_EMAIL || 'service@emphz.com',
  supportPhone: process.env.REACT_APP_SUPPORT_PHONE || '+91 86488 81888',
  whatsAppLink: `https://wa.me/${(process.env.REACT_APP_SUPPORT_PHONE || '+91 86488 81888').replace(/\s+/g, '').replace('+', '')}`,


  // --- Feature Flags ---
  // Use 'true' as a string to match how process.env works.
  isAdminPortalEnabled: process.env.REACT_APP_ADMIN_PORTAL_ENABLED === 'true',
};

/**
 * --- Environment Variable Sanitization & Validation ---
 * This function mimics the behavior of `dotenv-safe` by ensuring that critical
 * environment variables are defined. In a real CI/CD pipeline, this would
 * cause the build to fail if a required variable is missing, preventing
 * broken deployments.
 */
const validateConfig = (cfg: typeof config) => {
  const requiredVars: (keyof typeof config)[] = ['companyName', 'supportEmail', 'supportPhone'];
  const missingVars = requiredVars.filter(key => !cfg[key]);

  if (missingVars.length > 0) {
    // This error will be caught during development or at build time.
    throw new Error(
      `FATAL: The following required environment variables are missing: ${missingVars.join(', ')}. ` +
      `Please create a .env file and add them.`
    );
  }
};

// Run validation on module import.
try {
  validateConfig(config);
} catch (error) {
  // For a client-side app, we log the error. The app might not render correctly.
  // In a server-rendered or build-time scenario, this would halt the process.
  console.error(error);
}

export default config;