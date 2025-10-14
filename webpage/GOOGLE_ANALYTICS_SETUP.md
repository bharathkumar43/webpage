# Google Analytics & Search Console Setup Guide

## 📊 Google Analytics Setup

### Step 1: Create Google Analytics Account

1. **Visit Google Analytics**
   - Go to: [analytics.google.com](https://analytics.google.com)
   - Click "Start measuring" or "Get started"

2. **Create Account**
   - Account name: "Kabini.ai"
   - Data sharing settings: Keep default (recommended)
   - Click "Next"

3. **Set Up Property**
   - Property name: "Kabini.ai Website"
   - Reporting time zone: Your timezone
   - Currency: Your currency
   - Click "Next"

4. **Business Information**
   - Industry: "Technology" or "Software"
   - Business size: Select appropriate
   - How you plan to use GA: Select relevant options
   - Click "Create"

5. **Accept Terms**
   - Read and accept Terms of Service
   - Click "I Accept"

### Step 2: Configure Data Stream

1. **Choose Platform**
   - Select "Web"
   - Click "Next"

2. **Configure Web Stream**
   - Website URL: `https://yourdomain.com`
   - Stream name: "Kabini.ai Website"
   - Click "Create stream"

3. **Get Measurement ID**
   - Copy the Measurement ID (format: `G-XXXXXXXXXX`)
   - **Save this ID** - you'll need it

### Step 3: Install on Your Website

1. **Update Configuration**
   - Open `src/config/analytics.ts`
   - Replace `GA_MEASUREMENT_ID` with your actual ID

2. **Update HTML**
   - Open `index.html`
   - Replace both instances of `GA_MEASUREMENT_ID` with your actual ID

3. **Test Installation**
   - Visit your website
   - Go to GA4 → Real-time → Overview
   - You should see active users

## 🔍 Google Search Console Setup

### Step 1: Add Property

1. **Visit Google Search Console**
   - Go to: [search.google.com/search-console](https://search.google.com/search-console)
   - Click "Add property"

2. **Choose Property Type**
   - Select "URL prefix"
   - Enter your website URL: `https://yourdomain.com`
   - Click "Continue"

### Step 2: Verify Ownership

You have several verification options:

#### Option A: HTML File Upload (Recommended)
1. **Download verification file**
   - Click "HTML file" tab
   - Download the HTML file
   - Upload it to your website's root directory
   - Click "Verify"

#### Option B: HTML Tag
1. **Copy meta tag**
   - Click "HTML tag" tab
   - Copy the meta tag
   - Add it to your website's `<head>` section
   - Click "Verify"

#### Option C: Google Analytics
1. **Use existing GA account**
   - Click "Google Analytics" tab
   - Select your GA property
   - Click "Verify"

### Step 3: Submit Sitemap

1. **Create Sitemap**
   - Generate sitemap for your website
   - Upload to your website root directory

2. **Submit to Search Console**
   - Go to Sitemaps section
   - Enter sitemap URL: `https://yourdomain.com/sitemap.xml`
   - Click "Submit"

## 🚀 Advanced Configuration

### Google Analytics 4 Features

1. **Enhanced Measurement**
   - Automatically tracks: page views, scrolls, outbound clicks, site search
   - Enable in GA4 → Admin → Data Streams → Web

2. **Custom Events**
   - Contact form submissions
   - Newsletter signups
   - Button clicks
   - File downloads

3. **Goals & Conversions**
   - Set up conversion tracking
   - Mark important events as conversions
   - Create custom reports

### Search Console Features

1. **Performance Monitoring**
   - Track search queries
   - Monitor click-through rates
   - Analyze page performance

2. **Index Coverage**
   - Check which pages are indexed
   - Identify indexing issues
   - Submit pages for indexing

3. **Core Web Vitals**
   - Monitor page speed
   - Track user experience metrics
   - Identify performance issues

## 📈 Tracking Implementation

### Contact Form Tracking
Your contact form now tracks:
- Form submissions
- User information (anonymized)
- Source of submission
- Success/failure rates

### Page View Tracking
Automatic tracking of:
- All page visits
- User sessions
- Bounce rates
- Time on site

### Custom Event Tracking
Track specific actions:
- Button clicks
- File downloads
- Video plays
- Newsletter signups

## 🔧 Configuration Files

### Analytics Config (`src/config/analytics.ts`)
```typescript
export const ANALYTICS_CONFIG = {
  MEASUREMENT_ID: 'G-XXXXXXXXXX', // Your GA4 ID
  // ... other configurations
};
```

### HTML Integration (`index.html`)
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📊 Reports & Insights

### Google Analytics Reports
1. **Real-time**: Live user activity
2. **Acquisition**: Traffic sources
3. **Engagement**: User behavior
4. **Monetization**: Conversion tracking
5. **Demographics**: User information

### Search Console Reports
1. **Performance**: Search results data
2. **URL Inspection**: Individual page analysis
3. **Coverage**: Indexing status
4. **Sitemaps**: Submitted sitemaps
5. **Core Web Vitals**: Page experience

## 🎯 Best Practices

### Google Analytics
- Set up goals and conversions
- Create custom audiences
- Use UTM parameters for campaigns
- Monitor bounce rates
- Track user journeys

### Search Console
- Submit sitemap regularly
- Monitor crawl errors
- Check mobile usability
- Track Core Web Vitals
- Analyze search queries

## 🔍 Testing & Verification

### Test Google Analytics
1. Visit your website
2. Go to GA4 → Real-time → Overview
3. Verify you see active users
4. Check events are firing

### Test Search Console
1. Submit a test URL for indexing
2. Check indexing status
3. Verify sitemap submission
4. Monitor performance data

## 📱 Mobile App Integration (Optional)

If you have a mobile app:
1. Create separate GA4 property for app
2. Use Firebase Analytics
3. Set up app-specific tracking
4. Link with web property

## 🔒 Privacy & Compliance

### GDPR Compliance
- Implement cookie consent
- Provide opt-out options
- Update privacy policy
- Use data retention settings

### Data Privacy
- Anonymize IP addresses
- Use consent mode
- Implement data deletion
- Regular privacy audits

## 🆘 Troubleshooting

### Common Issues
1. **No data in GA4**: Check Measurement ID
2. **Verification failed**: Ensure proper file/tag placement
3. **No search data**: Wait 24-48 hours for data
4. **Tracking not working**: Check browser console for errors

### Support Resources
- [Google Analytics Help](https://support.google.com/analytics)
- [Search Console Help](https://support.google.com/webmasters)
- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)

## 📋 Checklist

### Google Analytics Setup
- [ ] Create GA4 account
- [ ] Set up property
- [ ] Configure data stream
- [ ] Get Measurement ID
- [ ] Update website code
- [ ] Test tracking
- [ ] Set up goals
- [ ] Create custom reports

### Search Console Setup
- [ ] Add property
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Check indexing
- [ ] Monitor performance
- [ ] Set up alerts
- [ ] Review reports

Your website is now fully equipped with Google Analytics and Search Console for comprehensive tracking and optimization!
