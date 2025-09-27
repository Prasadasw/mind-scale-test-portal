import { Link } from 'react-router-dom'
import logo from '../assets/logo/LOGO.png'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="w-12 h-10" />
            </Link>
            <Link 
              to="/" 
              className="text-[#12316d] hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#12316d] mb-4">📜 Privacy Policy</h1>
            <div className="w-20 h-1 bg-[#12316d] rounded-full mx-auto mb-6"></div>
            <div className="text-gray-600 space-y-2">
              <p><strong>Effective Date:</strong> September 28, 2025</p>
              <p><strong>Last Updated:</strong> September 28, 2025</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Mind Scale Test Portal ("we", "our", or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application available on Google Play Store.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#12316d] mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Personal Information (if provided):</strong> Name, email address, phone number, or other details you voluntarily submit.</li>
                <li><strong>Non-Personal Information:</strong> Device information (model, OS version), app usage data, crash logs, and analytics.</li>
                <li><strong>Location Data (if enabled):</strong> Used only to provide app-specific features such as [maps, search, or location-based services].</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#12316d] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide and improve app functionality.</li>
                <li>Personalize user experience.</li>
                <li>Respond to support requests.</li>
                <li>Communicate important updates, features, or promotions.</li>
                <li>Ensure security and prevent fraud.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#12316d] mb-4">3. Sharing of Information</h2>
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent users' personal information. We may share limited data with:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> (e.g., analytics, cloud storage, payment processors).</li>
                <li><strong>Legal Requirements:</strong> If required by law or government authorities.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#12316d] mb-4">4. Data Security</h2>
              <p className="text-gray-700">
                We adopt appropriate security practices to protect your data from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#12316d] mb-4">5. Third-Party Services</h2>
              <p className="text-gray-700">
                Our app may use third-party libraries and services (e.g., Google Analytics, Firebase, AdMob). These services may collect information as governed by their own privacy policies.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#12316d] mb-4">6. Children's Privacy</h2>
              <p className="text-gray-700">
                Our app is not directed to children under 13. We do not knowingly collect information from children. If we discover such data, we will delete it immediately.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#12316d] mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">You may:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt-out of marketing or push notifications.</li>
                <li>Request account deletion by contacting us.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#12316d] mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify users by updating the "Last Updated" date above.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#12316d] mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <span className="text-xl mr-2">📧</span>
                  <strong>Email:</strong> contact@ddabattalion.com
                </p>
                <p className="text-gray-700">
                  <span className="text-xl mr-2">🌐</span>
                  <strong>Website:</strong> mind-scale-test-portal.ddabattalion.com
                </p>
              </div>
            </section>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-3 bg-[#12316d] text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy
