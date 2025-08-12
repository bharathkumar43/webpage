const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Email configuration - EASILY CUSTOMIZABLE
const EMAIL_CONFIG = {
  // Change these to customize your emails
  companyName: 'kabini.ai',           // Your company name
  senderName: 'kabini.ai Team',       // Sender name in emails
  senderEmail: process.env.FROM_EMAIL || 'noreply@kabini.ai',
  websiteUrl: 'https://kabini.ai',    // Your website URL
  supportEmail: 'support@kabini.ai',  // Support email
  logoUrl: 'https://kabini.ai/logo.png', // Your logo URL
  primaryColor: '#2563eb',             // Primary brand color
  secondaryColor: '#1e40af'            // Secondary brand color
};

// Generate HTML email template with custom branding
const generateEmailHTML = (data) => {
  const { resetLink, userName, email } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password - ${EMAIL_CONFIG.companyName}</title>
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
          background-color: #f8fafc;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: ${EMAIL_CONFIG.primaryColor}; 
          color: white; 
          padding: 30px 20px; 
          text-align: center; 
        }
        .header h1 { 
          margin: 0; 
          font-size: 28px; 
          font-weight: 600;
        }
        .header p { 
          margin: 10px 0 0 0; 
          opacity: 0.9;
          font-size: 16px;
        }
        .content { 
          padding: 40px 30px; 
          background: white;
        }
        .greeting {
          font-size: 20px;
          color: #1f2937;
          margin-bottom: 20px;
        }
        .message {
          color: #4b5563;
          margin-bottom: 30px;
          font-size: 16px;
        }
        .button-container {
          text-align: center;
          margin: 30px 0;
        }
        .button { 
          display: inline-block; 
          background: ${EMAIL_CONFIG.primaryColor}; 
          color: white; 
          padding: 15px 30px; 
          text-decoration: none; 
          border-radius: 8px; 
          font-weight: 600;
          font-size: 16px;
          transition: background-color 0.3s;
        }
        .button:hover {
          background: ${EMAIL_CONFIG.secondaryColor};
        }
        .link-text {
          word-break: break-all; 
          color: ${EMAIL_CONFIG.primaryColor};
          font-family: monospace;
          background: #f3f4f6;
          padding: 10px;
          border-radius: 4px;
          margin: 15px 0;
        }
        .warning { 
          background: #fef3c7; 
          border: 1px solid #f59e0b; 
          padding: 20px; 
          border-radius: 8px; 
          margin: 25px 0; 
        }
        .warning h3 {
          margin: 0 0 10px 0;
          color: #92400e;
        }
        .warning ul {
          margin: 10px 0;
          padding-left: 20px;
        }
        .warning li {
          margin: 5px 0;
          color: #92400e;
        }
        .footer { 
          text-align: center; 
          padding: 30px 20px; 
          background: #f8fafc;
          border-top: 1px solid #e5e7eb;
        }
        .footer p {
          margin: 5px 0;
          color: #6b7280; 
          font-size: 14px;
        }
        .footer a {
          color: ${EMAIL_CONFIG.primaryColor};
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        .company-info {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${EMAIL_CONFIG.companyName}</h1>
          <p>Password Reset Request</p>
        </div>
        
        <div class="content">
          <div class="greeting">Hello ${userName || 'there'},</div>
          
          <div class="message">
            We received a request to reset your password for your ${EMAIL_CONFIG.companyName} account.
          </div>
          
          <div class="message">
            Click the button below to reset your password:
          </div>
          
          <div class="button-container">
            <a href="${resetLink}" class="button">Reset Password</a>
          </div>
          
          <div class="message">
            If the button doesn't work, you can copy and paste this link into your browser:
          </div>
          
          <div class="link-text">${resetLink}</div>
          
          <div class="warning">
            <h3>⚠️ Important Security Information:</h3>
            <ul>
              <li>This link will expire in 24 hours</li>
              <li>If you didn't request this password reset, please ignore this email</li>
              <li>For security, this link can only be used once</li>
              <li>Never share this link with anyone</li>
            </ul>
          </div>
          
          <div class="message">
            If you have any questions or need assistance, please contact our support team at 
            <a href="mailto:${EMAIL_CONFIG.supportEmail}">${EMAIL_CONFIG.supportEmail}</a>
          </div>
          
          <div class="message">
            Best regards,<br>
            <strong>The ${EMAIL_CONFIG.companyName} Team</strong>
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent to <strong>${email}</strong></p>
          <p>If you didn't request this password reset, you can safely ignore this email.</p>
          
          <div class="company-info">
            <p><a href="${EMAIL_CONFIG.websiteUrl}">${EMAIL_CONFIG.websiteUrl}</a></p>
            <p>&copy; ${new Date().getFullYear()} ${EMAIL_CONFIG.companyName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Generate plain text email
const generateEmailText = (data) => {
  const { resetLink, userName, email } = data;
  
  return `
Hello ${userName || 'there'},

We received a request to reset your password for your ${EMAIL_CONFIG.companyName} account.

Click the link below to reset your password:
${resetLink}

IMPORTANT SECURITY INFORMATION:
- This link will expire in 24 hours
- If you didn't request this password reset, please ignore this email
- For security, this link can only be used once
- Never share this link with anyone

If you have any questions or need assistance, please contact our support team at ${EMAIL_CONFIG.supportEmail}

Best regards,
The ${EMAIL_CONFIG.companyName} Team

This email was sent to ${email}
If you didn't request this password reset, you can safely ignore this email.

${EMAIL_CONFIG.websiteUrl}
© ${new Date().getFullYear()} ${EMAIL_CONFIG.companyName}. All rights reserved.
  `.trim();
};

// API endpoint for sending password reset emails
app.post('/api/send-email-sendgrid', async (req, res) => {
  try {
    const { to, subject, html, text, resetLink, userName } = req.body;

    // Validate required fields
    if (!to || !resetLink) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate email content with custom branding
    const emailData = {
      resetLink,
      userName,
      email: to
    };

    const emailHTML = generateEmailHTML(emailData);
    const emailText = generateEmailText(emailData);

    // Create email message
    const msg = {
      to: to,
      from: {
        email: EMAIL_CONFIG.senderEmail,
        name: EMAIL_CONFIG.senderName
      },
      subject: subject || `Reset Your Password - ${EMAIL_CONFIG.companyName}`,
      html: emailHTML,
      text: emailText,
    };

    // Send email
    await sgMail.send(msg);

    console.log(`✅ Password reset email sent to: ${to}`);
    console.log(`📧 From: ${EMAIL_CONFIG.senderName} <${EMAIL_CONFIG.senderEmail}>`);
    console.log(`🔗 Reset link: ${resetLink}`);
    
    res.json({ 
      success: true, 
      message: 'Email sent successfully',
      sentTo: to,
      from: `${EMAIL_CONFIG.senderName} <${EMAIL_CONFIG.senderEmail}>`
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    service: 'kabini Email Service',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
  console.log(`📧 Company: ${EMAIL_CONFIG.companyName}`);
  console.log(`👤 Sender: ${EMAIL_CONFIG.senderName} <${EMAIL_CONFIG.senderEmail}>`);
  console.log(`🌐 Website: ${EMAIL_CONFIG.websiteUrl}`);
  console.log(`🔧 Health check: http://localhost:${PORT}/health`);
});

module.exports = { EMAIL_CONFIG }; 
