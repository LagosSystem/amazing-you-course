import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CourseCard } from './CourseCard';
import type { Course } from '../../types/course';

interface CourseGridProps {
  courses: Course[];
  onEdit: (id: string) => void;
}

export function CourseGrid({ courses, onEdit }: CourseGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Your Courses</h2>
        <a
          href="/courses"
          className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
        >
          View All
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.slice(0, 4).map((course) => (
          <CourseCard key={course.id} course={course} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
}