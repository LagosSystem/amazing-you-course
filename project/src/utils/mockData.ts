import type { Lesson } from '../types/course';

export function generateMockLessons(): Lesson[] {
  return [
    {
      id: '1',
      title: 'Introduction to the Course',
      description: 'Overview of what you will learn and how to get the most out of this course.',
      learningOutcomes: [
        { id: '1-1', description: 'Understand the course structure and objectives' },
        { id: '1-2', description: 'Set up your learning environment' },
        { id: '1-3', description: 'Access course resources and materials' }
      ],
      keywords: ['Introduction', 'Course Overview', 'Getting Started']
    },
    {
      id: '2',
      title: 'Core Concepts and Fundamentals',
      description: 'Learn the essential concepts that will form the foundation of your learning journey.',
      learningOutcomes: [
        { id: '2-1', description: 'Master the basic terminology' },
        { id: '2-2', description: 'Understand key principles' },
        { id: '2-3', description: 'Apply fundamental concepts to simple examples' }
      ],
      keywords: ['Fundamentals', 'Core Concepts', 'Basics']
    },
    {
      id: '3',
      title: 'Practical Applications',
      description: 'Put your knowledge into practice with hands-on exercises and real-world examples.',
      learningOutcomes: [
        { id: '3-1', description: 'Complete hands-on exercises' },
        { id: '3-2', description: 'Work on real-world scenarios' },
        { id: '3-3', description: 'Build a portfolio project' }
      ],
      keywords: ['Practice', 'Exercises', 'Real-world Applications']
    }
  ];
}