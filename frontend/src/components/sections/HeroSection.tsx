import Button from "../ui/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-700 font-medium text-sm">🚀 Join 50M+ learners worldwide</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Upskill your team with
                <br />
                <span className="gradient-text">expert-led courses</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Give your workforce the skills they need to stay competitive.
                Access 25,000+ courses taught by real-world experts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/trial">
                <Button 
                  variant="gradient" 
                  size="lg" 
                  glow={true}
                  className="shadow-xl shadow-purple-500/25"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="glass backdrop-blur-sm"
              >
                Request Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <p className="text-gray-500 text-sm mb-4">
                Trusted by 15,000+ companies worldwide
              </p>
              <div className="flex items-center space-x-8 opacity-75">
                <div className="text-gray-700 font-semibold hover:text-purple-600 transition-colors cursor-pointer">Microsoft</div>
                <div className="text-gray-700 font-semibold hover:text-purple-600 transition-colors cursor-pointer">Apple</div>
                <div className="text-gray-700 font-semibold hover:text-purple-600 transition-colors cursor-pointer">Google</div>
                <div className="text-gray-700 font-semibold hover:text-purple-600 transition-colors cursor-pointer">Netflix</div>
                <div className="text-gray-700 font-semibold hover:text-purple-600 transition-colors cursor-pointer">Amazon</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Video */}
          <div className="relative animate-scale-in" style={{animationDelay: '0.5s'}}>
            <div className="glass bg-white/60 border border-white/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-2xl flex items-center justify-center border border-purple-200/50 shadow-inner hover:shadow-lg transition-all duration-300">
                <div className="text-center space-y-4 group cursor-pointer">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="gradient-text font-semibold group-hover:text-purple-700 transition-colors">Watch Demo</p>
                </div>
              </div>
            </div>

            {/* Floating Stats - Enhanced */}
            <div className="absolute -bottom-6 -left-6 glass bg-white/80 border border-white/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl animate-float hover:shadow-3xl transition-all duration-300 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">
                    98% Success Rate
                  </div>
                  <div className="text-gray-600 text-sm">Course Completion</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 glass bg-white/80 border border-white/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl animate-float hover:shadow-3xl transition-all duration-300 cursor-pointer group" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">
                    50M+ Students
                  </div>
                  <div className="text-gray-600 text-sm">
                    Learning Worldwide
                  </div>
                </div>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="absolute top-1/2 -left-8 glass bg-white/70 border border-white/30 rounded-xl p-4 shadow-xl backdrop-blur-xl animate-pulse">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Live Learning</div>
                  <div className="text-gray-600 text-xs">24/7 Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
