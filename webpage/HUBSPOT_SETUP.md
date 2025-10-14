# HubSpot CRM Integration Setup Guide

## Overview
Your contact form is now integrated with HubSpot CRM. When users click the "Send Message" button, their information will be automatically sent to your HubSpot account.

## Setup Instructions

### Step 1: Get Your Form GUID

1. **Go to your HubSpot account**
   - Navigate to: Marketing → Forms
   - You should see your existing forms: "Website Contact Us" and "Website Contact Us 2"

2. **Get the Form GUID**
   - Click on one of your forms (e.g., "Website Contact Us")
   - Click "Actions" → "Embed"
   - In the embed code, look for the form GUID (it looks like: `12345678-1234-1234-1234-123456789abc`)
   - Copy this GUID

### Step 2: Update Configuration

1. **Open the configuration file**
   - Navigate to: `src/config/hubspot.ts`

2. **Update the Form GUID**
   - Replace `'your-form-guid-here'` with your actual form GUID
   - Example: `FORM_GUID: '12345678-1234-1234-1234-123456789abc'`

### Step 3: Test the Integration

1. **Start your development server**
   ```bash
   npm run dev
   ```

2. **Test the form**
   - Go to your Contact Us page
   - Fill out the form with test data
   - Click "Send Message"
   - Check your HubSpot CRM to see if the contact was created

### Step 4: Verify in HubSpot

1. **Check your contacts**
   - Go to HubSpot → CRM → Contacts
   - You should see the new contact from your form submission

2. **Check form submissions**
   - Go to HubSpot → Marketing → Forms
   - Click on your form to see submission details

## Features Included

✅ **Form Validation**: Client-side validation for required fields and email format
✅ **Loading States**: Button shows "Sending..." with spinner during submission
✅ **Success/Error Messages**: User-friendly feedback after form submission
✅ **Form Reset**: Form clears after successful submission
✅ **HubSpot Integration**: Data automatically sent to your HubSpot CRM
✅ **Error Handling**: Graceful handling of network errors and API failures

## Configuration Options

### Form Field Mappings
The form fields are mapped to HubSpot as follows:
- First Name → `firstname`
- Last Name → `lastname`
- Email → `email`
- Website → `website`
- Message → `message`

### Lead Tracking
- **Lead Source**: "Website Contact Form"
- **Lead Status**: "NEW"
- **Page Name**: "Contact Us - Kabini.ai"

## Troubleshooting

### Form Not Submitting
1. Check that the Form GUID is correct in `src/config/hubspot.ts`
2. Verify your HubSpot Portal ID is correct (should be `243838456`)
3. Check browser console for any error messages

### Data Not Appearing in HubSpot
1. Verify the form fields match your HubSpot form configuration
2. Check that your HubSpot form is active
3. Ensure the form GUID is from the correct form

### Network Errors
1. Check your internet connection
2. Verify HubSpot's API is accessible
3. Check for any CORS issues in browser console

## Advanced Configuration

### Using Contacts API (Optional)
If you want to use the Contacts API instead of Forms API:

1. **Get API Key**
   - Go to HubSpot Settings → Integrations → Private Apps
   - Create a new private app
   - Copy the API key

2. **Update Configuration**
   - Add your API key to `src/config/hubspot.ts`
   - Update the `API_KEY` field

3. **Switch Methods**
   - In `src/pages/ContactUs.tsx`, change `submitToHubSpot` to `createHubSpotContact`

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your HubSpot form configuration
3. Test with a simple form submission first
4. Check HubSpot's API documentation for any changes

## Files Modified

- `src/pages/ContactUs.tsx` - Added form state management and HubSpot integration
- `src/utils/hubspot.ts` - HubSpot API integration functions
- `src/config/hubspot.ts` - Configuration file for HubSpot settings

The integration maintains your existing form design while adding powerful CRM functionality!
