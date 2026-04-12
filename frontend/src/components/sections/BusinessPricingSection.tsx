'use client';

import { useState } from 'react';
import Card, { CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started",
    price: { monthly: 29, annual: 290 },
    features: [
      "Up to 50 learners",
      "Basic course library",
      "Progress tracking",
      "Email support",
      "Mobile app access",
      "Basic analytics"
    ],
    limitations: [
      "Limited integrations",
      "Basic reporting",
      "Email support only"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    description: "For growing organizations",
    price: { monthly: 89, annual: 890 },
    features: [
      "Up to 500 learners",
      "Full course library",
      "Advanced analytics",
      "Custom branding",
      "API integrations",
      "Priority support",
      "Compliance tracking",
      "Virtual classroom",
      "Custom assessments"
    ],
    limitations: [
      "Limited SSO options",
      "Basic white-labeling"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    price: { monthly: 199, annual: 1990 },
    features: [
      "Unlimited learners",
      "Custom content creation",
      "Advanced integrations",
      "White-label solution",
      "Dedicated success manager",
      "24/7 support",
      "Advanced security",
      "Custom workflows",
      "Multi-tenant architecture",
      "Advanced reporting",
      "SLA guarantee"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  }
];

const enterpriseFeatures = [
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "SOC 2 Type II, GDPR compliant, SSO, and advanced encryption"
  },
  {
    icon: "🏗️",
    title: "Custom Implementation",
    description: "Tailored deployment with dedicated technical support"
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    description: "Custom dashboards, ROI tracking, and predictive insights"
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description: "Personal success manager and 24/7 technical support"
  }
];

export default function BusinessPricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your organization&apos;s needs. All plans include a 30-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-lg p-1 border">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                billingCycle === 'annual'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.popular
                  ? 'border-2 border-purple-500 scale-105 shadow-xl'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardContent className="p-0">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>

                  {billingCycle === 'annual' && (
                    <div className="text-sm text-green-600 font-medium">
                      Save ${(plan.price.monthly * 12) - plan.price.annual} annually
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Features
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities for large organizations with complex requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg">
              Schedule Enterprise Demo
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              Custom pricing available for 1,000+ learners
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans later?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What&apos;s included in the free trial?</h4>
              <p className="text-gray-600">Full access to all features of your chosen plan for 30 days. No credit card required.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer volume discounts?</h4>
              <p className="text-gray-600">Yes, custom pricing is available for organizations with 1,000+ learners.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there setup assistance?</h4>
              <p className="text-gray-600">Professional and Enterprise plans include setup assistance and onboarding support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
