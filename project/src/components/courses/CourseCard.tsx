import React from 'react';
import { Edit } from 'lucide-react';
import type { Course } from '../../types/course';
import { CourseProgress } from './CourseProgress';

interface CourseCardProps {
  course: Course;
  onEdit: (id: string) => void;
}

export function CourseCard({ course, onEdit }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="aspect-video w-full relative">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onEdit(course.id)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Edit className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{course.description}</p>
        
        {course.progress !== undefined && (
          <CourseProgress progress={course.progress} />
        )}
        
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {course.difficulty}
        </span>
      </div>
    </div>
  );
}