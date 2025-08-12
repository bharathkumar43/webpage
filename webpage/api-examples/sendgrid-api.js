// Example backend API for SendGrid email integration
// This would be your server-side code (Node.js/Express)

const express = require('express');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
app.use(express.json());

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// API endpoint for sending password reset emails
app.post('/api/send-email-sendgrid', async (req, res) => {
  try {
    const { to, subject, html, text } = req.body;

    // Validate required fields
    if (!to || !subject || !html) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create email message
    const msg = {
      to: to,
      from: process.env.FROM_EMAIL || 'noreply@kabini.ai', // Your verified sender
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
    };

    // Send email
    await sgMail.send(msg);

    console.log(`Password reset email sent to: ${to}`);
    res.json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// API endpoint for sending general emails
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html, text } = req.body;

    const msg = {
      to: to,
      from: process.env.FROM_EMAIL || 'noreply@kabini.ai',
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ''),
    };

    await sgMail.send(msg);
    res.json({ success: true });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Email API server running on port ${PORT}`);
});

// Required environment variables (.env file):
// SENDGRID_API_KEY=your_sendgrid_api_key_here
// FROM_EMAIL=noreply@yourdomain.com

// Installation steps:
// 1. npm install express @sendgrid/mail dotenv
// 2. Create .env file with your SendGrid API key
// 3. Verify your sender email in SendGrid
// 4. Run: node sendgrid-api.js 
