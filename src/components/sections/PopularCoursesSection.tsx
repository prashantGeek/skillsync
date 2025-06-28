import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';

const courses = [
  {
    id: 1,
    title: 'Complete Python Developer Bootcamp',
    instructor: 'Dr. Sarah Johnson',
    rating: 4.8,
    students: 45621,
    duration: '40 hours',
    level: 'Beginner to Advanced',
    image: '/api/placeholder/300/200',
    price: '$89.99',
    category: 'Programming'
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning',
    instructor: 'Prof. Michael Chen',
    rating: 4.9,
    students: 32187,
    duration: '35 hours',
    level: 'Intermediate',
    image: '/api/placeholder/300/200',
    price: '$94.99',
    category: 'Data Science'
  },
  {
    id: 3,
    title: 'Digital Marketing Mastery',
    instructor: 'Lisa Rodriguez',
    rating: 4.7,
    students: 28934,
    duration: '25 hours',
    level: 'Beginner',
    image: '/api/placeholder/300/200',
    price: '$79.99',
    category: 'Marketing'
  },
  {
    id: 4,
    title: 'React & Next.js Development',
    instructor: 'Alex Thompson',
    rating: 4.8,
    students: 38456,
    duration: '45 hours',
    level: 'Intermediate',
    image: '/api/placeholder/300/200',
    price: '$99.99',
    category: 'Web Development'
  },
  {
    id: 5,
    title: 'Project Management Professional',
    instructor: 'Jennifer Williams',
    rating: 4.6,
    students: 19876,
    duration: '30 hours',
    level: 'All Levels',
    image: '/api/placeholder/300/200',
    price: '$84.99',
    category: 'Business'
  },
  {
    id: 6,
    title: 'UX/UI Design Fundamentals',
    instructor: 'David Kim',
    rating: 4.9,
    students: 25789,
    duration: '28 hours',
    level: 'Beginner',
    image: '/api/placeholder/300/200',
    price: '$89.99',
    category: 'Design'
  }
];

export default function PopularCoursesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Most Popular Courses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover top-rated courses that professionals are taking to advance their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} hover className="overflow-hidden">
              {/* Course Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-90">{course.duration}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 dark:bg-yellow-300 text-black px-2 py-1 rounded text-xs font-semibold">
                    {course.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">by {course.instructor}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{course.level}</p>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <span className="text-yellow-500 dark:text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-semibold ml-1 text-gray-900 dark:text-white">{course.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({course.students.toLocaleString()} students)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{course.price}</span>
                  <Button size="sm">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
