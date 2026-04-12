'use client';

import Card, { CardContent } from '@/components/ui/Card';

const benefits = [
  {
    icon: "💰",
    title: "Maximize Your Earnings",
    description: "Keep 85% of your course revenue with our industry-leading commission structure.",
    features: [
      "No upfront costs or fees",
      "Multiple pricing options",
      "Automatic payment processing",
      "Global payment support"
    ],
    highlight: "Average instructor earns $3,200/month"
  },
  {
    icon: "🎥",
    title: "Professional Course Creation",
    description: "Use our powerful tools to create engaging, professional-quality courses.",
    features: [
      "HD video hosting",
      "Interactive quizzes & assignments",
      "Course templates & guides",
      "Mobile-optimized player"
    ],
    highlight: "Built-in screen recorder included"
  },
  {
    icon: "🌍",
    title: "Reach Global Audiences",
    description: "Connect with millions of eager learners from around the world.",
    features: [
      "5M+ active learners",
      "Automatic translations",
      "Marketing & promotion tools",
      "SEO-optimized course pages"
    ],
    highlight: "Courses available in 40+ languages"
  },
  {
    icon: "📊",
    title: "Data-Driven Insights",
    description: "Make informed decisions with comprehensive analytics and reporting.",
    features: [
      "Real-time student analytics",
      "Revenue tracking",
      "Engagement metrics",
      "Performance recommendations"
    ],
    highlight: "Track every aspect of your success"
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description: "Get help when you need it with our instructor success team.",
    features: [
      "1-on-1 coaching sessions",
      "Marketing strategy guidance",
      "Technical support",
      "Community forums"
    ],
    highlight: "Average response time: 2 hours"
  },
  {
    icon: "🚀",
    title: "Built-in Marketing",
    description: "Leverage our platform's reach and marketing tools to grow your audience.",
    features: [
      "Featured course placements",
      "Email marketing campaigns",
      "Social media integration",
      "Affiliate program"
    ],
    highlight: "2M+ marketing impressions monthly"
  }
];

const stats = [
  { number: "50K+", label: "Active Instructors", color: "emerald" },
  { number: "$100M+", label: "Paid to Instructors", color: "blue" },
  { number: "4.7★", label: "Average Course Rating", color: "purple" },
  { number: "89%", label: "Instructor Satisfaction", color: "pink" }
];

export default function TeachBenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose SkillSync to Teach?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful instructors who&apos;ve built thriving businesses 
            sharing their knowledge on our platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold mb-2 text-${stat.color}-600`}>
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full" hover>
              <CardContent className="p-6">
                {/* Icon */}
                <div className="text-4xl mb-4">{benefit.icon}</div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Highlight */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <div className="text-sm font-medium text-emerald-800">
                    💡 {benefit.highlight}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories from Our Instructors
            </h3>
            <p className="text-xl text-gray-600">
              Real stories from real instructors who&apos;ve transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Martinez",
                title: "Photography Instructor",
                earnings: "$12K/month",
                students: "8,500+",
                quote: "Teaching on SkillSync changed my life. I went from freelancing to building a sustainable business.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b2e15984?w=150"
              },
              {
                name: "David Chen",
                title: "Programming Instructor",
                earnings: "$18K/month",
                students: "15,200+",
                quote: "The platform's tools made it easy to create professional courses. My income tripled in 6 months.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
              },
              {
                name: "Maria Rodriguez",
                title: "Business Coach",
                earnings: "$9K/month",
                students: "4,800+",
                quote: "I love the community aspect. Students from all over the world benefit from my expertise.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.title}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-2 bg-emerald-50 rounded-lg">
                    <div className="font-bold text-emerald-600">{story.earnings}</div>
                    <div className="text-xs text-gray-600">Monthly</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="font-bold text-blue-600">{story.students}</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                </div>

                <blockquote className="text-sm text-gray-700 italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
