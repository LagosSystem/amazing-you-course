import React from 'react';

interface CourseProgressProps {
  progress: number;
}

export function CourseProgress({ progress }: CourseProgressProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gray-800 h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}