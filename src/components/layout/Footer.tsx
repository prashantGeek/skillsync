import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Company Info Enhanced */}
            <div className="col-span-1 lg:col-span-4">
              <div className="mb-8">
                <Link href="/" className="inline-flex items-center group">
                  <div className="mr-3 group-hover:scale-105 transition-transform duration-200">
                    <Image
                      src="/brain-icon.svg"
                      alt="SkillSync Brain Icon"
                      width={40}
                      height={40}
                      className="h-10 w-10"
                    />
                  </div>
                  <span className="text-2xl font-bold text-white">SkillSync</span>
                </Link>
              </div>
              
              <p className="text-gray-300 mb-8 max-w-sm leading-relaxed">
                Empowering professionals and organizations with world-class online learning experiences. 
                Build skills that matter for your career and business growth.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
              
              {/* Enhanced Social Links */}
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 border border-gray-600 transition-all duration-200 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 border border-gray-600 transition-all duration-200 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 border border-gray-600 transition-all duration-200 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.956 1.404-5.956s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 border border-gray-600 transition-all duration-200 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="col-span-1 lg:col-span-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
                {/* Company */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-white relative">
                    Company
                    <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/about" className="group block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 hover:translate-x-1">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="group block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 hover:translate-x-1">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Careers</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/press" className="group block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 hover:translate-x-1">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Press</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="group block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 hover:translate-x-1">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Blog</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Learning */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-white relative">
                    Learning
                    <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/courses" className="group block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 hover:translate-x-1">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">All Courses</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/business" className="group block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 hover:translate-x-1">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Business</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/instructors" className="group block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 hover:translate-x-1">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Become Instructor</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mobile" className="group block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 hover:translate-x-1">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Mobile App</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Support & Contact */}
            <div className="col-span-1 lg:col-span-4">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 h-full">
                <h3 className="text-lg font-semibold mb-6 text-white relative">
                  Support & Contact
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.3.16.67.16.97 0L19 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email us</p>
                      <p className="text-white font-medium">support@skillsync.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Call us</p>
                      <p className="text-white font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block py-2">
                    Help Center
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block py-2">
                    Contact Us
                  </Link>
                  <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block py-2">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block py-2">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 SkillSync. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Secure Platform
                </span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  SOC 2 Compliant
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sitemap
                </Link>
              </div>
              
              {/* Language Selector */}
              <div className="flex items-center space-x-2 text-sm">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <select className="bg-transparent text-gray-400 text-sm border-none focus:outline-none cursor-pointer">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
