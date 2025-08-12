// Email service utilities
// In a real application, this would integrate with services like SendGrid, Mailgun, AWS SES, etc.

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface ResetEmailData {
  email: string;
  resetLink: string;
  userName?: string;
}

// Email configuration - EASILY CUSTOMIZABLE
export const EMAIL_CONFIG = {
  // Change these to customize your emails
  companyName: 'kabini.ai',           // Your company name
  senderName: 'kabini.ai Team',       // Sender name in emails
  websiteUrl: 'https://kabini.ai',    // Your website URL
  supportEmail: 'support@kabini.ai',  // Support email
  primaryColor: '#2563eb',             // Primary brand color
  secondaryColor: '#1e40af'            // Secondary brand color
};

// Generate HTML email template for password reset
export const generateResetEmailHTML = (data: ResetEmailData): string => {
  const userName = data.userName || 'User';
  
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
          <div class="greeting">Hello ${userName},</div>
          
          <div class="message">
            We received a request to reset your password for your ${EMAIL_CONFIG.companyName} account.
          </div>
          
          <div class="message">
            Click the button below to reset your password:
          </div>
          
          <div class="button-container">
            <a href="${data.resetLink}" class="button">Reset Password</a>
          </div>
          
          <div class="message">
            If the button doesn't work, you can copy and paste this link into your browser:
          </div>
          
          <div class="link-text">${data.resetLink}</div>
          
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
          <p>This email was sent to <strong>${data.email}</strong></p>
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

// Generate plain text email for password reset
export const generateResetEmailText = (data: ResetEmailData): string => {
  const userName = data.userName || 'User';
  
  return `
Hello ${userName},

We received a request to reset your password for your ${EMAIL_CONFIG.companyName} account.

Click the link below to reset your password:
${data.resetLink}

IMPORTANT SECURITY INFORMATION:
- This link will expire in 24 hours
- If you didn't request this password reset, please ignore this email
- For security, this link can only be used once
- Never share this link with anyone

If you have any questions or need assistance, please contact our support team at ${EMAIL_CONFIG.supportEmail}

Best regards,
The ${EMAIL_CONFIG.companyName} Team

This email was sent to ${data.email}
If you didn't request this password reset, you can safely ignore this email.

${EMAIL_CONFIG.websiteUrl}
© ${new Date().getFullYear()} ${EMAIL_CONFIG.companyName}. All rights reserved.
  `.trim();
};

// REAL EMAIL SENDING IMPLEMENTATION
// Choose one of the following options:

// Option 1: SendGrid Integration
export const sendEmailWithSendGrid = async (emailData: EmailData): Promise<boolean> => {
  try {
    // You'll need to install: npm install @sendgrid/mail
    // And set up your SendGrid API key in environment variables
    
    const response = await fetch('http://localhost:3001/api/send-email-sendgrid', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    
    const result = await response.json();
    console.log('✅ Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('❌ Error sending email with SendGrid:', error);
    return false;
  }
};

// Option 2: Mailgun Integration
export const sendEmailWithMailgun = async (emailData: EmailData): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append('to', emailData.to);
    formData.append('subject', emailData.subject);
    formData.append('html', emailData.html);
    if (emailData.text) {
      formData.append('text', emailData.text);
    }
    
    const response = await fetch('/api/send-email-mailgun', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending email with Mailgun:', error);
    return false;
  }
};

// Option 3: AWS SES Integration
export const sendEmailWithSES = async (emailData: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-email-ses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Destination: { ToAddresses: [emailData.to] },
        Message: {
          Body: { 
            Html: { Data: emailData.html },
            Text: { Data: emailData.text || emailData.html }
          },
          Subject: { Data: emailData.subject }
        }
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending email with AWS SES:', error);
    return false;
  }
};

// DEMO MODE - For testing without real email service
export const sendEmailDemo = async (emailData: EmailData): Promise<boolean> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Log email details for demo purposes
    console.log('📧 DEMO EMAIL SENT:');
    console.log('To:', emailData.to);
    console.log('Subject:', emailData.subject);
    console.log('From:', `${EMAIL_CONFIG.senderName} <noreply@${EMAIL_CONFIG.companyName.toLowerCase()}>`);
    console.log('HTML Preview:', emailData.html.substring(0, 200) + '...');
    
    // Show alert with reset link for demo
    const resetLinkMatch = emailData.html.match(/href="([^"]+)"/);
    if (resetLinkMatch) {
      alert(`DEMO: Password reset email would be sent to ${emailData.to}\n\nFrom: ${EMAIL_CONFIG.senderName}\n\nReset Link: ${resetLinkMatch[1]}\n\n(In production, this would be sent via SendGrid)`);
    }
    
    return true;
  } catch (error) {
    console.error('Error in demo email sending:', error);
    return false;
  }
};

// Main email sending function - CHANGE THIS TO USE REAL SERVICE
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  // TODO: Replace this with your chosen email service
  // Uncomment one of the following lines:
  
  // return await sendEmailWithSendGrid(emailData);  // For SendGrid
  // return await sendEmailWithMailgun(emailData);   // For Mailgun  
  // return await sendEmailWithSES(emailData);       // For AWS SES
  
  // For now, using demo mode
  return await sendEmailDemo(emailData);
};

// Send password reset email
export const sendPasswordResetEmail = async (data: ResetEmailData): Promise<boolean> => {
  const emailData: EmailData = {
    to: data.email,
    subject: `Reset Your Password - ${EMAIL_CONFIG.companyName}`,
    html: generateResetEmailHTML(data),
    text: generateResetEmailText(data)
  };
  
  return await sendEmail(emailData);
}; 
