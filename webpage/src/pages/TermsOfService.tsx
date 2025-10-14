import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Scale, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
              Terms of Service
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
        {/* Page Header */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <Badge className="mb-3 xs:mb-4 bg-blue-600 text-white border-0 shadow-lg text-xs xs:text-sm px-3 xs:px-4 py-1.5 xs:py-2">
            Legal Terms
          </Badge>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-5 sm:mb-6">
            <span className="text-gray-900">Terms of</span>
            <span className="text-blue-600"> Service</span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Please read these terms carefully before using Kabini.ai's services.
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
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fair Usage</h3>
              <p className="text-sm text-gray-600">Use our services responsibly and in accordance with applicable laws.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-blue-200 rounded-xl hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Clear Terms</h3>
              <p className="text-sm text-gray-600">Transparent conditions that protect both you and us.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-blue-200 rounded-xl hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Service Quality</h3>
              <p className="text-sm text-gray-600">Commitment to delivering high-quality AI-powered services.</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-lg border border-blue-200 rounded-xl">
            <CardContent className="p-6 xs:p-8 sm:p-10 space-y-8">
              
              {/* 1. Agreement to Terms */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Agreement to Terms</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      By accessing or using Kabini.ai ("Service," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      These Terms apply to all visitors, users, and others who access or use the Service.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Description of Service */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Description of Service</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Kabini.ai provides AI-powered content optimization and generative engine optimization (GEO) services designed to enhance your website's visibility in AI-powered search results and recommendations.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Our services include, but are not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mt-3 ml-4">
                      <li>AI visibility analysis and optimization</li>
                      <li>Content enhancement recommendations</li>
                      <li>Performance tracking and analytics</li>
                      <li>Technical SEO and GEO guidance</li>
                      <li>Custom optimization strategies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 3. User Accounts */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">User Accounts</h2>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 Account Creation</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      To access certain features of the Service, you may be required to create an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 Account Security</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized access or security breach.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3.3 Account Termination</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We reserve the right to suspend or terminate your account if you violate these Terms or engage in any activity that we deem harmful to our Service or other users.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Acceptable Use */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Acceptable Use</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      You agree not to use the Service for any purpose that is:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                      <li>Unlawful, illegal, or unauthorized</li>
                      <li>Harmful, threatening, abusive, or harassing</li>
                      <li>Defamatory, vulgar, obscene, or invasive of privacy</li>
                      <li>Infringes on intellectual property rights</li>
                      <li>Contains viruses, malware, or harmful code</li>
                      <li>Attempts to gain unauthorized access to our systems</li>
                      <li>Interferes with the proper functioning of the Service</li>
                      <li>Impersonates any person or entity</li>
                      <li>Collects information about others without consent</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. Intellectual Property */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Intellectual Property</h2>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Our Property</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The Service and its original content, features, and functionality are owned by Kabini.ai and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Your Content</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      You retain all rights to any content you submit, post, or display through the Service ("Your Content"). By submitting Your Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute Your Content solely for the purpose of providing and improving our Service.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 Feedback</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Any feedback, comments, or suggestions you provide regarding the Service may be used by us without any obligation to you.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Payment Terms */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">6</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Payment Terms</h2>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Pricing</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Certain aspects of the Service may be provided for a fee. You agree to pay all fees associated with your account as described at the time of purchase. All fees are in U.S. Dollars unless otherwise stated.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2 Billing</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      For subscription-based services, you will be billed in advance on a recurring basis (e.g., monthly or annually). Your subscription will automatically renew unless you cancel before the renewal date.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">6.3 Refunds</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Refund policies vary by service plan. Please refer to your specific plan details or contact us for information about refund eligibility.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">6.4 Price Changes</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We reserve the right to modify our pricing. We will provide you with reasonable notice of any price changes, and you will have the opportunity to cancel your subscription if you do not agree to the new pricing.
                    </p>
                  </div>
                </div>
              </section>

              {/* 7. Service Modifications */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">7</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Service Modifications and Availability</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We strive to maintain high availability but do not guarantee that the Service will be uninterrupted, timely, secure, or error-free.
                    </p>
                  </div>
                </div>
              </section>

              {/* 8. Disclaimers and Limitations of Liability */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">8</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Disclaimers and Limitations of Liability</h2>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">8.1 "As Is" Service</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">8.2 No Guarantee of Results</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      While we strive to provide effective optimization services, we do not guarantee specific results, rankings, or traffic increases. AI algorithms and search engines are controlled by third parties and are subject to change.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">8.3 Limitation of Liability</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To the maximum extent permitted by law, Kabini.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
                    </p>
                  </div>
                </div>
              </section>

              {/* 9. Indemnification */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">9</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Indemnification</h2>
                    <p className="text-gray-600 leading-relaxed">
                      You agree to indemnify, defend, and hold harmless Kabini.ai, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another party.
                    </p>
                  </div>
                </div>
              </section>

              {/* 10. Third-Party Services */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">10</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Services and Links</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Our Service may contain links to third-party websites or services that are not owned or controlled by Kabini.ai. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      You acknowledge and agree that Kabini.ai shall not be responsible or liable for any damage or loss caused by your use of any third-party content, goods, or services.
                    </p>
                  </div>
                </div>
              </section>

              {/* 11. Confidentiality */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">11</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Confidentiality</h2>
                    <p className="text-gray-600 leading-relaxed">
                      We may receive confidential information from you in connection with the Service. We agree to maintain the confidentiality of such information and not to disclose it to third parties, except as necessary to provide the Service or as required by law. This obligation survives the termination of these Terms.
                    </p>
                  </div>
                </div>
              </section>

              {/* 12. Dispute Resolution */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">12</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Dispute Resolution</h2>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">12.1 Informal Resolution</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If a dispute arises between you and Kabini.ai, we encourage you to contact us first to seek an informal resolution.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">12.2 Arbitration</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If an informal resolution cannot be reached, any dispute will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">12.3 Class Action Waiver</h3>
                    <p className="text-gray-600 leading-relaxed">
                      You agree that any arbitration or proceeding shall be limited to the dispute between you and Kabini.ai individually. You waive any right to participate in a class action lawsuit or class-wide arbitration.
                    </p>
                  </div>
                </div>
              </section>

              {/* 13. Governing Law */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">13</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Governing Law</h2>
                    <p className="text-gray-600 leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Kabini.ai operates, without regard to its conflict of law provisions.
                    </p>
                  </div>
                </div>
              </section>

              {/* 14. Changes to Terms */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">14</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to These Terms</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Service.
                    </p>
                  </div>
                </div>
              </section>

              {/* 15. Severability */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">15</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Severability</h2>
                    <p className="text-gray-600 leading-relaxed">
                      If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                    </p>
                  </div>
                </div>
              </section>

              {/* 16. Entire Agreement */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">16</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Entire Agreement</h2>
                    <p className="text-gray-600 leading-relaxed">
                      These Terms constitute the entire agreement between you and Kabini.ai regarding the use of the Service and supersede any prior agreements between you and Kabini.ai relating to your use of the Service.
                    </p>
                  </div>
                </div>
              </section>

              {/* 17. Contact Information */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">17</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Information</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If you have any questions about these Terms, please contact us:
                    </p>
                    <div className="bg-blue-50 p-6 rounded-xl space-y-3">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Company:</p>
                          <p className="text-gray-600">Kabini.ai</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Email:</p>
                          <a href="mailto:kabini.ai.marketing@gmail.com" className="text-blue-600 hover:underline">
                            kabini.ai.marketing@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </CardContent>
          </Card>

          {/* Footer CTA */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-lg rounded-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Questions About These Terms?</h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help clarify any questions you may have about our Terms of Service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-medium">
                      Contact Us
                    </button>
                  </Link>
                  <Link to="/privacy-policy">
                    <button className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-medium">
                      View Privacy Policy
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

