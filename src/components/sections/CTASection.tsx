import Button from '../ui/Button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-white/5 to-transparent rounded-full animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slide-up">
          <div className="inline-flex items-center glass rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="text-white font-medium text-sm">🚀 Ready to Get Started?</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Team?
          </h2>
          
          <p className="text-xl lg:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies that trust SkillSync to upskill their workforce. 
            Start your free trial today and see the difference quality learning makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Link href="/trial">
              <Button 
                variant="glass" 
                size="xl"
                glow={true}
                className="shadow-2xl shadow-white/20 hover:shadow-white/30"
              >
                Start Free 30-Day Trial
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-purple-700 glass backdrop-blur-md"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Enhanced Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 glass border border-white/30 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-xl transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No Credit Card Required</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Start your trial instantly without any payment information</p>
            </div>
            
            <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 glass border border-white/30 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-xl transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Get help whenever you need it from our expert support team</p>
            </div>
            
            <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 glass border border-white/30 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-xl transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Bank-level security with SOC 2 compliance and SSO integration</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">👥</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🏢</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold">
                    15K+
                  </div>
                </div>
                <span className="text-white/90 font-medium">Companies Trust Us</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">⭐</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold">
                    4.9
                  </div>
                </div>
                <span className="text-white/90 font-medium">Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
