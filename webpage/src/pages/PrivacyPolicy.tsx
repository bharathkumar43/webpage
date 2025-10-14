import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Eye, UserCheck, Mail, Database, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-gray-50 border-b border-gray-200/50">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-4 xs:py-5 sm:py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-blue-500/30 blur-lg -z-10 transition-all duration-300 group-hover:blur-xl"></div>
              </div>
              <span className="text-2xl font-bold text-blue-600">
                Kabini.ai
              </span>
            </Link>
            <Badge className="bg-blue-600 text-white px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm">
              Privacy Policy
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
        {/* Page Header */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <Badge className="mb-3 xs:mb-4 bg-blue-600 text-white border-0 shadow-lg text-xs xs:text-sm px-3 xs:px-4 py-1.5 xs:py-2">
            Legal Information
          </Badge>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-5 sm:mb-6">
            <span className="text-gray-900">Privacy</span>
            <span className="text-blue-600"> Policy</span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your privacy is important to us. This policy explains how Kabini.ai collects, uses, and protects your personal information.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Last Updated: October 8, 2025</span>
          </div>
        </div>

        {/* Quick Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          <Card className="bg-white shadow-lg border border-blue-200 rounded-xl hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-sm text-gray-600">We use industry-standard security measures to protect your data.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-blue-200 rounded-xl hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">We're clear about what data we collect and how we use it.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-blue-200 rounded-xl hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Your Rights</h3>
              <p className="text-sm text-gray-600">You have full control over your personal information.</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-lg border border-blue-200 rounded-xl">
            <CardContent className="p-6 xs:p-8 sm:p-10 space-y-8">
              
              {/* 1. Introduction */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Introduction</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Welcome to Kabini.ai ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered content optimization services.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      By accessing or using Kabini.ai, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please do not use our services.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Information We Collect */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2.1 Personal Information</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                      <li>Register for an account</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Fill out contact forms</li>
                      <li>Request a demo or consultation</li>
                      <li>Participate in surveys or feedback forms</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      This information may include: name, email address, company name, phone number, website URL, and any other information you choose to provide.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2.2 Automatically Collected Information</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      When you visit our website, we automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Click-stream data</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2.3 Cookies and Tracking Technologies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze site traffic, and understand user behavior. You can control cookie settings through your browser preferences.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. How We Use Your Information */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Providing and maintaining our services</li>
                      <li>Processing your requests and transactions</li>
                      <li>Sending you updates, newsletters, and marketing communications</li>
                      <li>Responding to your inquiries and providing customer support</li>
                      <li>Analyzing usage patterns to improve our services</li>
                      <li>Detecting, preventing, and addressing technical issues or security threats</li>
                      <li>Complying with legal obligations and enforcing our terms</li>
                      <li>Personalizing your experience and delivering relevant content</li>
                      <li>Conducting research and development to enhance our AI technology</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 4. Information Sharing and Disclosure */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Information Sharing and Disclosure</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      We do not sell your personal information. We may share your information in the following circumstances:
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 Service Providers</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., email service providers, analytics providers, CRM platforms like HubSpot).
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Business Transfers</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4.3 Legal Requirements</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We may disclose your information if required by law or in response to valid requests by public authorities (e.g., court orders, subpoenas).
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4.4 Protection of Rights</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We may disclose your information to protect our rights, property, or safety, or the rights, property, or safety of others.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Data Security */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Security</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security assessments and audits</li>
                      <li>Access controls and authentication mechanisms</li>
                      <li>Employee training on data protection practices</li>
                      <li>Secure data storage and backup procedures</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed">
                      However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Data Retention */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">6</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Retention</h2>
                    <p className="text-gray-600 leading-relaxed">
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                    </p>
                  </div>
                </div>
              </section>

              {/* 7. Your Rights and Choices */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">7</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Rights and Choices</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Depending on your location, you may have certain rights regarding your personal information:
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">7.1 Access and Correction</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      You have the right to access and update your personal information. You can do this by logging into your account or contacting us directly.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">7.2 Data Deletion</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      You have the right to request the deletion of your personal information, subject to certain exceptions (e.g., legal obligations).
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">7.3 Opt-Out of Marketing</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      You can opt out of receiving marketing communications from us by clicking the "unsubscribe" link in our emails or by contacting us directly.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">7.4 Cookie Management</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">7.5 Data Portability</h3>
                    <p className="text-gray-600 leading-relaxed">
                      You have the right to request a copy of your personal information in a structured, machine-readable format.
                    </p>
                  </div>
                </div>
              </section>

              {/* 8. Third-Party Links */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">8</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Links</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                  </div>
                </div>
              </section>

              {/* 9. Children's Privacy */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">9</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Children's Privacy</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
                    </p>
                  </div>
                </div>
              </section>

              {/* 10. International Data Transfers */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">10</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">International Data Transfers</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to these countries. We take appropriate measures to ensure your information receives adequate protection.
                    </p>
                  </div>
                </div>
              </section>

              {/* 11. Changes to This Privacy Policy */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">11</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
                    <p className="text-gray-600 leading-relaxed">
                      We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* 12. Contact Us */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">12</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-blue-50 p-6 rounded-xl space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Email:</p>
                          <a href="mailto:kabini.ai.marketing@gmail.com" className="text-blue-600 hover:underline">
                            kabini.ai.marketing@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Company:</p>
                          <p className="text-gray-600">Kabini.ai</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Address:</p>
                          <p className="text-gray-600">Kondapur Jyothi Granules</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 13. GDPR Compliance */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">13</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">GDPR Compliance (European Users)</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Right to be informed about data collection and processing</li>
                      <li>Right to access your personal data</li>
                      <li>Right to rectification of inaccurate data</li>
                      <li>Right to erasure ("right to be forgotten")</li>
                      <li>Right to restrict processing</li>
                      <li>Right to data portability</li>
                      <li>Right to object to processing</li>
                      <li>Rights related to automated decision-making and profiling</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 14. CCPA Compliance */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">14</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">CCPA Compliance (California Residents)</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                      <li>Right to know what personal information is collected</li>
                      <li>Right to know if personal information is sold or shared</li>
                      <li>Right to opt-out of the sale of personal information</li>
                      <li>Right to deletion of personal information</li>
                      <li>Right to non-discrimination for exercising your rights</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed">
                      We do not sell your personal information to third parties.
                    </p>
                  </div>
                </div>
              </section>

            </CardContent>
          </Card>

          {/* Footer CTA */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-lg rounded-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Have Questions About Your Privacy?</h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help. Contact us if you have any questions or concerns about how we handle your data.
                </p>
                <Link to="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-medium">
                    Contact Us
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

