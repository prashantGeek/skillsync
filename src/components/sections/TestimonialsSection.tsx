import Card, { CardContent } from "../ui/Card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Head of Learning & Development",
    company: "TechFlow Inc.",
    image: "/api/placeholder/64/64",
    quote:
      "SkillSync transformed our team's capabilities. The quality of courses and the analytics dashboard helped us identify skill gaps and track progress effectively.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Software Engineer",
    company: "Digital Innovations",
    image: "/api/placeholder/64/64",
    quote:
      "The hands-on projects and real-world applications made learning engaging. I've applied these skills directly to my work and seen immediate results.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Chen",
    role: "Product Manager",
    company: "StartupX",
    image: "/api/placeholder/64/64",
    quote:
      "As a busy professional, the flexible learning schedule was perfect. The mobile app allowed me to learn during commutes and breaks.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "HR Director",
    company: "Global Corp",
    image: "/api/placeholder/64/64",
    quote:
      "The enterprise features and team management tools made it easy to onboard new employees and track their learning journey.",
    rating: 5,
  },
];

const stats = [
  { number: "50M+", label: "Students Worldwide" },
  { number: "190+", label: "Countries Reached" },
  { number: "15K+", label: "Corporate Clients" },
  { number: "98%", label: "Satisfaction Rate" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how SkillSync is helping teams and individuals achieve their
            learning goals
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-blue-500 text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
