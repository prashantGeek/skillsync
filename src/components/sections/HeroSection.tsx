import Button from '../ui/Button';

export default function HeroSection() {
 return (
 <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 {/* Left Content */}
 <div className="space-y-8">
 <div className="space-y-4">            
  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Upskill your team with
              <br />
              <span className="text-amber-300">expert-led courses</span>
            </h1>
 <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
 Give your workforce the skills they need to stay competitive. 
 Access 25,000+ courses taught by real-world experts.
 </p>
 </div>          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-6 py-3 text-lg bg-amber-400 hover:bg-amber-500 text-black hover:text-black font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400">
              Start Free Trial
            </Button>
            <Button className="px-6 py-3 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white">
              Request Demo
            </Button>
          </div>

 {/* Trust Indicators */}
 <div className="pt-8">
 <p className="text-blue-200 text-sm mb-4">Trusted by 15,000+ companies worldwide</p>
 <div className="flex items-center space-x-8 opacity-75">
 <div className="text-white font-semibold">Microsoft</div>
 <div className="text-white font-semibold">Apple</div>
 <div className="text-white font-semibold">Google</div>
 <div className="text-white font-semibold">Netflix</div>
 <div className="text-white font-semibold">Amazon</div>
 </div>
 </div>
 </div>

 {/* Right Content - Hero Image/Video */}
 <div className="relative">
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
 <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
 <div className="text-center space-y-4">
 <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
 <path d="M8 5v14l11-7z"/>
 </svg>
 </div>
 <p className="text-white/80">Watch Demo</p>
 </div>
 </div>
 </div>
 
 {/* Floating Stats */}
 <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-xl">
 <div className="flex items-center space-x-3">
 <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
 </svg>
 </div>
 <div>
 <div className="text-gray-900 font-semibold">98% Success Rate</div>
 <div className="text-gray-600 text-sm">Course Completion</div>
 </div>
 </div>
 </div>

 <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-xl">
 <div className="flex items-center space-x-3">
 <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
 </svg>
 </div>
 <div>
 <div className="text-gray-900 font-semibold">50M+ Students</div>
 <div className="text-gray-600 text-sm">Learning Worldwide</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
