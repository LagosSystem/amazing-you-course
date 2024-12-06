import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { CourseForm } from './components/courses/CourseForm';
import { CourseGrid } from './components/courses/CourseGrid';
import { CourseOutlinePage } from './components/courses/CourseOutlinePage';
import type { Course } from './types/course';
import { mockCourses } from './data/mockCourses';

function App() {
  const [showOutline, setShowOutline] = useState(false);
  const [courseData, setCourseData] = useState<Partial<Course> | null>(null);

  const handleCourseSubmit = (data: Partial<Course>) => {
    setCourseData(data);
    setShowOutline(true);
  };

  const handleCourseEdit = (id: string) => {
    console.log('Edit course:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {!showOutline ? (
            <>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Course</h1>
                <CourseForm onSubmit={handleCourseSubmit} />
              </div>
              <CourseGrid courses={mockCourses} onEdit={handleCourseEdit} />
            </>
          ) : courseData ? (
            <CourseOutlinePage
              courseTitle={courseData.title || ''}
              courseDescription={courseData.description || ''}
              difficulty={courseData.difficulty || 'Beginner'}
            />
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default App;