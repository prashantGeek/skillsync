'use client';

import Button from '@/components/ui/Button';

const steps = [
  {
    number: "01",
    title: "Plan Your Course",
    description: "Choose your topic and outline your course structure with our planning tools.",
    details: [
      "Market research tools to validate your idea",
      "Course outline templates and guides",
      "Competitor analysis and pricing insights",
      "Target audience identification"
    ],
    icon: "📋",
    time: "1-2 days"
  },
  {
    number: "02",
    title: "Create Your Content",
    description: "Use our professional tools to record and edit your course materials.",
    details: [
      "Built-in screen recorder and video editor",
      "High-quality audio recording tools",
      "Slide presentation integration",
      "Interactive quiz and assignment builder"
    ],
    icon: "🎬",
    time: "1-2 weeks"
  },
  {
    number: "03",
    title: "Publish & Launch",
    description: "Set your pricing, optimize your course page, and launch to our global audience.",
    details: [
      "SEO-optimized course landing pages",
      "Flexible pricing and discount options",
      "Automatic marketing campaign setup",
      "Course preview and trailer creation"
    ],
    icon: "🚀",
    time: "1 day"
  },
  {
    number: "04",
    title: "Engage & Earn",
    description: "Interact with students, track your progress, and watch your income grow.",
    details: [
      "Q&A messaging system with students",
      "Real-time analytics and insights",
      "Monthly payment processing",
      "Student feedback and review management"
    ],
    icon: "💎",
    time: "Ongoing"
  }
];

const tools = [
  {
    name: "Video Studio",
    description: "Professional recording and editing suite",
    features: ["4K recording", "Auto-editing", "Noise reduction", "Captions"],
    icon: "🎥"
  },
  {
    name: "Course Builder",
    description: "Drag-and-drop course creation interface",
    features: ["Templates", "Interactive elements", "Progress tracking", "Mobile responsive"],
    icon: "🏗️"
  },
  {
    name: "Analytics Dashboard",
    description: "Comprehensive performance tracking",
    features: ["Revenue tracking", "Student engagement", "Completion rates", "A/B testing"],
    icon: "📊"
  },
  {
    name: "Marketing Suite",
    description: "Built-in promotion and marketing tools",
    features: ["Email campaigns", "Social sharing", "Coupons", "Affiliate tracking"],
    icon: "📢"
  }
];

export default function TeachHowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Start Teaching in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to income in just a few weeks. Our streamlined process makes it easy 
            to create and launch your first course.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <div className="text-emerald-600 font-medium">⏱️ {step.time}</div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-6">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-8xl font-bold text-gray-100 mb-4">{step.number}</div>
                  <div className="text-lg font-semibold text-gray-900">{step.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Tools at Your Fingertips
            </h3>
            <p className="text-xl text-gray-600">
              Everything you need to create, market, and sell your courses successfully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h4>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                
                <div className="space-y-1">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-500">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg">
              Explore All Tools
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Teaching Journey?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful instructors and start earning from your expertise today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" size="lg" className="bg-white text-emerald-600 border-white hover:bg-gray-50">
                Create Your First Course
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                Watch Demo Video
              </Button>
            </div>

            <div className="mt-6 text-sm opacity-75">
              No upfront costs • Free course creation tools • 30-day money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
