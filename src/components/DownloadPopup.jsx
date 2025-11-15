import playstore from '../assets/img/google-play.png'
import appstore from '../assets/img/app-store.png'

function DownloadPopup({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 opacity-100"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      {/* Modal */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 my-8 max-h-[85vh] overflow-y-auto transform transition-all duration-300 scale-100 border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-gray-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Premium Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#12316d] to-[#1a4a8f] rounded-full mb-4 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#12316d] mb-2">Download Now!</h2>
            <p className="text-gray-600">Get exclusive premium benefits</p>
          </div>
    {/* Download Buttons */}
    <div className="space-y-3 mb-6">
            <a 
              href="#" 
              className="block w-full hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault()
                // Add your Google Play Store link here
                window.open('#', '_blank')
              }}
            >
              <img src={playstore} alt="Get it on Google Play" className="w-full h-auto max-h-14 object-contain" />
            </a>
            {/* <a 
              href="#" 
              className="block w-full hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault()
                // Add your App Store link here
                window.open('#', '_blank')
              }}
            >
              <img src={appstore} alt="Download on the App Store" className="w-full h-auto max-h-14 object-contain" />
            </a> */}
          </div>
          {/* Benefits List */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#12316d] rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-0.5">Unlimited Access</h3>
                <p className="text-sm text-gray-600">Access all premium features and content</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#12316d] rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-0.5">Expert Guidance</h3>
                <p className="text-sm text-gray-600">Get personalized mentorship from industry experts</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#12316d] rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-0.5">Scholarship Opportunities</h3>
                <p className="text-sm text-gray-600">Exclusive access to premium scholarship programs</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#12316d] rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-0.5">Progress Tracking</h3>
                <p className="text-sm text-gray-600">Advanced analytics and performance insights</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#12316d] rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-0.5">24/7 Support</h3>
                <p className="text-sm text-gray-600">Round-the-clock assistance whenever you need</p>
              </div>
            </div>
          </div>

      

          {/* Special Offer Badge */}
          <div className="p-3 bg-gradient-to-r from-[#12316d]/5 to-[#1a4a8f]/5 rounded-lg border border-[#12316d]/20 text-center">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-[#12316d]">Limited Time:</span> First 1000 users get premium access free!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadPopup

