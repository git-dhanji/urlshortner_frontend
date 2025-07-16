import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";

export default function CTASection({
  title = "Ready to get started?",
  subtitle = "Join thousands of users who trust QuickLink for their link management needs. Start shortening and tracking your links today.",
  primaryButtonText = "Get Started Free",
  primaryButtonLink = "/signup",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/about",
  authenticatedPrimaryText = "Go to Dashboard",
  authenticatedPrimaryLink = "/dashboard",
  authenticatedSecondaryText = "Create Custom Link",
  authenticatedSecondaryLink = "/custom",
  showBackground = true,
  className = ""
}) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <section className={`py-12 sm:py-16 lg:py-20 px-4 ${className} bg-slate-950`}>
      <div className="max-w-7xl mx-auto">
        <div className={`relative overflow-hidden rounded-3xl ${showBackground ? 'bg-gradient-to-br from-light-primary via-light-accent to-light-primary dark:from-dark-primary dark:via-dark-accent dark:to-dark-primary' : ''}`}>
          {showBackground && (
            <>
              {/* Background decorations */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
              </div>
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
            </>
          )}
          
          <div className={`relative z-10 text-center px-6 sm:px-8 lg:px-12 ${showBackground ? 'py-16 sm:py-20 lg:py-24' : 'py-8 sm:py-12 lg:py-16'}`}>
            {/* Main heading */}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-space-grotesk ${showBackground ? 'text-white' : 'text-theme-primary'}`}>
              {title}
            </h2>
            
            {/* Subtitle */}
            <p className={`text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed ${showBackground ? 'text-white/90' : 'text-theme-secondary'}`}>
              {subtitle}
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {!isAuthenticated ? (
                <>
                  <Link
                    to={primaryButtonLink}
                    className={`w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                      showBackground 
                        ? 'bg-white text-light-primary hover:bg-gray-50 focus:ring-white/50 shadow-xl hover:shadow-2xl' 
                        : 'btn-primary'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {primaryButtonText}
                  </Link>
                  
                  <Link
                    to={secondaryButtonLink}
                    className={`w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                      showBackground 
                        ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-light-primary focus:ring-white/50' 
                        : 'btn-secondary'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-2 hover:text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="hover:text-slate-800">
                      {secondaryButtonText}
                    </p>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={authenticatedPrimaryLink}
                    className={`w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                      showBackground 
                        ? 'bg-white text-light-primary hover:bg-gray-50 focus:ring-white/50 shadow-xl hover:shadow-2xl' 
                        : 'btn-primary'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    {authenticatedPrimaryText}
                  </Link>
                  
                  <Link
                    to={authenticatedSecondaryLink}
                    className={`w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                      showBackground 
                        ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-light-primary focus:ring-white/50' 
                        : 'btn-secondary'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 114 0z" />
                    </svg>
                    {authenticatedSecondaryText}
                  </Link>
                </>
              )}
            </div>
            
            {/* Additional info for non-authenticated users */}
            {!isAuthenticated && (
              <div className="mt-6 sm:mt-8">
                <p className={`text-sm ${showBackground ? 'text-white/80' : 'text-theme-secondary'}`}>
                  No credit card required • Free forever • Cancel anytime
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
