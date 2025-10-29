import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { submitToHubSpot } from "@/utils/hubspot";
import { trackContactFormSubmit } from "@/config/analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Helper: save a local JSON file with the submission
  const saveLocalFile = (payload: any) => {
    try {
      const existing = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      existing.push(payload);
      localStorage.setItem('contact_submissions', JSON.stringify(existing, null, 2));
    } catch {}
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // 1) Submit to HubSpot (existing)
      const result = await submitToHubSpot(formData);

      // 2) POST to local API to store in a database (expects /api/contact server route)
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() })
        });
      } catch {}

      // 3) Save to local file substitute (localStorage log)
      saveLocalFile({ ...formData, submittedAt: new Date().toISOString() });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message || 'Thanks! Your message has been sent.' });
        trackContactFormSubmit({
          firstName: formData.firstName,
          email: formData.email,
          source: 'contact_us_page'
        });
        setFormData({ firstName: '', lastName: '', email: '', website: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'An unexpected error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 py-14">
          <div className="text-center">
            <Badge className="mb-3 bg-white text-blue-600 border-0 shadow-lg text-sm px-4 py-2">
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Have questions about AI visibility optimization? We're here to help you supercharge your content.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="bg-white shadow-lg border border-blue-200 rounded-xl">
              <CardHeader className="p-4 xs:p-5 sm:p-6">
                <CardTitle className="text-xl xs:text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                <p className="text-sm xs:text-base text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-4 xs:space-y-5 sm:space-y-6 p-4 xs:p-5 sm:p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                    <Input 
                      type="url" 
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your AI visibility needs..."
                      rows={5}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus.type && (
                    <div className={`p-4 rounded-lg flex items-center gap-3 ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="text-sm font-medium">{submitStatus.message}</span>
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Contact Methods */}
            <Card className="bg-white shadow-lg border border-blue-200 rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Get in Touch</CardTitle>
                <p className="text-gray-600">Choose your preferred way to reach us.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <a href="mailto:Contact@kabini.ai" className="text-blue-600 hover:underline">
                      Contact@kabini.ai
                    </a>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                {/* Only Email Us block is shown */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
