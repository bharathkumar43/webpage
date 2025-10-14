// HubSpot Configuration
// Update these values with your actual HubSpot credentials

export const HUBSPOT_CONFIG = {
  // Your HubSpot Portal ID (from the URL: https://app-na2.hubspot.com/forms/243838456)
  PORTAL_ID: '243838456',
  
  // Form GUID - Extracted from your HubSpot form URL
  // URL: https://416ayg.share-na2.hsforms.com/2ILw2P882TM69tmdpctjWSQ
  FORM_GUID: '2ILw2P882TM69tmdpctjWSQ',
  
  // Optional: HubSpot API Key (for Contacts API method)
  // Get this from HubSpot Settings → Integrations → Private Apps
  API_KEY: 'your-api-key-here', // Replace with your actual API key if using Contacts API
  
  // Form field mappings
  FIELD_MAPPINGS: {
    firstName: 'firstname',
    lastName: 'lastname',
    email: 'email',
    website: 'website',
    message: 'message'
  },
  
  // Form settings
  FORM_SETTINGS: {
    leadSource: 'Website Contact Form',
    leadStatus: 'NEW',
    pageName: 'Contact Us - Kabini.ai'
  }
};

// Instructions for setup:
/*
1. Get your Form GUID:
   - Go to HubSpot → Marketing → Forms
   - Click on your form (e.g., "Website Contact Us")
   - Click "Actions" → "Embed"
   - Copy the form GUID from the embed code (it looks like: 12345678-1234-1234-1234-123456789abc)

2. Update the FORM_GUID above with your actual form GUID

3. Test the integration:
   - Fill out the contact form
   - Click "Send Message"
   - Check your HubSpot CRM to see if the contact was created

4. Optional - For Contacts API method:
   - Go to HubSpot Settings → Integrations → Private Apps
   - Create a new private app
   - Copy the API key
   - Update the API_KEY above
*/
