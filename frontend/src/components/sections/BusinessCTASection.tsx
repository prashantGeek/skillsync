'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

export default function BusinessCTASection() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [employees, setEmployees] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request:', { email, company, employees });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"> Workforce?</span>
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join thousands of companies that trust SkillSync to accelerate their team&apos;s growth. 
              Start your journey to a more skilled, engaged, and productive workforce today.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                { icon: "⚡", text: "Deploy in under 24 hours" },
                { icon: "📈", text: "See measurable results in 30 days" },
                { icon: "🛡️", text: "Enterprise-grade security included" },
                { icon: "🎯", text: "Dedicated success manager" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl mr-3">{benefit.icon}</span>
                  <span className="text-lg text-purple-100">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <span className="ml-4 text-purple-100">Join 15,000+ companies</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-purple-100">4.9/5 from 2,000+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Form */}
          <div>
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Your Personalized Demo
                  </h3>
                  <p className="text-gray-600">
                    See how SkillSync can work for your organization
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Acme Corp"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees
                    </label>
                    <select
                      id="employees"
                      value={employees}
                      onChange={(e) => setEmployees(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-1000">201-1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-lg py-4"
                  >
                    Get Your Free Demo
                  </Button>

                  <div className="text-center text-sm text-gray-500">
                    <p>
                      No credit card required • 30-day free trial included
                    </p>
                  </div>
                </form>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-1">🔒</span>
                      SOC 2 Compliant
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-1">🛡️</span>
                      GDPR Ready
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-500 mr-1">⚡</span>
                      99.9% Uptime
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative CTA */}
            <div className="mt-6 text-center">
              <p className="text-purple-200 mb-3">
                Not ready for a demo? Start with a free trial
              </p>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-900">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-purple-200">Learners Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-purple-200">Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3.2x</div>
              <div className="text-purple-200">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
