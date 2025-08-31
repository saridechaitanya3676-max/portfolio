# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form emails to your Gmail address (badavathkumar811@gmail.com).

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service ✅ COMPLETED

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (badavathkumar811@gmail.com)
5. Note down the **Service ID** (you'll need this later)

**✅ Your Service ID: `service_phpoqg4`**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this beautiful template content:

```html
Subject: New Contact Form Message from {{name}}

<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your User ID

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key** (User ID)

## Step 5: Update Your Code ✅ COMPLETED

All placeholder values have been replaced in `src/components/Contact.js`:

```javascript
// ✅ User ID updated
emailjs.init("Lp2DL9x0ycEvl1gao");

// ✅ Service ID and Template ID updated
await emailjs.send(
  'service_phpoqg4', // Your Gmail service ID
  'template_uo7pa8c', // Your EmailJS template ID
  templateParams
);
```

**✅ Service ID: `service_phpoqg4`**
**✅ Template ID: `template_uo7pa8c`**
**✅ User ID: `Lp2DL9x0ycEvl1gao`**
**✅ Template parameters already updated to match your beautiful template!**

**Template Variables Used:**
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{time}}` - Timestamp when message was sent

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Go to the contact form
3. Fill out the form and submit
4. Check your Gmail inbox (badavathkumar811@gmail.com) for the test message

## Troubleshooting

- **Emails not sending**: Check that all IDs are correctly replaced
- **Service connection issues**: Reconnect your Gmail account in EmailJS
- **Template errors**: Make sure template variables match the code ({{from_name}}, {{from_email}}, etc.)

## Security Notes

- The EmailJS User ID is public and safe to include in frontend code
- Your Gmail credentials are stored securely on EmailJS servers
- The free plan allows 200 emails per month

## Alternative Setup (Optional)

If you prefer, you can also use a different email service like:
- Outlook/Hotmail
- Yahoo Mail
- Custom SMTP server

The setup process is similar, just choose a different service when adding your email service.
