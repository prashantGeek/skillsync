'use client';

import { useState } from 'react';
import Card, { CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    commission: "15%",
    features: [
      "Unlimited free courses",
      "Basic video hosting (720p)",
      "Student messaging",
      "Basic analytics",
      "Community support",
      "Mobile app access"
    ],
    limitations: [
      "SkillSync branding on courses",
      "Limited customization",
      "Basic marketing tools"
    ],
    cta: "Start Free",
    recommended: false,
    highlight: "Most Popular for Beginners"
  },
  {
    name: "Pro Plan",
    description: "For serious instructors",
    commission: "10%",
    features: [
      "Everything in Free",
      "HD video hosting (1080p)",
      "Remove SkillSync branding",
      "Advanced analytics",
      "Marketing automation",
      "Coupon & discount tools",
      "Priority support",
      "Custom course certificates",
      "Bulk student enrollment"
    ],
    limitations: [
      "Advanced integrations limited"
    ],
    cta: "Upgrade to Pro",
    recommended: true,
    highlight: "Best Value"
  },
  {
    name: "Premium Plan",
    description: "For course creators building empires",
    commission: "5%",
    features: [
      "Everything in Pro",
      "4K video hosting",
      "White-label solution",
      "Advanced integrations",
      "Dedicated account manager",
      "Custom domain",
      "Advanced reporting",
      "API access",
      "Priority course review",
      "Affiliate program management"
    ],
    limitations: [],
    cta: "Go Premium",
    recommended: false,
    highlight: "Maximum Earnings"
  }
];

const revenueCalculator = [
  { students: 100, price: 99, free: 1485, pro: 8910, premium: 9405 },
  { students: 500, price: 99, free: 7425, pro: 44550, premium: 47025 },
  { students: 1000, price: 99, free: 14850, pro: 89100, premium: 94050 },
  { students: 2000, price: 99, free: 29700, pro: 178200, premium: 188100 }
];

const successMetrics = [
  { metric: "85%", label: "Revenue Share", description: "Keep most of your earnings" },
  { metric: "$3.2K", label: "Average Monthly", description: "Instructor earnings" },
  { metric: "24/7", label: "Global Sales", description: "Courses sell while you sleep" },
  { metric: "40+", label: "Languages", description: "Reach global audiences" }
];

export default function TeachPricingSection() {
  const [selectedStudents, setSelectedStudents] = useState(500);
  
  const currentRevenue = revenueCalculator.find(r => r.students === selectedStudents);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Teaching Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade as you grow. We only succeed when you succeed.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {successMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">{metric.metric}</div>
              <div className="font-semibold text-gray-900">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.recommended
                  ? 'border-2 border-emerald-500 scale-105 shadow-xl'
                  : 'border border-gray-200'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {plan.highlight}
                  </span>
                </div>
              )}

              <CardContent className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.commission}</span>
                    <span className="text-gray-600 ml-2">commission</span>
                  </div>

                  <div className="text-sm text-emerald-600 font-medium">
                    You keep {100 - parseInt(plan.commission)}% of revenue
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500 mb-2">Limitations:</div>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Button
                  variant={plan.recommended ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue Calculator */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Calculate Your Potential Earnings
            </h3>
            <p className="text-xl text-gray-600">
              See how much you could earn with different student counts
            </p>
          </div>

          {/* Student Count Selector */}
          <div className="max-w-md mx-auto mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Students
            </label>
            <select
              value={selectedStudents}
              onChange={(e) => setSelectedStudents(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {revenueCalculator.map((option) => (
                <option key={option.students} value={option.students}>
                  {option.students} students
                </option>
              ))}
            </select>
          </div>

          {/* Revenue Comparison */}
          {currentRevenue && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Free Plan (15% fee)</h4>
                <div className="text-3xl font-bold text-gray-600 mb-1">
                  ${currentRevenue.free.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">per month</div>
              </div>
              
              <div className="bg-emerald-500 text-white rounded-xl p-6 text-center shadow-sm relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-600 px-3 py-1 rounded-full text-xs font-medium">
                    RECOMMENDED
                  </span>
                </div>
                <h4 className="font-semibold mb-2">Pro Plan (10% fee)</h4>
                <div className="text-3xl font-bold mb-1">
                  ${currentRevenue.pro.toLocaleString()}
                </div>
                <div className="text-sm opacity-90">per month</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Premium Plan (5% fee)</h4>
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  ${currentRevenue.premium.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">per month</div>
              </div>
            </div>
          )}

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              * Based on course price of $99. Actual earnings may vary.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How do I get paid?</h4>
              <p className="text-gray-600">Payments are processed monthly via PayPal, Stripe, or bank transfer. Minimum payout is $50.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans later?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Are there any setup fees?</h4>
              <p className="text-gray-600">No setup fees, no monthly fees. You only pay when you earn from course sales.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What if I don't make any sales?</h4>
              <p className="text-gray-600">You pay nothing. Our commission model means we only succeed when you succeed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
