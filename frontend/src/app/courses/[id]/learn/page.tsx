'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Button from '@/components/ui/Button';

export default function CoursePlayerPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<any>(null);
  const [activeLesson, setActiveLesson] = useState<any>(null);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push(`/courses/${id}`);
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      if (!data.isEnrolled) {
        router.push(`/courses/${id}`);
        return;
      }
      setCourse(data.course);
      
      // Auto-select first lesson
      if (data.course.modules?.length > 0 && data.course.modules[0].lessons?.length > 0) {
          setActiveLesson(data.course.modules[0].lessons[0]);
      }
    })
    .catch(console.error)
    .finally(() => setLoading(false));
  }, [id, user, authLoading, router]);

  if (loading || authLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-900 border-t"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div></div>;

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans overflow-hidden border-t border-gray-800">
      
      {/* Video Player Area (Left) */}
      <div className="flex-1 flex flex-col bg-black">
        <div className="flex-1 border-b border-gray-800 flex items-center justify-center relative bg-gray-950">
          {/* Mock Video Player */}
          {activeLesson ? (
            <div className="w-full h-full relative group">
              {activeLesson.videoUrl ? (
                 <video 
                   src={activeLesson.videoUrl.startsWith('http') ? activeLesson.videoUrl : `http://localhost:5001${activeLesson.videoUrl}`} 
                   controls 
                   controlsList="nodownload"
                   className="w-full h-full object-contain bg-black"
                   autoPlay
                 />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-gray-400">
                  <svg className="w-20 h-20 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-medium">Video content unavailable</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-gray-500">No active lesson selected.</div>
          )}
        </div>
        
        {/* Lesson Details */}
        <div className="h-64 p-8 overflow-y-auto bg-gray-900 shrink-0 border-t border-gray-800">
          <Button variant="outline" className="text-xs mb-4 border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800" onClick={() => router.push(`/courses/${id}`)}>
            ← Back to Landing Page
          </Button>
          <h1 className="text-2xl font-bold text-white mb-2">{activeLesson?.title || 'Welcome'}</h1>
          <p className="text-gray-400 max-w-4xl text-sm leading-relaxed">
            {activeLesson?.description || 'Select a lesson from the syllabus to begin learning.'}
          </p>
        </div>
      </div>

      {/* Syllabus Sidebar (Right) */}
      <div className="w-96 bg-gray-900 border-l border-gray-800 flex flex-col shadow-2xl z-10 hidden md:flex shrink-0">
        <div className="px-6 py-5 border-b border-gray-800 bg-gray-900 shrink-0">
          <h2 className="font-bold text-lg text-white truncate" title={course?.title}>{course?.title || 'Course Player'}</h2>
          <div className="text-xs text-purple-400 mt-1 font-medium select-none">Course Contents</div>
        </div>
        
        <div className="flex-1 overflow-y-auto w-full custom-scrollbar">
          {course?.modules?.map((module: any, i: number) => (
            <div key={module.id} className="border-b border-gray-800/50 w-full">
              <div className="bg-gray-800/20 px-6 py-4 w-full">
                <h3 className="text-sm font-bold text-gray-200">
                  <span className="text-gray-500 mr-2">Section {i + 1}:</span>
                  {module.title}
                </h3>
              </div>
              <div className="w-full flex flex-col">
                {module.lessons?.map((lesson: any, j: number) => {
                  const isActive = activeLesson?.id === lesson.id;
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson)}
                      className={`w-full text-left px-6 py-3.5 hover:bg-gray-800/60 transition-colors flex items-start gap-3 border-l-4 ${
                        isActive ? 'border-purple-500 bg-gray-800 text-white' : 'border-transparent text-gray-400'
                      }`}
                    >
                      <span className="text-xs mt-0.5 opacity-50 shrink-0 select-none">{j + 1}.</span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm truncate font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>{lesson.title}</p>
                        {lesson.duration && (
                          <p className="text-xs text-gray-600 mt-1 font-mono">
                            {Math.floor(lesson.duration / 60)}:{((lesson.duration) % 60).toString().padStart(2, '0')}
                          </p>
                        )}
                      </div>
                      
                      {/* Play/Pause indicator icon */}
                      {isActive && (
                        <svg className="w-4 h-4 text-purple-500 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
