import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | IPTV Satlink - Your Data Protection & Privacy Rights',
  description: 'Learn about IPTV Satlink\'s commitment to protecting your privacy and personal data. Comprehensive privacy policy covering data collection, usage, and your rights.',
  keywords: 'IPTV Satlink privacy policy, data protection, personal information, user privacy, GDPR compliance',
  openGraph: {
    title: 'Privacy Policy | IPTV Satlink',
    description: 'Your privacy matters to us. Read our comprehensive privacy policy.',
    url: 'https://iptvsatlink.com/privacy-policy',
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-6 text-blue-100">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-600 mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Create an account or subscribe to our services</li>
                    <li>• Contact us through our support channels</li>
                    <li>• Subscribe to our newsletter or promotional emails</li>
                    <li>• Participate in surveys or feedback forms</li>
                  </ul>
                </div>

                <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
                  <p className="text-gray-600 mb-4">
                    We automatically collect certain technical information when you use our services:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Usage patterns and preferences</li>
                    <li>• Log files and analytics data</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Provision</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Provide and maintain our IPTV services</li>
                      <li>• Process payments and subscriptions</li>
                      <li>• Authenticate and secure user accounts</li>
                      <li>• Deliver customer support</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Improvement</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Analyze usage patterns and preferences</li>
                      <li>• Improve our platform and services</li>
                      <li>• Develop new features and content</li>
                      <li>• Conduct research and analytics</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">We Do Not Sell Your Data</h3>
                  <p className="text-gray-600 mb-4">
                    IPTV Satlink does not sell, trade, or rent your personal information to third parties for marketing purposes.
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Limited Sharing Scenarios:</h3>
                  <div className="grid gap-4">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-semibold text-gray-800">Service Providers</h4>
                      <p className="text-gray-600">Trusted third-party service providers who assist in operating our platform</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-4">
                      <h4 className="font-semibold text-gray-800">Legal Requirements</h4>
                      <p className="text-gray-600">When required by law, court order, or government regulations</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold text-gray-800">Business Transfers</h4>
                      <p className="text-gray-600">In case of merger, acquisition, or sale of business assets</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Technical Safeguards</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• SSL/TLS encryption for data transmission</li>
                        <li>• Secure data storage and backup systems</li>
                        <li>• Regular security audits and updates</li>
                        <li>• Access controls and authentication</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Operational Safeguards</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Limited access to personal data</li>
                        <li>• Employee training on data protection</li>
                        <li>• Incident response procedures</li>
                        <li>• Regular security monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Subject Rights</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <ul className="text-gray-600 space-y-2">
                          <li>• <strong>Access:</strong> Request copies of your personal data</li>
                          <li>• <strong>Rectification:</strong> Correct inaccurate information</li>
                          <li>• <strong>Erasure:</strong> Request deletion of your data</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="text-gray-600 space-y-2">
                          <li>• <strong>Portability:</strong> Receive your data in a usable format</li>
                          <li>• <strong>Restriction:</strong> Limit how we process your data</li>
                          <li>• <strong>Objection:</strong> Object to certain data processing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Communication Preferences</h3>
                    <p className="text-gray-600 mb-3">
                      You can control how we communicate with you:
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Unsubscribe from marketing emails at any time</li>
                      <li>• Update your communication preferences in your account settings</li>
                      <li>• Contact our support team to modify your preferences</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    We use cookies and similar tracking technologies to enhance your experience:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🍪</span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                      <p className="text-sm text-gray-600">Required for basic website functionality</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600">Help us understand how you use our site</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Preference Cookies</h4>
                      <p className="text-sm text-gray-600">Remember your settings and preferences</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    We retain your personal information only as long as necessary to:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Provide our services to you</li>
                    <li>• Comply with legal obligations</li>
                    <li>• Resolve disputes and enforce agreements</li>
                    <li>• Improve our services and user experience</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    When personal information is no longer needed, we securely delete or anonymize it.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place to protect your data during international transfers.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Safeguards Include:</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Adequacy decisions by regulatory authorities</li>
                        <li>• Standard contractual clauses</li>
                        <li>• Binding corporate rules</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Your Rights:</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Request information about transfers</li>
                        <li>• Obtain copies of safeguards</li>
                        <li>• Lodge complaints with authorities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Age Restrictions</h3>
                  <p className="text-gray-600 mb-4">
                    Our services are not intended for children under 13 years of age. We do not knowingly 
                    collect personal information from children under 13.
                  </p>
                  <p className="text-gray-600">
                    If you are a parent or guardian and believe your child has provided us with personal 
                    information, please contact us immediately so we can delete such information.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates to This Policy</h2>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our 
                    practices or for other operational, legal, or regulatory reasons.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">We Will Notify You:</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• By email for significant changes</li>
                        <li>• Through our website banner</li>
                        <li>• In your account dashboard</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Your Continued Use:</h4>
                      <p className="text-gray-600 text-sm">
                        Continued use of our services after policy updates constitutes acceptance 
                        of the revised terms.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Questions About This Policy?</h3>
                  <p className="text-gray-600 mb-6">
                    If you have any questions, concerns, or requests regarding this Privacy Policy 
                    or our data practices, please contact us:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Contact Methods:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="text-blue-600 mr-3">📧</span>
                          <span className="text-gray-600">privacy@iptvsatlink.com</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-blue-600 mr-3">🌐</span>
                          <span className="text-gray-600">iptvsatlink.com/contact</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-blue-600 mr-3">⏰</span>
                          <span className="text-gray-600">24/7 Support Available</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Response Time:</h4>
                      <div className="space-y-2">
                        <div className="text-gray-600 text-sm">
                          <strong>Privacy Requests:</strong> Within 30 days
                        </div>
                        <div className="text-gray-600 text-sm">
                          <strong>General Inquiries:</strong> Within 48 hours
                        </div>
                        <div className="text-gray-600 text-sm">
                          <strong>Urgent Issues:</strong> Within 24 hours
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}