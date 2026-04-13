'use client';

import { useState, useEffect } from 'react';
import Card, { CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnailUrl: string | null;
  instructor: {
    name: string | null;
    email: string;
  };
  _count: {
    modules: number;
    enrollments: number;
  };
}

export default function CoursesSection() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCourses(data.courses);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-gray-50 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Expand Your Potential</h2>
          <p className="text-lg text-gray-600 border-b border-gray-200 pb-8">Explore our catalog of top-tier courses crafted by industry experts.</p>
        </div>

        {courses.length === 0 ? (
          <div className="text-center text-gray-500 py-12">No courses available yet. Be the first instructor to publish one!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {courses.map((course) => (
              <Card key={course.id} className="h-full flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden bg-white">
                <Link href={`/courses/${course.id}`} className="block relative h-48 w-full bg-gray-100 overflow-hidden group">
                  {course.thumbnailUrl ? (
                    <Image 
                      src={course.thumbnailUrl.startsWith('http') ? course.thumbnailUrl : `http://localhost:5001${course.thumbnailUrl}`}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                       <span className="text-purple-600 font-bold opacity-30 text-lg">SkillSync</span>
                    </div>
                  )}
                  {course.price === 0 && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md border border-green-400">
                      FREE
                    </div>
                  )}
                </Link>

                <CardContent className="flex-grow p-5 flex flex-col">
                  <div className="flex items-center justify-between mt-1 mb-2">
                    <span className="text-xs font-medium text-purple-600 uppercase tracking-wide bg-purple-50 px-2 py-0.5 rounded">
                      {course._count.modules} Modules
                    </span>
                    <span className="text-xs text-gray-500 flex items-center font-medium">
                      <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {course._count.enrollments}
                    </span>
                  </div>
                  
                  <Link href={`/courses/${course.id}`} className="group-hover:text-purple-600 transition-colors">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">{course.title}</h3>
                  </Link>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed flex-grow">{course.description}</p>
                  
                  <div className="text-xs text-gray-500 mt-auto flex items-center border-t border-gray-100 pt-3">
                    <div className="w-5 h-5 rounded-full bg-gray-200 mr-2 flex items-center justify-center text-[10px] font-bold text-gray-600">
                      {((course.instructor.name || course.instructor.email)[0]).toUpperCase()}
                    </div>
                    <span className="truncate">{course.instructor.name || course.instructor.email}</span>
                  </div>
                </CardContent>

                <CardFooter className="p-5 border-t border-gray-100 bg-gray-50 flex justify-between items-center group-hover:bg-purple-50/30 transition-colors">
                  <div className="text-xl font-extrabold text-gray-900">
                    {course.price === 0 ? 'Free' : `$${course.price.toFixed(2)}`}
                  </div>
                  <Link href={`/courses/${course.id}`}>
                    <Button variant="outline" size="sm" className="font-semibold px-4 border-purple-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-sm">
                      Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
