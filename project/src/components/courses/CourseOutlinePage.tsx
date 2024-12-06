import React, { useState, useEffect } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../ui/AlertDialog';
import { LessonCard } from './LessonCard';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import type { Lesson, CourseOutline } from '../../types/course';
import { generateCourseOutline } from '../../services/gemini';

interface CourseOutlinePageProps {
  courseTitle: string;
  courseDescription: string;
  difficulty: string;
}

export function CourseOutlinePage({ courseTitle, courseDescription, difficulty }: CourseOutlinePageProps) {
  const [outline, setOutline] = useState<CourseOutline>({
    courseId: '1',
    lessons: [],
    isLocked: false
  });
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOutline() {
      try {
        const result = await generateCourseOutline(
          courseTitle,
          courseDescription,
          difficulty
        );
        setOutline(prev => ({ ...prev, lessons: result.lessons }));
        setError(null);
      } catch (err) {
        setError('Failed to generate course outline. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchOutline();
  }, [courseTitle, courseDescription, difficulty]);

  const handleLessonUpdate = (updatedLesson: Lesson) => {
    if (outline.isLocked) return;
    
    setOutline(prev => ({
      ...prev,
      lessons: prev.lessons.map(lesson => 
        lesson.id === updatedLesson.id ? updatedLesson : lesson
      )
    }));
  };

  const handleConfirm = () => {
    setOutline(prev => ({ ...prev, isLocked: true }));
    setShowConfirmDialog(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{courseTitle}</h1>
        <p className="text-gray-600 mb-4">{courseDescription}</p>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {difficulty}
        </span>
      </div>

      <div className="space-y-4">
        {outline.lessons.map(lesson => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onUpdate={handleLessonUpdate}
            isLocked={outline.isLocked}
          />
        ))}
      </div>

      {!outline.isLocked && (
        <button
          onClick={() => setShowConfirmDialog(true)}
          className="w-full bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors"
        >
          Confirm Course Outline
        </button>
      )}

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Course Outline</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to confirm? Once confirmed, you will no longer be able to edit this course outline.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}