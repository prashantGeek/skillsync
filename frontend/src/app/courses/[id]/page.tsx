'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';

interface Lesson {
  id: string; title: string; description: string | null; duration: number | null; isFree: boolean; order: number;
}
interface Module {
  id: string; title: string; order: number; lessons: Lesson[];
}
interface Course {
  id: string; title: string; description: string; thumbnailUrl: string | null; price: number;
  instructor: { name: string | null; email: string; }; modules: Module[];
}

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const id = params?.id as string;

  const [course, setCourse] = useState<Course | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:5001/api/courses/${id}`, { credentials: 'include' })
      .then(async res => { if (!res.ok) throw new Error('Failed to fetch'); return res.json(); })
      .then(data => { setCourse(data.course); setIsEnrolled(data.isEnrolled); })
      .catch(console.error).finally(() => setLoading(false));
  }, [id, user]);

  const handleEnroll = async () => {
    if (!user) return alert("Please log in to enroll!");
    setEnrolling(true);
    try {
      if (course?.price && course.price > 0) {
        const res = await fetch(`http://localhost:5001/api/payments/courses/${id}/checkout`, { method: 'POST', credentials: 'include' });
        const d = await res.json();
        if (res.ok && d.url) {
          window.location.href = d.url;
        } else {
          alert(d.error || 'Failed to initialize checkout');
          setEnrolling(false);
        }
      } else {
        const res = await fetch(`http://localhost:5001/api/courses/${id}/enroll`, { method: 'POST', credentials: 'include' });
        if (res.ok) { setIsEnrolled(true); router.push(`/courses/${id}/learn`); }
        else { const d = await res.json(); alert(d.error || 'Failed to enroll'); setEnrolling(false); }
      }
    } catch (e) { alert('Network error'); setEnrolling(false); } 
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-12 w-12 border-b-2 border-purple-600 rounded-full"></div></div>;
  if (!course) return <div className="min-h-screen flex items-center justify-center"><h2>Course not found</h2></div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-purple-900 border-t border-purple-800 text-white py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{course.title}</h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl leading-relaxed">{course.description}</p>
            <div className="flex items-center gap-6">
              <span className="font-semibold text-lg text-white">Created by: {course.instructor.name || course.instructor.email}</span>
            </div>
          </div>
          <div className="w-full md:w-[400px] bg-white rounded-2xl shadow-2xl text-gray-900 z-10 border border-gray-100 overflow-hidden">
            {course.thumbnailUrl ? (
              <div className="relative h-60 w-full bg-gray-100">
                <Image src={course.thumbnailUrl.startsWith('http') ? course.thumbnailUrl : `http://localhost:5001${course.thumbnailUrl}`} alt={course.title} fill className="object-cover" unoptimized />
              </div>
            ) : (<div className="h-60 bg-indigo-500 w-full" />)}
            <div className="p-8">
              <div className="text-4xl font-extrabold mb-8">${course.price === 0 ? "Free" : course.price.toFixed(2)}</div>
              {isEnrolled ? (
                <Button className="w-full py-4 text-lg" onClick={() => router.push(`/courses/${id}/learn`)}>Go to Learning Player</Button>
              ) : (
                <Button className="w-full py-4 text-lg font-bold" onClick={handleEnroll} disabled={enrolling}>{enrolling ? 'Processing...' : 'Enroll Now'}</Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 border-b pb-4">Curriculum</h2>
        <div className="space-y-6">
          {course.modules.length > 0 ? course.modules.map((m, i) => (
            <div key={m.id} className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-6 py-5 border-b border-gray-200"><h3 className="text-lg font-bold text-gray-900">Module {i + 1}: {m.title}</h3></div>
              <div className="divide-y divide-gray-100">
                {m.lessons.map((l, j) => (
                  <div key={l.id} className="px-6 py-4">
                    <p className="text-base font-medium">{j + 1}. {l.title}</p>
                    {l.description && <p className="text-sm text-gray-500 mt-1">{l.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )) : (<p className="text-gray-500 italic">No modules added yet.</p>)}
        </div>
      </div>
    </div>
  );
}
