// HubSpot Configuration
// Update these values with your actual HubSpot credentials

export const HUBSPOT_CONFIG = {
  // Your HubSpot Portal ID (from the URL: https://app-na2.hubspot.com/forms/244225778)
  PORTAL_ID: '244225778', // Your actual Portal ID
  
  // Form GUID - Extracted from your HubSpot form embed code
  // Get this from HubSpot → Marketing → Forms → Your Form → Actions → Embed
  FORM_GUID: 'd8ed421e-b73b-43e3-90b9-bf1eb26b554b', // Your actual Form GUID
  
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
