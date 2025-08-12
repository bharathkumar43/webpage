# Email Setup Guide for Password Reset Functionality

## Current Status
The password reset system is currently in **DEMO MODE**. It shows the success page but doesn't send actual emails. To enable real email sending, follow one of the setup guides below.

## Option 1: SendGrid (Recommended for beginners)

### Step 1: Create SendGrid Account
1. Go to [SendGrid.com](https://sendgrid.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

### Step 2: Get API Key
1. In SendGrid dashboard, go to **Settings > API Keys**
2. Click **Create API Key**
3. Choose **Restricted Access** and select **Mail Send**
4. Copy the API key (starts with `SG.`)

### Step 3: Verify Sender Email
1. Go to **Settings > Sender Authentication**
2. Click **Verify a Single Sender**
3. Add your email (e.g., `noreply@yourdomain.com`)
4. Check your email and click the verification link

### Step 4: Set Up Backend API
1. Create a new folder for your backend:
```bash
mkdir email-backend
cd email-backend
npm init -y
npm install express @sendgrid/mail dotenv cors
```

2. Create `.env` file:
```env
SENDGRID_API_KEY=SG.your_api_key_here
FROM_EMAIL=noreply@yourdomain.com
PORT=3001
```

3. Create `server.js`:
```javascript
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/send-email-sendgrid', async (req, res) => {
  try {
    const { to, subject, html, text } = req.body;
    
    const msg = {
      to: to,
      from: process.env.FROM_EMAIL,
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ''),
    };

    await sgMail.send(msg);
    console.log(`Email sent to: ${to}`);
    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
```

4. Start the server:
```bash
node server.js
```

### Step 5: Update Frontend
In `webpage/src/lib/emailService.ts`, change line 150:
```typescript
// Change from:
return await sendEmailDemo(emailData);

// To:
return await sendEmailWithSendGrid(emailData);
```

### Step 6: Update API URL
In `webpage/src/lib/emailService.ts`, update the fetch URL:
```typescript
const response = await fetch('http://localhost:3001/api/send-email-sendgrid', {
```

## Option 2: Mailgun

### Step 1: Create Mailgun Account
1. Go to [Mailgun.com](https://mailgun.com)
2. Sign up for free account (5,000 emails/month free)
3. Verify your domain or use sandbox domain

### Step 2: Get API Key
1. Go to **Settings > API Keys**
2. Copy your Private API Key

### Step 3: Set Up Backend
```bash
npm install express mailgun-js dotenv cors
```

Create `mailgun-server.js`:
```javascript
const express = require('express');
const mailgun = require('mailgun-js');
require('dotenv').config();

const app = express();
app.use(express.json());

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

app.post('/api/send-email-mailgun', async (req, res) => {
  try {
    const { to, subject, html, text } = req.body;
    
    const data = {
      from: `kabini.ai <noreply@${process.env.MAILGUN_DOMAIN}>`,
      to: to,
      subject: subject,
      html: html,
      text: text
    };

    await mg.messages().send(data);
    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3001, () => console.log('Mailgun server running'));
```

## Option 3: AWS SES

### Step 1: AWS Setup
1. Create AWS account
2. Go to SES (Simple Email Service)
3. Verify your email address
4. Request production access if needed

### Step 2: Get Credentials
1. Create IAM user with SES permissions
2. Get Access Key ID and Secret Access Key

### Step 3: Set Up Backend
```bash
npm install express aws-sdk dotenv cors
```

Create `ses-server.js`:
```javascript
const express = require('express');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();
app.use(express.json());

const ses = new AWS.SES({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || 'us-east-1'
});

app.post('/api/send-email-ses', async (req, res) => {
  try {
    const { Destination, Message } = req.body;
    
    const params = {
      Destination,
      Message,
      Source: process.env.FROM_EMAIL
    };

    await ses.sendEmail(params).promise();
    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3001, () => console.log('SES server running'));
```

## Testing Your Setup

1. **Start your backend server**
2. **Update the frontend to use real email service**
3. **Test the forgot password flow**
4. **Check your email inbox**

## Troubleshooting

### Common Issues:
- **CORS errors**: Make sure your backend has CORS enabled
- **API key errors**: Verify your API key is correct
- **Sender verification**: Ensure your sender email is verified
- **Rate limits**: Check your email service limits

### Debug Steps:
1. Check browser console for errors
2. Check backend server logs
3. Verify API endpoints are accessible
4. Test with a simple email first

## Security Considerations

1. **Never expose API keys in frontend code**
2. **Use environment variables for sensitive data**
3. **Implement rate limiting**
4. **Validate email addresses**
5. **Use HTTPS in production**

## Production Deployment

For production:
1. Deploy backend to a server (Heroku, AWS, etc.)
2. Update frontend API URLs to production URLs
3. Set up proper domain and SSL certificates
4. Configure email service for production use
5. Set up monitoring and logging

## Support

If you need help:
1. Check the email service documentation
2. Review error logs
3. Test with simple examples first
4. Contact the email service support

---

**Note**: The current demo mode will show you the reset link in an alert and console log for testing purposes. Once you implement real email functionality, users will receive actual emails with the reset links. 
