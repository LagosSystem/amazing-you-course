import type { Course } from '../types/course';

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React including components, props, and state management.',
    difficulty: 'Beginner',
    progress: 75,
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Advanced TypeScript',
    description: 'Master TypeScript features like generics, utility types, and advanced type inference.',
    difficulty: 'Advanced',
    progress: 30,
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
  },
];