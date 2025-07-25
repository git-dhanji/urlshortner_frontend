import { useState, useEffect } from "react";
import { Badge, Logo } from "./Index";
import { Link } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import AvatarLogo from "./logos/AvatarLogo";
import { userAllUrls } from "../apis/user.apis";

export default function Navbar() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicAnalyticsLinks, SetDynamicAnalyticsLinks] = useState('')
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const loadUrl = async () => {
      const data = await userAllUrls();
      console.log('all url', data)
      if (data) {
        SetDynamicAnalyticsLinks(data[0]?.short_url)
      }
    }
    loadUrl()
  }, [])


  const navLinks = [
    { name: "Home", to: "#home", icon: "🏠" },
    { name: "Features", to: "#features", icon: "⚡" },
    { name: "Pricing", to: "#pricing", icon: "💎" },
    { name: "Devtools", to: "#devtools", icon: "ℹ️" },
    { name: "Contact", to: "#contact", icon: "📧" },
  ];

  const authenticatedLinks = [
    { name: "Analytics", to: `user/analytics/${dynamicAnalyticsLinks}`, icon: "📈", onclick: "" },
    { name: "Dashboard", to: "user/dashboard", icon: "🔗" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className={`transition-all duration-300 ${isScrolled
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg'
        : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/50'
        }`}>
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <div className="transform group-hover:scale-105 transition-transform duration-200">
                <Logo />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 ">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="group relative px-4 py-2 rounded-xl text-gray-300 hover:text-white font-medium transition-all duration-300 hover:bg-slate-800/50"
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    {/* <span>{link.name}</span> */}
                    {link.name}
                  </span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
              ))}



              {/* Authenticated Links */}
              {isAuthenticated && (
                <div className="ml-4  flex items-center  border-l border-slate-700">
                  {authenticatedLinks.map((link) => (
                    dynamicAnalyticsLinks ? (
                      <Link
                        key={link.name}
                        to={link.to}
                        className="group relative px-4 py-2 rounded-xl text-gray-300 hover:text-white font-medium transition-all duration-300 hover:bg-slate-800/50 ml-1"
                      >
                        <span className="flex items-center space-x-2">
                          <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                            {link.icon}
                          </span>
                          <span>{link.name}</span>
                        </span>
                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                      </Link>
                    ) : null
                  ))}
                </div>
              )}
            </div>

            {/* Right side: Theme toggle & Auth */}
            <div className="flex items-center space-x-4">
              {/* Authentication */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">

                  <div className="relative group">
                    <AvatarLogo
                      url={user?.avatar}
                      onClick={() => navigate({ to: '/user/dashboard' })}
                    />
                    {/* Dropdown indicator */}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
                  </div>
                </div>
              ) : (
                <div className="hidden sm:flex items-center space-x-3">
                  <Link

                    to="/auth"
                    className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="group relative px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="relative z-10">Sign-up</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <div className="lg:hidden mobile-menu-container">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                      }`}></span>
                    <span className={`block w-5 h-0.5 bg-gray-300 mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                      }`}></span>
                    <span className={`block w-5 h-0.5 bg-gray-300 mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                      }`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden mobile-menu-container transition-all duration-300 ${isMobileMenuOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="px-4 py-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.name}</span>
                  <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Authenticated Mobile Links */}
            {isAuthenticated && (
              <div className="border-t border-slate-700/50 pt-6 mb-6">
                <div className="space-y-2">
                  {authenticatedLinks.map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 transform hover:translate-x-2"
                      style={{ animationDelay: `${(navLinks.length + index) * 0.1}s` }}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                        {link.icon}
                      </span>
                      <span className="font-medium">{link.name}</span>
                      <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Auth Section */}
            {!isAuthenticated && (
              <div className="border-t border-slate-700/50 pt-6">
                <div className="space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center text-gray-300 hover:text-white font-medium border border-slate-700/50 hover:border-slate-600/50 rounded-xl transition-all duration-300 hover:bg-slate-800/50"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            )}

            {/* Mobile User Info */}
            {isAuthenticated && (
              <div className="border-t border-slate-700/50 pt-6">
                <div className="flex items-center space-x-3 px-4 py-3 bg-slate-800/30 rounded-xl">
                  <Badge
                    url={user?.avatar}
                    className="ring-2 ring-slate-700"
                  />
                  <div>
                    <p className="text-white font-medium">{user?.displayName}</p>
                    <p className="text-gray-400 text-sm">Premium Member</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      // Add logout functionality here
                    }}
                    className="ml-auto p-2 text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Mobile Footer */}
            <div className="border-t border-slate-700/50 pt-6 mt-6">
              <div className="flex items-center justify-center space-x-6">
                <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                © 2024 QuickLink. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
