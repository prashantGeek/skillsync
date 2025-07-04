'use client';

import Card, { CardContent } from '@/components/ui/Card';

const testimonials = [
  {
    quote: "SkillSync transformed our onboarding process. New hires are productive 50% faster, and our retention rate increased dramatically.",
    author: "Sarah Johnson",
    position: "VP of Human Resources",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b2e15984?w=150",
    results: {
      metric: "50%",
      improvement: "Faster Onboarding"
    }
  },
  {
    quote: "The analytics dashboard gives us unprecedented visibility into our workforce development. ROI tracking made budget approvals effortless.",
    author: "Michael Chen",
    position: "Chief Learning Officer",
    company: "Global Finance Ltd.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    results: {
      metric: "320%",
      improvement: "Training ROI"
    }
  },
  {
    quote: "Our compliance training is now automated and always up-to-date. We passed our last audit with zero issues for the first time.",
    author: "Emma Rodriguez",
    position: "Compliance Director",
    company: "MedTech Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    results: {
      metric: "100%",
      improvement: "Compliance Rate"
    }
  },
  {
    quote: "The mobile learning platform keeps our remote teams engaged. Completion rates increased by 85% since switching to SkillSync.",
    author: "David Park",
    position: "Head of Operations",
    company: "Remote Works Co.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    results: {
      metric: "85%",
      improvement: "Higher Completion"
    }
  }
];

const companyLogos = [
  { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100" },
  { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100" },
  { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100" },
  { name: "Tesla", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100" },
  { name: "Apple", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100" },
  { name: "Meta", logo: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=100" }
];

export default function BusinessTestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies are transforming their workforce with SkillSync
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8" hover>
              <CardContent className="p-0">
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-purple-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Results Badge */}
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-600">{testimonial.results.metric}</div>
                    <div className="text-xs text-purple-700">{testimonial.results.improvement}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Join 15,000+ Companies Worldwide
            </h3>
            <p className="text-gray-600">
              From startups to Fortune 500 companies, organizations trust SkillSync for their learning needs
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg font-bold text-gray-700">{company.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15,000+</div>
              <div className="text-sm text-gray-600">Companies Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5M+</div>
              <div className="text-sm text-gray-600">Learners Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3.2x</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
