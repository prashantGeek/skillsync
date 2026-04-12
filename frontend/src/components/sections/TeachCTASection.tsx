'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

export default function TeachCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Instructor application:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Your Knowledge is
              <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent"> Worth More</span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Stop undervaluing your expertise. Join SkillSync and transform your knowledge 
              into a thriving online business that generates income while you sleep.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">$100M+</div>
                <div className="text-emerald-200 text-sm">Paid to Instructors</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className="text-emerald-200 text-sm">Active Instructors</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">5M+</div>
                <div className="text-emerald-200 text-sm">Global Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">4.8★</div>
                <div className="text-emerald-200 text-sm">Average Rating</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: "🚀", text: "Launch your first course in just 7 days" },
                { icon: "💰", text: "Keep up to 95% of your course revenue" },
                { icon: "🌍", text: "Reach students in 190+ countries" },
                { icon: "🎯", text: "Get dedicated marketing support" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl mr-3">{benefit.icon}</span>
                  <span className="text-lg text-emerald-100">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50"
                  alt="Success story"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Michael Rodriguez</div>
                  <div className="text-sm text-emerald-200">Marketing Expert</div>
                </div>
              </div>
              <blockquote className="text-emerald-100 italic">
                &ldquo;I went from $0 to $15K monthly revenue in just 6 months. SkillSync&apos;s platform 
                and support made all the difference.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div>
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Start Your Teaching Journey
                  </h3>
                  <p className="text-gray-600">
                    Apply to become an instructor and join our community of educators
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Expertise *
                    </label>
                    <select
                      id="expertise"
                      name="expertise"
                      value={formData.expertise}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select your expertise</option>
                      <option value="technology">Technology & Programming</option>
                      <option value="business">Business & Entrepreneurship</option>
                      <option value="design">Design & Creative Arts</option>
                      <option value="marketing">Marketing & Sales</option>
                      <option value="health">Health & Wellness</option>
                      <option value="language">Language Learning</option>
                      <option value="music">Music & Audio</option>
                      <option value="photography">Photography & Video</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Teaching/Training Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">New to teaching (0-1 years)</option>
                      <option value="intermediate">Some experience (2-5 years)</option>
                      <option value="experienced">Experienced (5+ years)</option>
                      <option value="expert">Expert educator (10+ years)</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-lg py-4"
                  >
                    Apply to Become an Instructor
                  </Button>

                  <div className="text-center text-sm text-gray-500">
                    <p>
                      Free to join • No upfront costs • Start earning immediately
                    </p>
                  </div>
                </form>

                {/* Quick Start Option */}
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    Already have teaching experience?
                  </p>
                  <Button variant="outline" className="w-full">
                    Skip Application - Start Creating
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="mt-6 text-center">
              <div className="flex justify-center items-center space-x-6 text-sm text-emerald-200">
                <div className="flex items-center">
                  <span className="text-green-400 mr-1">✓</span>
                  Instant Approval
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-1">✓</span>
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-1">✓</span>
                  Global Payments
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have Questions? We&apos;re Here to Help
            </h3>
            <p className="text-emerald-100 mb-6">
              Our instructor success team is ready to support your teaching journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-white text-emerald-600 hover:bg-gray-50">
                Schedule a Call
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Chat with Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
