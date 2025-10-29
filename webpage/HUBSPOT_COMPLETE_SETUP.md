# Complete HubSpot Setup Guide for Kabini.ai Contact Form

## What You'll Accomplish
By the end of this guide, when someone fills out your contact form on your website, their information will automatically appear in your HubSpot CRM account, allowing you to track leads and follow up with potential customers.

## Prerequisites
- A business email address
- Your website domain (kabini.ai)
- Basic understanding of web forms

---

## Step 1: Create HubSpot Account

### 1.1 Sign Up
1. Go to https://www.hubspot.com/
2. Click **"Get Started Free"**
3. Enter your business email (e.g., contact@kabini.ai)
4. Create a strong password
5. Click **"Create my account"**

### 1.2 Complete Account Setup
1. **Verify your email** - Check your inbox and click the verification link
2. **Fill in company details**:
   - Company name: Kabini.ai
   - Industry: Technology/Software
   - Company size: Choose appropriate size
   - Primary goal: "Generate more leads"
3. **Skip optional features** for now (you can add them later)

### 1.3 Get Your Portal ID
1. After logging in, look at your browser URL
2. It will look like: `https://app-na2.hubspot.com/contacts/243838456/contacts/list/view/all/`
3. The number `243838456` is your **Portal ID** - copy this!

---

## Step 2: Create Your Contact Form

### 2.1 Navigate to Forms
1. In HubSpot, go to **Marketing** → **Forms**
2. Click **"Create form"**
3. Select **"Regular form"**

### 2.2 Configure Form Fields
1. **Form name**: "Kabini.ai Contact Form"
2. **Add these fields** (click "Add field" for each):
   
   **First Name**
   - Field type: Single-line text
   - Label: "First Name"
   - Required: ✅ Yes
   
   **Last Name**
   - Field type: Single-line text
   - Label: "Last Name"
   - Required: ❌ No
   
   **Email**
   - Field type: Email
   - Label: "Email Address"
   - Required: ✅ Yes
   
   **Website**
   - Field type: Single-line text
   - Label: "Website URL"
   - Required: ❌ No
   
   **Message**
   - Field type: Multi-line text
   - Label: "Message"
   - Required: ❌ No

### 2.3 Form Settings
1. **Thank you message**: "Thank you for your message! We'll get back to you within 24 hours."
2. **Redirect URL**: Leave blank
3. **Notifications**: ✅ Email me when someone submits this form
4. **Email notifications**: Enter your email address

### 2.4 Publish Form
1. Click **"Publish"**
2. Your form is now live!

---

## Step 3: Get Your Form GUID

### 3.1 Access Embed Code
1. Go back to **Marketing** → **Forms**
2. Click on your "Kabini.ai Contact Form"
3. Click **"Actions"** → **"Embed"**

### 3.2 Extract Form GUID
1. In the embed code, look for a long string like:
   ```
   12345678-1234-1234-1234-123456789abc
   ```
2. This is your **Form GUID** - copy this entire string!

---

## Step 4: Update Your Website Configuration

### 4.1 Open Configuration File
Navigate to: `src/config/hubspot.ts`

### 4.2 Replace Placeholder Values
Replace these two lines:
```typescript
PORTAL_ID: 'YOUR_PORTAL_ID_HERE', // Replace with your actual Portal ID
FORM_GUID: 'YOUR_FORM_GUID_HERE', // Replace with your actual Form GUID
```

With your actual values:
```typescript
PORTAL_ID: '243838456', // Your actual Portal ID
FORM_GUID: '12345678-1234-1234-1234-123456789abc', // Your actual Form GUID
```

### 4.3 Save the File
Save the configuration file with your actual values.

---

## Step 5: Test Your Integration

### 5.1 Start Your Website
1. Open terminal in your project folder
2. Run: `npm run dev`
3. Open your website in browser

### 5.2 Test the Form
1. Go to your Contact Us page
2. Fill out the form with test data:
   - First Name: Test
   - Last Name: User
   - Email: test@example.com
   - Website: https://test.com
   - Message: This is a test message
3. Click **"Send Message"**
4. You should see: "Thank you for your message! We'll get back to you within 24 hours."

### 5.3 Verify in HubSpot
1. Go back to HubSpot
2. Navigate to **CRM** → **Contacts**
3. You should see "Test User" in your contacts list!
4. Click on the contact to see all the details

---

## Step 6: Set Up Notifications (Optional)

### 6.1 Email Notifications
1. In HubSpot, go to **Settings** → **Notifications**
2. Set up email notifications for new contacts
3. Choose when you want to be notified

### 6.2 Lead Scoring (Optional)
1. Go to **Marketing** → **Lead Scoring**
2. Set up rules to automatically score leads
3. Example: +10 points for filling out contact form

---

## Troubleshooting

### Form Not Working?
1. **Check Portal ID**: Make sure it matches your HubSpot account
2. **Check Form GUID**: Ensure it's copied correctly from embed code
3. **Check Browser Console**: Press F12 and look for error messages
4. **Verify Form is Published**: Make sure your HubSpot form is published

### Data Not Appearing in HubSpot?
1. **Check Form Fields**: Ensure field names match between website and HubSpot
2. **Check Form Status**: Verify the form is active in HubSpot
3. **Wait a Few Minutes**: Sometimes there's a delay

### Still Having Issues?
1. **Test with Simple Data**: Try just first name and email
2. **Check Network Tab**: In browser dev tools, see if requests are being sent
3. **Contact HubSpot Support**: They have excellent support for technical issues

---

## What Happens Next?

### For You:
- Every form submission creates a new contact in HubSpot
- You can see all leads in one place
- Set up automated follow-up emails
- Track which leads convert to customers

### For Your Visitors:
- They fill out your contact form
- They see a success message
- You get their information in HubSpot
- You can follow up with them

---

## Next Steps (Optional Enhancements)

1. **Set up Email Sequences**: Automatically send follow-up emails
2. **Create Lead Scoring**: Automatically score leads based on behavior
3. **Set up Analytics**: Track form conversion rates
4. **Create Custom Fields**: Add more fields to capture specific information
5. **Set up Integrations**: Connect with other tools you use

---

## Support Resources

- **HubSpot Academy**: Free courses on using HubSpot
- **HubSpot Community**: Ask questions and get help
- **HubSpot Support**: Direct support for technical issues
- **Documentation**: https://developers.hubspot.com/

---

## Summary

You now have:
✅ HubSpot account set up
✅ Contact form created
✅ Website integration configured
✅ Test submission working
✅ Leads flowing into your CRM

Your contact form is now a powerful lead generation tool that automatically captures and organizes potential customer information!


