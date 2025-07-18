'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';

// Icon components
const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserGroupIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const StarIconSolid = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </svg>
);

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

interface CourseDetail {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorImage: string;
  instructorBio: string;
  duration: string;
  studentsEnrolled: number;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  videoUrl: string;
  tags: string[];
  isPopular?: boolean;
  isBestseller?: boolean;
  lessons: number;
  completionRate: number;
  curriculum: {
    title: string;
    lessons: { title: string; duration: string; preview?: boolean }[];
  }[];
  whatYouWillLearn: string[];
  requirements: string[];
}

export default function CourseDetailPage() {
  const params = useParams();
  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock course data - in real app, fetch from API using params.id
    const mockCourse: CourseDetail = {
      id: '1',
      title: 'Advanced React & TypeScript Development',
      description: 'Master modern React development with TypeScript, hooks, context, and advanced patterns. Build scalable applications with best practices and learn industry-standard tools and techniques.',
      instructor: 'Sarah Chen',
      instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b2e15984?w=150',
      instructorBio: 'Senior Full Stack Developer at Microsoft with 8+ years of experience in React and TypeScript development.',
      duration: '12 hours',
      studentsEnrolled: 15420,
      rating: 4.8,
      reviewCount: 2341,
      price: 89.99,
      originalPrice: 199.99,
      category: 'Web Development',
      level: 'Advanced',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      videoUrl: 'https://example.com/preview-video.mp4',
      tags: ['React', 'TypeScript', 'Frontend'],
      isPopular: true,
      isBestseller: true,
      lessons: 156,
      completionRate: 89,
      curriculum: [
        {
          title: 'Getting Started',
          lessons: [
            { title: 'Introduction to React & TypeScript', duration: '5:30', preview: true },
            { title: 'Setting up the Development Environment', duration: '8:45', preview: true },
            { title: 'Your First TypeScript React Component', duration: '12:20' },
          ]
        },
        {
          title: 'Advanced React Patterns',
          lessons: [
            { title: 'Higher-Order Components', duration: '15:30' },
            { title: 'Render Props Pattern', duration: '18:45' },
            { title: 'Custom Hooks Deep Dive', duration: '22:10' },
          ]
        },
        {
          title: 'State Management',
          lessons: [
            { title: 'Context API Best Practices', duration: '16:20' },
            { title: 'Redux Toolkit with TypeScript', duration: '25:45' },
            { title: 'Zustand for Simple State', duration: '14:30' },
          ]
        }
      ],
      whatYouWillLearn: [
        'Build modern React applications with TypeScript',
        'Master advanced React patterns and hooks',
        'Implement efficient state management solutions',
        'Write type-safe, maintainable code',
        'Optimize React applications for performance',
        'Test React components effectively'
      ],
      requirements: [
        'Basic knowledge of JavaScript (ES6+)',
        'Familiarity with React fundamentals',
        'Understanding of HTML and CSS',
        'Node.js installed on your computer'
      ]
    };

    setTimeout(() => {
      setCourse(mockCourse);
      setLoading(false);
    }, 1000);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading course details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Course not found</h2>
            <p className="text-gray-600">The course you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.category}
                  </span>
                  {course.isPopular && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                  {course.isBestseller && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Bestseller
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-gray-300 mb-6">{course.description}</p>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-4">
                    {renderStars(course.rating)}
                    <span className="ml-2 text-yellow-400 font-semibold">{course.rating}</span>
                  </div>
                  <span className="text-gray-300">
                    ({course.reviewCount.toLocaleString()} reviews)
                  </span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-300">
                    {course.studentsEnrolled.toLocaleString()} students
                  </span>
                </div>

                <div className="flex items-center text-gray-300 space-x-6">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpenIcon className="h-5 w-5 mr-2" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm">Level: {course.level}</span>
                  </div>
                </div>

                <div className="flex items-center mt-6">
                  <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">Created by {course.instructor}</p>
                    <p className="text-gray-400 text-sm">{course.instructorBio}</p>
                  </div>
                </div>
              </div>

              <div>
                <Card className="sticky top-8">
                  <div className="relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-colors rounded-t-lg">
                      <PlayIcon className="h-16 w-16 text-white" />
                    </button>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {course.originalPrice && (
                        <span className="text-lg text-gray-500 line-through mr-2">
                          ${course.originalPrice}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-purple-600">
                        ${course.price}
                      </span>
                    </div>

                    <Button className="w-full mb-3" size="lg">
                      Enroll Now
                    </Button>
                    
                    <Button variant="outline" className="w-full mb-6" size="lg">
                      Add to Wishlist
                    </Button>

                    <div className="text-center text-sm text-gray-600 mb-4">
                      30-Day Money-Back Guarantee
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-2 text-gray-500" />
                        {course.duration} on-demand video
                      </div>
                      <div className="flex items-center">
                        <BookOpenIcon className="h-4 w-4 mr-2 text-gray-500" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="h-4 w-4 mr-2 text-gray-500" />
                        Full lifetime access
                      </div>
                      <div className="flex items-center">
                        <CheckIcon className="h-4 w-4 mr-2 text-gray-500" />
                        Certificate of completion
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* What You will Learn */}
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-bold">What you&apos;ll learn</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Course Curriculum */}
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-bold">Course curriculum</h2>
                    <p className="text-gray-600">
                      {course.curriculum.reduce((acc, section) => acc + section.lessons.length, 0)} lectures • {course.duration}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {course.curriculum.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                          <div className="space-y-2">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                  <PlayIcon className="h-4 w-4 text-gray-500 mr-3" />
                                  <span className="text-gray-700">{lesson.title}</span>
                                  {lesson.preview && (
                                    <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                      Preview
                                    </span>
                                  )}
                                </div>
                                <span className="text-gray-500 text-sm">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-bold">Requirements</h2>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gray-400 mr-3">•</span>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                {/* Tags */}
                <Card className="mb-6">
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Tags</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Course Stats */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Course Stats</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Completion Rate</span>
                          <span>{course.completionRate}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${course.completionRate}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Students: {course.studentsEnrolled.toLocaleString()}</p>
                        <p>Language: English</p>
                        <p>Captions: Yes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
