# SendGrid Setup Guide for kabini.ai

## Quick Setup (5 minutes)

### Step 1: Create SendGrid Account
1. Go to [SendGrid.com](https://sendgrid.com)
2. Click "Start for Free" 
3. Sign up with your email (100 emails/day free)
4. Verify your email address

### Step 2: Get Your API Key
1. In SendGrid dashboard, go to **Settings > API Keys**
2. Click **Create API Key**
3. Name it: "kabini Password Reset"
4. Choose **Restricted Access** and select **Mail Send**
5. Click **Create & View**
6. **Copy the API key** (starts with `SG.`)

### Step 3: Verify Your Sender Email
1. Go to **Settings > Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in the form:
   - **From Name**: kabini.ai Team
   - **From Email**: your-email@yourdomain.com
   - **Company**: kabini.ai
   - **Address**: Your address
   - **City**: Your city
   - **Country**: Your country
4. Click **Create**
5. **Check your email** and click the verification link

### Step 4: Set Up Backend Server
1. Open terminal in the `email-backend` folder:
```bash
cd email-backend
npm install
```

2. Create `.env` file:
```env
SENDGRID_API_KEY=SG.your_api_key_here
FROM_EMAIL=your-verified-email@yourdomain.com
PORT=3001
```

3. Start the server:
```bash
npm start
```

### Step 5: Enable Real Email Sending
In `webpage/src/lib/emailService.ts`, change line 200:
```typescript
// Change from:
return await sendEmailDemo(emailData);

// To:
return await sendEmailWithSendGrid(emailData);
```

### Step 6: Test It!
1. Start your frontend: `npm run dev`
2. Go to forgot password page
3. Enter your email
4. Check your inbox for the real email!

## Customizing Your Branding

### Easy Branding Changes
In `webpage/src/lib/emailService.ts`, update the `EMAIL_CONFIG`:

```typescript
export const EMAIL_CONFIG = {
  companyName: 'Your Company Name',        // Change this
  senderName: 'Your Company Team',         // Change this
  websiteUrl: 'https://yourwebsite.com',   // Change this
  supportEmail: 'support@yourcompany.com', // Change this
  primaryColor: '#your-brand-color',       // Change this
  secondaryColor: '#your-secondary-color'  // Change this
};
```

### Advanced Customization
In `email-backend/server.js`, update the `EMAIL_CONFIG`:

```javascript
const EMAIL_CONFIG = {
  companyName: 'Your Company Name',
  senderName: 'Your Company Team',
  senderEmail: process.env.FROM_EMAIL,
  websiteUrl: 'https://yourwebsite.com',
  supportEmail: 'support@yourcompany.com',
  logoUrl: 'https://yourwebsite.com/logo.png',
  primaryColor: '#your-brand-color',
  secondaryColor: '#your-secondary-color'
};
```

## What Users Will See

### Email Header
```
From: Your Company Team <your-email@yourdomain.com>
Subject: Reset Your Password - Your Company Name
```

### Email Content
- Professional HTML design with your branding
- Company name and colors throughout
- Secure reset link
- Support contact information
- Your website links

## Troubleshooting

### Common Issues:

1. **"Invalid API Key"**
   - Check your SendGrid API key is correct
   - Make sure you copied the full key (starts with SG.)

2. **"Sender not verified"**
   - Verify your sender email in SendGrid
   - Check your email for verification link

3. **"CORS error"**
   - Make sure backend server is running on port 3001
   - Check that CORS is enabled in server.js

4. **"Email not received"**
   - Check spam folder
   - Verify sender email is correct
   - Check SendGrid dashboard for delivery status

### Debug Steps:
1. Check browser console (F12) for errors
2. Check backend server logs
3. Check SendGrid dashboard > Activity
4. Test with a simple email first

## Production Deployment

### For Production:
1. **Deploy backend** to a server (Heroku, AWS, etc.)
2. **Update frontend API URL** to production URL
3. **Set up domain authentication** in SendGrid
4. **Configure SPF/DKIM** for better deliverability
5. **Monitor email delivery** in SendGrid dashboard

### Environment Variables for Production:
```env
SENDGRID_API_KEY=SG.your_production_api_key
FROM_EMAIL=noreply@yourdomain.com
PORT=3001
NODE_ENV=production
```

## SendGrid Pricing

- **Free Tier**: 100 emails/day
- **Essentials**: $15/month for 50k emails
- **Pro**: $89/month for 100k emails
- **Premier**: Custom pricing

## Security Best Practices

1. **Never expose API keys** in frontend code
2. **Use environment variables** for sensitive data
3. **Implement rate limiting** on your API
4. **Validate email addresses** before sending
5. **Use HTTPS** in production
6. **Monitor for abuse** in SendGrid dashboard

## Support

- **SendGrid Support**: [support.sendgrid.com](https://support.sendgrid.com)
- **API Documentation**: [sendgrid.com/docs](https://sendgrid.com/docs)
- **Email Templates**: [sendgrid.com/templates](https://sendgrid.com/templates)

---

**That's it!** Your users will now receive professional, branded password reset emails from your company name instead of generic ones. 
