'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function TeachHeroSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Instructor signup:', email);
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center bg-emerald-100 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-600 font-medium">🚀 Join 50,000+ Instructors</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Share Your Knowledge,
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Build Your Empire</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Turn your expertise into a thriving online business. Create engaging courses, 
              reach millions of learners worldwide, and earn passive income doing what you love.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "💰", text: "Earn up to $10K+/month" },
                { icon: "🌍", text: "Global audience of 5M+ learners" },
                { icon: "🎥", text: "Easy-to-use course builder" },
                { icon: "📊", text: "Detailed analytics & insights" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl mr-3">{benefit.icon}</span>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Email Signup */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
              <Button type="submit" variant="primary" size="lg" className="whitespace-nowrap">
                Start Teaching Today
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-3">
              Free to join • No upfront costs • Keep 85% of your earnings
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Dashboard Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="font-semibold text-gray-900">Instructor Dashboard</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-emerald-50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">$8,426</div>
                    <div className="text-xs text-gray-600">This Month</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">1,234</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">4.8★</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>

                {/* Course List */}
                <div className="space-y-3">
                  {[
                    { title: "React Masterclass", students: 856, rating: 4.9 },
                    { title: "JavaScript Fundamentals", students: 432, rating: 4.7 },
                    { title: "UI/UX Design Basics", students: 289, rating: 4.8 }
                  ].map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{course.title}</div>
                        <div className="text-xs text-gray-600">{course.students} students</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-emerald-600">★ {course.rating}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-emerald-500 text-white p-4 rounded-xl shadow-lg transform rotate-12">
              <div className="text-lg font-bold">+$2,340</div>
              <div className="text-xs opacity-90">This week</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-4 rounded-xl shadow-lg transform -rotate-12">
              <div className="text-lg font-bold">📈 +127</div>
              <div className="text-xs opacity-90">New students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
