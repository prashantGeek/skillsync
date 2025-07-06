'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

const trialOptions = [
  {
    id: 'learner',
    title: 'Individual Learner',
    subtitle: 'Perfect for personal skill development',
    trialLength: '7 days',
    originalPrice: '$29/month',
    description: 'Access thousands of premium courses and advance your career',
    features: [
      'Access to 25,000+ premium courses',
      'Offline download for mobile learning',
      'Certificates of completion',
      'Progress tracking and analytics',
      'Mobile app access',
      'Community forums access',
      'No ads interruptions',
      'HD video quality'
    ],
    highlights: [
      { icon: '📚', text: '25K+ Courses' },
      { icon: '📱', text: 'Mobile Learning' },
      { icon: '🏆', text: 'Certificates' },
      { icon: '📊', text: 'Progress Tracking' }
    ],
    gradient: 'from-blue-500 to-purple-600',
    popular: false
  },
  {
    id: 'instructor',
    title: 'Course Instructor',
    subtitle: 'Start teaching and earning from your expertise',
    trialLength: '30 days',
    originalPrice: 'Keep 85% revenue',
    description: 'Create and sell courses to millions of learners worldwide',
    features: [
      'Unlimited course creation',
      'Professional video hosting',
      'Built-in marketing tools',
      'Student analytics dashboard',
      'Direct student messaging',
      'Revenue tracking',
      'Promotional tools & coupons',
      'Mobile instructor app'
    ],
    highlights: [
      { icon: '🎥', text: 'Video Tools' },
      { icon: '💰', text: '85% Revenue' },
      { icon: '📈', text: 'Analytics' },
      { icon: '🌍', text: 'Global Reach' }
    ],
    gradient: 'from-emerald-500 to-blue-600',
    popular: true
  },
  {
    id: 'business',
    title: 'Business Teams',
    subtitle: 'Transform your workforce with enterprise learning',
    trialLength: '14 days',
    originalPrice: '$99/month per 25 users',
    description: 'Comprehensive learning solution for teams and organizations',
    features: [
      'Team management dashboard',
      'Custom learning paths',
      'Advanced reporting & analytics',
      'SSO integration',
      'Custom branding',
      'Priority customer support',
      'Compliance tracking',
      'Bulk user management'
    ],
    highlights: [
      { icon: '👥', text: 'Team Dashboard' },
      { icon: '📊', text: 'Advanced Analytics' },
      { icon: '🔒', text: 'Enterprise Security' },
      { icon: '🎨', text: 'Custom Branding' }
    ],
    gradient: 'from-purple-600 to-pink-600',
    popular: false
  }
];

const testimonials = [
  {
    quote: "The free trial convinced me immediately. The course quality is exceptional and the learning experience is seamless.",
    author: "Sarah Johnson",
    role: "Software Developer",
    company: "TechCorp",
    trialType: "learner",
    image: "https://images.unsplash.com/photo-1494790108755-2616b2e15984?w=60"
  },
  {
    quote: "I started earning from my first course within the trial period. The platform makes teaching incredibly easy.",
    author: "Michael Chen",
    role: "Marketing Expert",
    company: "Freelance Instructor",
    trialType: "instructor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60"
  },
  {
    quote: "Our team's productivity increased 40% after implementing SkillSync. The trial showed us the potential immediately.",
    author: "Emily Rodriguez",
    role: "HR Director",
    company: "GlobalTech Inc.",
    trialType: "business",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60"
  }
];

const faqs = [
  {
    question: "What happens when my free trial ends?",
    answer: "Your trial will automatically expire and you won't be charged. You can choose to upgrade to a paid plan to continue accessing premium features."
  },
  {
    question: "Do I need to provide credit card information?",
    answer: "No credit card required! You can start your free trial immediately with just your email address."
  },
  {
    question: "Can I cancel my trial anytime?",
    answer: "Yes, you can cancel your trial at any time through your account settings or by contacting our support team."
  },
  {
    question: "What's included in each trial?",
    answer: "Each trial includes full access to all features of the respective plan. You'll experience the complete platform without any limitations."
  },
  {
    question: "Can I switch between trial types?",
    answer: "Yes, you can contact our support team to switch your trial type if you started with the wrong option."
  },
  {
    question: "Is there a limit to how many courses I can access?",
    answer: "During your trial, you have unlimited access to all features and content available in your chosen plan."
  }
];

export default function StartTrialPage() {
  const [selectedTrial, setSelectedTrial] = useState<string | null>(null);
  const [showFAQ, setShowFAQ] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-600 font-medium">🎉 No Credit Card Required</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Start Your
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Free Trial</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your learning journey. All trials include full access 
                to premium features with no commitments or hidden fees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No Credit Card Required
                </div>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cancel Anytime
                </div>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full Feature Access
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Options */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 py-4">
              {trialOptions.map((option, index) => (
                <div
                  key={option.id}
                  className="cursor-pointer"
                  onClick={() => setSelectedTrial(option.id)}
                >
                  <Card
                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl h-full ${
                      option.popular 
                        ? 'border-2 border-emerald-500 lg:scale-[1.02] shadow-lg transform origin-center' 
                        : 'border border-gray-200 hover:border-purple-300'
                    } ${
                      selectedTrial === option.id ? 'ring-2 ring-purple-500' : ''
                    }`}
                  >
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${option.gradient} p-6 text-white`}>
                    <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                    <p className="opacity-90 mb-4">{option.subtitle}</p>
                    
                    <div className="bg-white/20 rounded-lg p-3 mb-4">
                      <div className="text-3xl font-bold">{option.trialLength}</div>
                      <div className="text-sm opacity-90">FREE TRIAL</div>
                    </div>

                    <div className="text-sm opacity-75">
                      Then {option.originalPrice}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Description */}
                    <p className="text-gray-600 mb-6">{option.description}</p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {option.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center">
                          <span className="text-lg mr-2">{highlight.icon}</span>
                          <span className="text-sm font-medium text-gray-700">{highlight.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {option.features.slice(0, 4).map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                        {option.features.length > 4 && (
                          <li className="text-sm text-gray-500 ml-6">
                            +{option.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={option.popular ? 'primary' : 'outline'}
                      className="w-full mb-3"
                      onClick={() => alert(`Starting ${option.trialLength} free trial for ${option.title}!`)}
                    >
                      Start {option.trialLength} Free Trial
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      No credit card required
                    </p>
                  </CardContent>
                </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join 50,000+ Users Who Started With a Free Trial
              </h2>
              <p className="text-xl text-gray-600">
                See what our trial users are saying about their experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our free trials
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setShowFAQ(showFAQ === faq.question ? null : faq.question)}
                      className="w-full p-6 text-left flex items-center justify-between"
                    >
                      <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          showFAQ === faq.question ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {showFAQ === faq.question && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Choose your trial and start learning, teaching, or training your team today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-50 border-white"
                onClick={() => alert('Starting 7-day learning trial!')}
              >
                Start Learning Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
                onClick={() => alert('Starting 30-day teaching trial!')}
              >
                Start Teaching Trial
              </Button>
            </div>

            <p className="text-purple-200 text-sm mt-6">
              Questions? <Link href="/contact" className="text-white hover:underline">Contact our support team</Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
