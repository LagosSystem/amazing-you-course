export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  progress?: number;
  imageUrl: string;
}

export interface LearningOutcome {
  id: string;
  description: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  learningOutcomes: LearningOutcome[];
  keywords: string[];
  isEditing?: boolean;
}

export interface CourseOutline {
  courseId: string;
  lessons: Lesson[];
  isLocked: boolean;
}