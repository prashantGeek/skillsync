'use client';

import Button from '@/components/ui/Button';
import { useState } from 'react';

export default function BusinessHeroSection() {
  const [email, setEmail] = useState('');

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo requested for:', email);
    // Handle demo request logic here
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🚀 Trusted by 15,000+ Companies
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                {" "}Workforce
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed">
              Upskill your entire organization with our comprehensive learning platform. 
              Drive innovation, boost productivity, and stay ahead of the competition.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">25,000+</div>
                <div className="text-purple-200 text-sm">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">95%</div>
                <div className="text-purple-200 text-sm">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50%</div>
                <div className="text-purple-200 text-sm">Faster Onboarding</div>
              </div>
            </div>

            {/* CTA Form */}
            <form onSubmit={handleDemoRequest} className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-xl bg-white border-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300"
                required
              />
              <Button 
                type="submit"
                size="lg"
                glow={true}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold shadow-xl hover:shadow-2xl border-2 border-emerald-400 hover:border-emerald-300"
              >
                Get Free Demo
              </Button>
            </form>

            <p className="text-purple-200 text-sm">
              No credit card required • Setup in minutes • 14-day free trial
            </p>

            {/* Trusted by logos */}
            <div className="mt-12">
              <p className="text-purple-200 text-sm mb-4">Trusted by industry leaders:</p>
              <div className="flex flex-wrap items-center gap-8 opacity-60">
                <div className="bg-white/10 px-4 py-2 rounded text-white font-semibold">Microsoft</div>
                <div className="bg-white/10 px-4 py-2 rounded text-white font-semibold">Google</div>
                <div className="bg-white/10 px-4 py-2 rounded text-white font-semibold">Amazon</div>
                <div className="bg-white/10 px-4 py-2 rounded text-white font-semibold">Tesla</div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Learning Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        RS
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">React Fundamentals</div>
                        <div className="text-sm text-gray-600">85% Complete</div>
                      </div>
                    </div>
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div className="w-14 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        DS
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Data Science</div>
                        <div className="text-sm text-gray-600">62% Complete</div>
                      </div>
                    </div>
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div className="w-10 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                        PM
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Project Management</div>
                        <div className="text-sm text-gray-600">100% Complete</div>
                      </div>
                    </div>
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1,250</div>
                    <div className="text-sm text-gray-600">Active Learners</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">94%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3.2x</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
