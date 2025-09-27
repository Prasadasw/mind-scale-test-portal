import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/LOGO.png'
import home from '../assets/img/3.png'
import abt from '../assets/img/abt.png'
import play from '../assets/img/play.png'
import playstore from '../assets/img/google-play.png'
import appstore from '../assets/img/app-store.png'
import tagline from '../assets/img/2.png'

function Home() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`min-h-screen transition-colors duration-300'}`}>
      {/* Hero Section with Banner */}
      <section className="relative">
        {/* Banner Image */}
        <div className="w-full h-auto overflow-hidden">
          <img
            src={home}
            alt="Home Banner"
            className="w-full h-[600px] object-cover"
          />
        </div>

        {/* Overlapping Header */}
        <header className="absolute top-4 left-0 right-0 z-10">
          <div className="bg-white/90 backdrop-blur-sm mx-4 rounded-l-full rounded-r-full px-6 py-4 shadow-lg">
            <div className="flex items-center justify-between">
              {/* Logo/Brand */}
              <div className="text-white text-xl font-bold">
                <img src={logo} alt="logo" className="w-12 h-10" />
              </div>

              {/* Navigation */}
              <nav className="flex items-center space-x-8">
                <a href="#" className="text-[#12316d] hover:text-blue-200 transition-colors duration-200">Home</a>
                <a href="#" className="text-[#12316d] hover:text-blue-200 transition-colors duration-200">About</a>
                <a href="#" className="text-[#12316d] hover:text-blue-200 transition-colors duration-200">Feature</a>
                <a href="#" className="text-[#12316d] hover:text-blue-200 transition-colors duration-200">Contact Us</a>
              </nav>

              {/* Download Button */}
              <div className="flex items-center">
                <img src={play} alt="download" className="w-10 h-10" />
                <button className="bg-[#12316d] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
                  Download
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Text on Banner */}
        <div className="absolute top-1/2 left-8 lg:left-16 transform -translate-y-1/2 z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-loose line-height-normal max-w-lg">
            Your Gateway to Defence Success & Scholarships
          </h1>
          <p className="text-white text-xl leading-relaxed max-w-lg mt-6">
            Track your progress and achievements with our comprehensive monitoring and reporting system.
          </p>
          {/* App Store Images */}
          <div className="flex gap-4 mt-6">
            <img src={playstore} alt="Google Play Store" className="w-32 h-12 object-contain" />
            <img src={appstore} alt="Apple App Store" className="w-32 h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Hero Section with Image and About Content */}
      <section className="py-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image and Text */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={abt}
                  alt="Hero Image"
                  className="w-full h-[420px] object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div> */}
              </div>

            </div>

            {/* Right Side - About Us Content */}
            <div className="order-1 lg:order-2 space-y-6 px-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#12316d] leading-tight">
                  About Us
                </h2>
                <div className="w-20 h-1 bg-[#12316d] rounded-full"></div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                We are a leading company dedicated to providing innovative solutions and exceptional services.
                Our team of experts is committed to delivering excellence in everything we do.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                With years of experience and a passion for innovation, we help our clients achieve their goals
                through cutting-edge technology and personalized approaches.
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#12316d] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors duration-200">
                  Learn More
                </button>
                <button className="border-2 border-[#12316d] text-[#12316d] px-8 py-3 rounded-full font-semibold hover:bg-[#12316d] hover:text-white transition-colors duration-200">
                  Contact Us
        </button>
              </div> */}

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#12316d] mb-4">Our Features</h2>
            <div className="w-20 h-1 bg-[#12316d] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#12316d] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#12316d] mb-4">Expert Guidance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get personalized guidance from experienced professionals to help you navigate your defence career path.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#12316d] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#12316d] mb-4">Scholarship Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access comprehensive scholarship opportunities and get assistance with applications and requirements.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#12316d] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#12316d] mb-4">Success Tracking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track your progress and achievements with our comprehensive monitoring and reporting system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="relative py-6 bg-[#12316d] h-[300px] flex items-center justify-center overflow-visible">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left text-white px-6">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                JOIN OUR DEFENCE COMMUNITY
              </h2>
              <div className="w-16 h-1 bg-white rounded-full mx-auto lg:mx-0 mb-6"></div>
              <p className="text-lg opacity-90">
                Be part of something bigger. Join thousands of defence professionals.
              </p>
            </div>

            {/* Right Side - Image extending outside */}
            <div className="relative  flex justify-center lg:justify-center">
              <img
                src={tagline}
                alt="Defence Community"
                className="relative -top-12 h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Section - Social Media & App Downloads */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-sm">Follow us on</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex space-x-3">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img src={appstore} alt="Download on the App Store" className="h-10 w-auto" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img src={playstore} alt="GET IT ON Google Play" className="h-10 w-auto" />
              </a>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-600 mb-6"></div>

          {/* Bottom Section - Legal Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
            <a href="#" className="hover:opacity-70 transition-opacity">Terms of Service</a>
            <Link to="/privacy-policy" className="hover:opacity-70 transition-opacity">Privacy Policy</Link>
            <a href="#" className="hover:opacity-70 transition-opacity">Parent's Guide</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Safe and Fair Play Policy</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Accessibility Statement</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Other Legal Docs</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Media Center</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Our Domains</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Manage Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
