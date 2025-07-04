'use client';

import Card from '@/components/ui/Card';

const features = [
  {
    icon: '🎯',
    title: 'Tailored Learning Paths',
    description: 'Create custom learning journeys aligned with your business goals and employee career development plans.',
    benefits: ['Role-based curricula', 'Skill gap analysis', 'Adaptive learning'],
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Track progress, measure ROI, and gain insights into your workforce development with comprehensive reporting.',
    benefits: ['Real-time dashboards', 'Performance metrics', 'ROI tracking'],
  },
  {
    icon: '🔐',
    title: 'Enterprise Security',
    description: 'Bank-level security with SSO integration, compliance certifications, and data protection.',
    benefits: ['SSO/SAML integration', 'SOC 2 compliant', 'GDPR compliant'],
  },
  {
    icon: '🤝',
    title: 'Expert Support',
    description: 'Dedicated customer success manager and 24/7 technical support to ensure your success.',
    benefits: ['Dedicated CSM', '24/7 support', 'Training consultation'],
  },
  {
    icon: '🔄',
    title: 'Seamless Integration',
    description: 'Connect with your existing HRIS, LMS, and productivity tools for a unified experience.',
    benefits: ['API integrations', 'HRIS sync', 'LMS compatibility'],
  },
  {
    icon: '📱',
    title: 'Mobile Learning',
    description: 'Learn anywhere, anytime with our mobile app and offline content capabilities.',
    benefits: ['Native mobile apps', 'Offline learning', 'Cross-device sync'],
  },
];

export default function BusinessFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive enterprise features designed to scale with your organization 
            and deliver measurable results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 h-full" hover>
              <div className="text-center">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Workforce?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies who've revolutionized their training programs with SkillSync.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
