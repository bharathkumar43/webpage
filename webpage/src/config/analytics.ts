// Google Analytics Configuration
// Replace GA_MEASUREMENT_ID with your actual Google Analytics Measurement ID

export const ANALYTICS_CONFIG = {
  // Your Google Analytics Measurement ID
  // Get this from Google Analytics → Admin → Data Streams → Web
  // Format: G-XXXXXXXXXX
  MEASUREMENT_ID: 'G-XWLDQQD364', // Your actual Google Analytics ID
  
  // Google Analytics 4 Configuration
  GA4_CONFIG: {
    // Enable enhanced measurement
    enhanced_measurement: true,
    
    // Custom events to track
    custom_events: {
      contact_form_submit: 'contact_form_submit',
      newsletter_signup: 'newsletter_signup',
      demo_request: 'demo_request'
    },
    
    // Custom dimensions (optional)
    custom_dimensions: {
      user_type: 'user_type',
      content_category: 'content_category'
    }
  }
};

// Google Analytics utility functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', ANALYTICS_CONFIG.MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

export const trackContactFormSubmit = (formData: {
  firstName: string;
  email: string;
  source: string;
}) => {
  trackEvent(ANALYTICS_CONFIG.GA4_CONFIG.custom_events.contact_form_submit, {
    event_category: 'engagement',
    event_label: 'contact_form',
    custom_parameters: {
      first_name: formData.firstName,
      email: formData.email,
      source: formData.source
    }
  });
};

// Instructions for setup:
/*
1. Get your Google Analytics Measurement ID:
   - Go to Google Analytics (analytics.google.com)
   - Create account and property
   - Go to Admin → Data Streams → Web
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. Update the MEASUREMENT_ID above with your actual ID

3. Replace GA_MEASUREMENT_ID in index.html with your actual ID

4. Test the integration:
   - Visit your website
   - Check Google Analytics Real-time reports
   - Verify data is being collected

5. Set up goals and conversions:
   - Go to Google Analytics → Admin → Events
   - Mark important events as conversions
   - Set up custom reports

6. Optional: Set up Google Tag Manager for advanced tracking
*/
