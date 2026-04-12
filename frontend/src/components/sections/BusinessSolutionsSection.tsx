'use client';

import Card, { CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const solutions = [
  {
    title: 'Employee Onboarding',
    description: 'Accelerate new hire productivity with structured learning programs that reduce time-to-competency by 50%.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500',
    benefits: [
      'Faster onboarding process',
      'Consistent training experience',
      'Reduced HR workload',
      'Higher retention rates'
    ],
    stats: { metric: '50%', label: 'Faster Onboarding' }
  },
  {
    title: 'Skills Development',
    description: 'Bridge skill gaps with targeted training programs that align with your business objectives and career growth.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
    benefits: [
      'Identify skill gaps',
      'Personalized learning paths',
      'Industry-relevant content',
      'Measurable progress tracking'
    ],
    stats: { metric: '85%', label: 'Skill Improvement' }
  },
  {
    title: 'Leadership Development',
    description: 'Cultivate next-generation leaders with comprehensive management and leadership training programs.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500',
    benefits: [
      'Leadership competencies',
      'Management best practices',
      'Team building skills',
      'Strategic thinking development'
    ],
    stats: { metric: '3x', label: 'Internal Promotions' }
  },
  {
    title: 'Compliance Training',
    description: 'Ensure regulatory compliance with automated tracking, reporting, and certification management.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    benefits: [
      'Automated compliance tracking',
      'Regulatory updates',
      'Certification management',
      'Audit-ready reporting'
    ],
    stats: { metric: '100%', label: 'Compliance Rate' }
  },
  {
    title: 'Digital Transformation',
    description: 'Equip your workforce with digital skills needed for modern business operations and future growth.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500',
    benefits: [
      'Digital literacy programs',
      'Technology adoption',
      'Change management',
      'Innovation mindset'
    ],
    stats: { metric: '60%', label: 'Productivity Increase' }
  },
  {
    title: 'Remote Team Training',
    description: 'Effective virtual training solutions that keep distributed teams connected and engaged.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500',
    benefits: [
      'Virtual collaboration tools',
      'Remote work best practices',
      'Team communication',
      'Distributed leadership'
    ],
    stats: { metric: '90%', label: 'Remote Engagement' }
  }
];

export default function BusinessSolutionsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solutions for Every Business Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you&apos;re scaling your team, driving digital transformation, or ensuring compliance, 
            we have the right solution for your organization.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden" hover>
              <div className="relative h-48">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">{solution.stats.metric}</div>
                  <div className="text-xs text-gray-600">{solution.stats.label}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {benefit}
                    </div>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Specific Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored training programs designed for your industry&apos;s unique challenges and requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Technology', icon: '💻' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Finance', icon: '🏦' },
              { name: 'Manufacturing', icon: '🏭' },
              { name: 'Retail', icon: '🛍️' },
              { name: 'Education', icon: '🎓' }
            ].map((industry, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer">
                <div className="text-4xl mb-2">{industry.icon}</div>
                <div className="text-sm font-semibold text-gray-700">{industry.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg">
              Explore Industry Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
