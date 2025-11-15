import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/LOGO.png";
import home from "../assets/img/3.png";
import abt from "../assets/img/abt.png";
import play from "../assets/img/play.png";
import playstore from "../assets/img/google-play.png";
import appstore from "../assets/img/app-store.png";
import tagline from "../assets/img/2.png";
import apkFile from "../assets/apkstore/mind-scale-test-portal.apk";
import DownloadPopup from "./DownloadPopup";

function Home() {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  // Show popup after 3 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowDownloadPopup(true);
        setHasShownPopup(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasShownPopup]);

  const triggerApkDownload = () => {
    const link = document.createElement("a");
    link.href = apkFile;
    link.download = "mind-scale-test-portal.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadClick = () => {
    setShowDownloadPopup(true);
  };

  const handlePlayStoreDownload = () => {
    triggerApkDownload();
    setShowDownloadPopup(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300'}`}>
      {/* Hero Section with Banner */}
      <section className="relative">
        {/* Banner Image */}
        <div className="w-full h-auto overflow-hidden">
          <img
            src={home}
            alt="Home Banner"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
          />
        </div>

        {/* Overlapping Header */}
        <header className="absolute top-2 sm:top-4 left-0 right-0 z-10">
          <div className="bg-white/90 backdrop-blur-sm mx-2 sm:mx-4 rounded-l-full rounded-r-full px-3 sm:px-6 py-2 sm:py-4 shadow-lg">
            <div className="flex items-center justify-between">
              {/* Logo/Brand */}
              <div className="text-white text-xl font-bold">
                <img
                  src={logo}
                  alt="logo"
                  className="w-8 h-6 sm:w-12 sm:h-10"
                />
              </div>

              {/* Navigation - Hidden on mobile */}
              <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                <a
                  href="#"
                  className="text-[#12316d] hover:text-blue-200 transition-colors duration-200 text-sm lg:text-base"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-[#12316d] hover:text-blue-200 transition-colors duration-200 text-sm lg:text-base"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-[#12316d] hover:text-blue-200 transition-colors duration-200 text-sm lg:text-base"
                >
                  Feature
                </a>
                <a
                  href="#"
                  className="text-[#12316d] hover:text-blue-200 transition-colors duration-200 text-sm lg:text-base"
                >
                  Contact Us
                </a>
              </nav>

              {/* Download Button */}
              <button
                onClick={handleDownloadClick}
                className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#12316d] to-[#1a4a8f] text-white px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full font-semibold hover:from-[#1a4a8f] hover:to-[#12316d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-xs sm:text-sm"
              >
                <img
                  src={play}
                  alt="download"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Text on Banner */}
        <div className="absolute top-1/2 left-4 sm:left-8 lg:left-16 transform -translate-y-1/2 z-10 max-w-[90%] sm:max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight sm:leading-loose line-height-normal">
            Your Gateway to Defence Success & Scholarships
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-3 sm:mt-4 md:mt-6">
            Track your progress and achievements with our comprehensive
            monitoring and reporting system.
          </p>
          {/* App Store Images */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
            <button
              onClick={handlePlayStoreDownload}
              className="hover:opacity-80 transition-opacity self-start"
            >
              <img
                src={playstore}
                alt="Google Play Store"
                className="w-24 sm:w-28 md:w-32 h-auto object-contain cursor-pointer"
              />
            </button>
            <button
              onClick={handleDownloadClick}
              className="hover:opacity-80 transition-opacity self-start"
            >
              <img
                src={appstore}
                alt="Apple App Store"
                className="w-24 sm:w-28 md:w-32 h-auto object-contain cursor-pointer"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Awareness & Alerts Section */}
      <section className="py-12 sm:py-16 px-4 bg-[#f5f8ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-[0.3em] text-[#12316d] uppercase">
              Stay Alert • Stay Prepared
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#12316d] mt-3">
              Awareness Hub for Every Aspirant
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Defence headlines change fast. Our daily awareness feed keeps you informed, disciplined, and always one step ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-[#e1e8ff] p-6 hover:-translate-y-1 transition-all duration-300">
              <div className="text-sm font-semibold text-[#1a4a8f] tracking-wide uppercase mb-3">
                Mission Brief
              </div>
              <h3 className="text-xl font-bold text-[#12316d] mb-3">Zero-Day Notification Plan</h3>
              <p className="text-gray-600 mb-4">
                Get instant alerts for exam dates, admit cards, and syllabus tweaks the moment they drop.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Personalised push + SMS reminders</li>
                <li>• Smart calendar auto-sync</li>
                <li>• Crisis-mode flash alerts when schedules change</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-[#12316d] to-[#1a4a8f] rounded-2xl shadow-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_0%,_transparent_60%)] pointer-events-none"></div>
              <div className="relative">
                <div className="text-sm font-semibold tracking-[0.3em] uppercase mb-3">Confidence Meter</div>
                <h3 className="text-2xl font-bold mb-4">Your Daily 5-Minute Awareness Drill</h3>
                <p className="text-sm sm:text-base text-white/90 mb-4">
                  Read, reflect, respond. Curated defence facts, national security updates, and motivational snippets shaped for morning and night routines.
                </p>
                <div className="bg-white/15 rounded-xl p-4 space-y-3 text-sm sm:text-base">
                  <div className="flex items-center justify-between">
                    <span>Exam Risk Tracker</span>
                    <span className="font-semibold">98% Safe</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <p className="text-white/90">
                    "I open the app every morning at 5 AM. It's my battle brief." – Captain Sharma
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-[#e1e8ff] p-6 flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-[#1a4a8f] tracking-wide uppercase mb-3">Reality Check</div>
                <h3 className="text-xl font-bold text-[#12316d] mb-3">Common Pitfalls We Help You Avoid</h3>
                <p className="text-gray-600 mb-4">
                  We studied 10,000+ drop-off journeys to warn you before distractions strike.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• "I'll start tomorrow" → Progress shield nudges you daily.</li>
                  <li>• "No mentor to guide me" → 24x7 helpdesk + live rooms.</li>
                  <li>• "Lost motivation" → Weekly resilience challenges.</li>
                </ul>
              </div>
              <button
                onClick={handleDownloadClick}
                className="mt-6 bg-gradient-to-r from-[#12316d] to-[#1a4a8f] text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:from-[#1a4a8f] hover:to-[#12316d] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Awareness Feed
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center gap-4 bg-white rounded-2xl shadow-lg border border-[#d8e2ff] p-6">
            <div className="flex-1">
              <h4 className="text-lg sm:text-xl font-bold text-[#12316d]">
                Every download funds our "Cadets Without Borders" initiative.
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                We donate 2 hours of mentorship to rural defence aspirants for every 100 downloads. Your install can empower someone who studies under a single bulb.
              </p>
            </div>
            <button
              onClick={handlePlayStoreDownload}
              className="w-full md:w-auto bg-[#12316d] text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#1a4a8f] transition-all duration-300 shadow-lg"
            >
              Download & Impact Lives
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section with Image and About Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side - Image and Text */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={abt}
                  alt="Hero Image"
                  className="w-full h-[300px] sm:h-[350px] md:h-[420px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Side - About Us Content */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 px-2 sm:px-6">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12316d] leading-tight">
                  About Us
                </h2>
                <div className="w-20 h-1 bg-[#12316d] rounded-full"></div>
              </div>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We are a leading company dedicated to providing innovative
                solutions and exceptional services. Our team of experts is
                committed to delivering excellence in everything we do.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                With years of experience and a passion for innovation, we help
                our clients achieve their goals through cutting-edge technology
                and personalized approaches.
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

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-[#12316d] to-[#1a4a8f] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
              Join Thousands of Success Stories
            </h2>
            <div className="w-20 h-1 bg-white rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                50K+
              </div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                10K+
              </div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">
                Success Stories
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">
                Scholarships
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                98%
              </div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#12316d] mb-3 sm:mb-4">
              Our Features
            </h2>
            <div className="w-20 h-1 bg-[#12316d] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#12316d] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#12316d] mb-3 sm:mb-4">
                  Expert Guidance
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Get personalized guidance from experienced professionals to
                  help you navigate your defence career path.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#12316d] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#12316d] mb-3 sm:mb-4">
                  Scholarship Support
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Access comprehensive scholarship opportunities and get
                  assistance with applications and requirements.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#12316d] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#12316d] mb-3 sm:mb-4">
                  Success Tracking
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Track your progress and achievements with our comprehensive
                  monitoring and reporting system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#12316d] mb-3 sm:mb-4">
              Why Choose Our App?
            </h2>
            <div className="w-20 h-1 bg-[#12316d] rounded-full mx-auto"></div>
            <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto px-2">
              Discover the premium benefits that make us the #1 choice for
              defence aspirants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#12316d] mb-3">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Your data is protected with enterprise-grade security measures.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#12316d] mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Experience blazing-fast performance with optimized algorithms.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#12316d] mb-3">
                Premium Content
              </h3>
              <p className="text-gray-600">
                Access exclusive study materials and expert-curated resources.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#12316d] mb-3">
                Expert Community
              </h3>
              <p className="text-gray-600">
                Connect with mentors and peers in our thriving community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#12316d] mb-3">
                Real-time Analytics
              </h3>
              <p className="text-gray-600">
                Track your progress with detailed insights and analytics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-100">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#12316d] mb-3">
                Cost Effective
              </h3>
              <p className="text-gray-600">
                Get premium features at an affordable price point.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={handleDownloadClick}
              className="bg-gradient-to-r from-[#12316d] to-[#1a4a8f] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:from-[#1a4a8f] hover:to-[#12316d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Download Now & Get Premium Access
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#12316d] mb-3 sm:mb-4">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-[#12316d] rounded-full mx-auto"></div>
            <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto px-2">
              Get started in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    1
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#12316d] mb-3 sm:mb-4">
                Download the App
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                Get our app from Google Play Store or Apple App Store. It's free
                to download!
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    2
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#12316d] mb-3 sm:mb-4">
                Create Your Profile
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                Sign up and create your personalized profile. Tell us about your
                goals and aspirations.
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    3
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#12316d] mb-3 sm:mb-4">
                Start Your Journey
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                Access premium features, get expert guidance, and start
                achieving your defence career goals!
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={handleDownloadClick}
              className="bg-gradient-to-r from-[#12316d] to-[#1a4a8f] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:from-[#1a4a8f] hover:to-[#12316d] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#12316d] mb-3 sm:mb-4">
              What Our Users Say
            </h2>
            <div className="w-20 h-1 bg-[#12316d] rounded-full mx-auto"></div>
            <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
              Real stories from real users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-xl mr-3 sm:mr-4">
                  RK
                </div>
                <div>
                  <h4 className="font-bold text-[#12316d] text-sm sm:text-base">
                    Rajesh Kumar
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    NDA Aspirant
                  </p>
                </div>
              </div>
              <div className="flex mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 italic">
                "This app changed my life! The expert guidance and study
                materials helped me clear my NDA exam. Highly recommended!"
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-xl mr-3 sm:mr-4">
                  PS
                </div>
                <div>
                  <h4 className="font-bold text-[#12316d] text-sm sm:text-base">
                    Priya Sharma
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Scholarship Winner
                  </p>
                </div>
              </div>
              <div className="flex mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 italic">
                "I found amazing scholarship opportunities through this app. The
                support team is incredible and always ready to help!"
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-purple-100">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-xl mr-3 sm:mr-4">
                  AM
                </div>
                <div>
                  <h4 className="font-bold text-[#12316d] text-sm sm:text-base">
                    Amit Mehta
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Defence Officer
                  </p>
                </div>
              </div>
              <div className="flex mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 italic">
                "The progress tracking feature is amazing! It helped me stay
                motivated and achieve my goals. Best investment I've made!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-[#12316d] via-[#1a4a8f] to-[#12316d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Ready to Transform Your Defence Career?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            Join thousands of successful aspirants. Download now and unlock
            premium benefits!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6">
            <button
              onClick={handlePlayStoreDownload}
              className="bg-white text-[#12316d] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span>Download for Android</span>
            </button>
            <button
              onClick={handleDownloadClick}
              className="bg-white text-[#12316d] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span>Download for iOS</span>
            </button>
          </div>
          <p className="text-xs sm:text-sm opacity-75 px-2">
            ✨ Limited Time: First 1000 users get premium access absolutely
            FREE!
          </p>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-[#12316d] min-h-[250px] sm:min-h-[300px] flex items-center justify-center overflow-visible">
        <div className="max-w-7xl mx-auto w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left text-white px-2 sm:px-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                JOIN OUR DEFENCE COMMUNITY
              </h2>
              <div className="w-16 h-1 bg-white rounded-full mx-auto lg:mx-0 mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg opacity-90">
                Be part of something bigger. Join thousands of defence
                professionals.
              </p>
            </div>

            {/* Right Side - Image extending outside */}
            <div className="relative flex justify-center lg:justify-center">
              <img
                src={tagline}
                alt="Defence Community"
                className="relative -top-8 sm:-top-12 h-[250px] sm:h-[300px] md:h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top Section - Social Media & App Downloads */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="text-xs sm:text-sm">Follow us on</span>
              <div className="flex space-x-2 sm:space-x-3">
                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                onClick={handleDownloadClick}
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src={appstore}
                  alt="Download on the App Store"
                  className="h-8 sm:h-10 w-auto cursor-pointer"
                />
              </button>
              <button
                onClick={handlePlayStoreDownload}
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src={playstore}
                  alt="GET IT ON Google Play"
                  className="h-8 sm:h-10 w-auto cursor-pointer"
                />
              </button>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-600 mb-4 sm:mb-6"></div>

          {/* Bottom Section - Legal Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 text-xs sm:text-sm">
            <a href="#" className="hover:opacity-70 transition-opacity">
              Terms of Service
            </a>
            <Link
              to="/privacy-policy"
              className="hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </Link>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Parent's Guide
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Safe and Fair Play Policy
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Accessibility Statement
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Other Legal Docs
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Media Center
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Our Domains
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Manage Cookies
            </a>
          </div>
        </div>
      </footer>

      {/* Download Popup */}
      <DownloadPopup
        isOpen={showDownloadPopup}
        onClose={() => setShowDownloadPopup(false)}
        onPlayStoreDownload={handlePlayStoreDownload}
      />
    </div>
  );
}

export default Home;
