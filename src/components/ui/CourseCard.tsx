'use client';

import Card, { CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

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

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const StarIconSolid = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
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

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorImage: string;
  duration: string;
  studentsEnrolled: number;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  tags: string[];
  isPopular?: boolean;
  isBestseller?: boolean;
  lessons: number;
  completionRate: number;
}

interface CourseCardProps {
  course: Course;
  onEnroll?: (courseId: string) => void;
  onPreview?: (courseId: string) => void;
}

export default function CourseCard({ course, onEnroll, onPreview }: CourseCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <StarIcon className="h-4 w-4 text-yellow-400" />
          <StarIconSolid 
            className="h-4 w-4 text-yellow-400 absolute top-0 left-0 overflow-hidden" 
            style={{ width: '50%' }} 
          />
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarIcon key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }

    return stars;
  };

  const handleEnroll = () => {
    if (onEnroll) {
      onEnroll(course.id);
    }
  };

  const handlePreview = () => {
    if (onPreview) {
      onPreview(course.id);
    }
  };

  return (
    <Card className="overflow-hidden" hover>
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
        <div className="absolute top-3 right-3">
          <button 
            onClick={handlePreview}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <PlayIcon className="h-5 w-5 text-purple-600" />
          </button>
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

        {/* Instructor */}
        <div className="flex items-center mb-4">
          <img
            src={course.instructorImage}
            alt={course.instructor}
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="text-sm text-gray-700">{course.instructor}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-2">
            {renderStars(course.rating)}
          </div>
          <span className="text-sm font-semibold text-gray-900 mr-1">
            {course.rating}
          </span>
          <span className="text-sm text-gray-500">
            ({course.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Course Stats */}
        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BookOpenIcon className="h-4 w-4 mr-1" />
            {course.lessons} lessons
          </div>
          <div className="flex items-center">
            <UserGroupIcon className="h-4 w-4 mr-1" />
            {course.studentsEnrolled.toLocaleString()}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
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

        {/* Tags */}
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
        <Button size="sm" onClick={handleEnroll}>
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
}
