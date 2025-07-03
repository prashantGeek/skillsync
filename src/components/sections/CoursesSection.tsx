'use client';

import { useState, useEffect } from 'react';
import Card, { CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Simple course data interface
interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  studentsEnrolled: number;
  rating: number;
  price: number;
  originalPrice?: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  tags: string[];
  isPopular?: boolean;
  isBestseller?: boolean;
}

// Mock courses data
const coursesData: Course[] = [
  {
    id: '1',
    title: 'Advanced React & TypeScript Development',
    description: 'Master modern React development with TypeScript, hooks, context, and advanced patterns.',
    instructor: 'Sarah Chen',
    duration: '12 hours',
    studentsEnrolled: 15420,
    rating: 4.8,
    price: 89.99,
    originalPrice: 199.99,
    category: 'Web Development',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    tags: ['React', 'TypeScript', 'Frontend'],
    isPopular: true,
    isBestseller: true,
  },
  {
    id: '2',
    title: 'Data Science with Python & Machine Learning',
    description: 'Complete data science bootcamp covering Python, pandas, NumPy, scikit-learn, and real-world ML projects.',
    instructor: 'Dr. Michael Rodriguez',
    duration: '25 hours',
    studentsEnrolled: 23100,
    rating: 4.9,
    price: 129.99,
    originalPrice: 299.99,
    category: 'Data Science',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    isPopular: true,
  },
  {
    id: '3',
    title: 'Digital Marketing Mastery 2025',
    description: 'Complete digital marketing course covering SEO, SEM, social media, content marketing, and analytics.',
    instructor: 'Emma Thompson',
    duration: '18 hours',
    studentsEnrolled: 18750,
    rating: 4.7,
    price: 79.99,
    originalPrice: 179.99,
    category: 'Marketing',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    tags: ['SEO', 'SEM', 'Social Media'],
    isBestseller: true,
  }
];

export default function CoursesSection() {
  const [courses] = useState<Course[]>(coursesData);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start learning with our most popular and highly-rated courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden" hover>
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {course.isPopular && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                  {course.isBestseller && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600 font-medium">
                    {course.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="text-sm text-gray-700 mb-4">
                  By {course.instructor}
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{course.studentsEnrolled.toLocaleString()} students</span>
                </div>

                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {course.rating}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="px-6 py-4 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center">
                  {course.originalPrice && (
                    <span className="text-sm text-gray-500 line-through mr-2">
                      ${course.originalPrice}
                    </span>
                  )}
                  <span className="text-2xl font-bold text-purple-600">
                    ${course.price}
                  </span>
                </div>
                <Button size="sm">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
