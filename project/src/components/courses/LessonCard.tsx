import React, { useState } from 'react';
import { Edit2, Save, X } from 'lucide-react';
import type { Lesson } from '../../types/course';

interface LessonCardProps {
  lesson: Lesson;
  onUpdate: (lesson: Lesson) => void;
  isLocked: boolean;
}

export function LessonCard({ lesson, onUpdate, isLocked }: LessonCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedLesson, setEditedLesson] = useState(lesson);

  const handleEdit = () => {
    if (isLocked) return;
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(editedLesson);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedLesson(lesson);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editedLesson.title}
              onChange={(e) => setEditedLesson({ ...editedLesson, title: e.target.value })}
              className="w-full text-lg font-semibold mb-2 px-2 py-1 border rounded"
            />
          ) : (
            <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
          )}
        </div>
        {!isLocked && (
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="p-1 text-green-600 hover:text-green-700"
                >
                  <Save className="w-5 h-5" />
                </button>
                <button
                  onClick={handleCancel}
                  className="p-1 text-red-600 hover:text-red-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </>
            ) : (
              <button
                onClick={handleEdit}
                className="p-1 text-gray-500 hover:text-gray-700"
              >
                <Edit2 className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </div>

      {isEditing ? (
        <textarea
          value={editedLesson.description}
          onChange={(e) => setEditedLesson({ ...editedLesson, description: e.target.value })}
          className="w-full mb-4 px-2 py-1 border rounded"
          rows={3}
        />
      ) : (
        <p className="text-gray-600 mb-4">{lesson.description}</p>
      )}

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Learning Outcomes</h4>
          {isEditing ? (
            <div className="space-y-2">
              {editedLesson.learningOutcomes.map((outcome, index) => (
                <input
                  key={outcome.id}
                  type="text"
                  value={outcome.description}
                  onChange={(e) => {
                    const newOutcomes = [...editedLesson.learningOutcomes];
                    newOutcomes[index] = { ...outcome, description: e.target.value };
                    setEditedLesson({ ...editedLesson, learningOutcomes: newOutcomes });
                  }}
                  className="w-full px-2 py-1 border rounded"
                />
              ))}
            </div>
          ) : (
            <ul className="list-disc list-inside space-y-1">
              {lesson.learningOutcomes.map(outcome => (
                <li key={outcome.id} className="text-gray-600 text-sm">
                  {outcome.description}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Keywords</h4>
          {isEditing ? (
            <input
              type="text"
              value={editedLesson.keywords.join(', ')}
              onChange={(e) => setEditedLesson({
                ...editedLesson,
                keywords: e.target.value.split(',').map(k => k.trim())
              })}
              className="w-full px-2 py-1 border rounded"
              placeholder="Separate keywords with commas"
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {lesson.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}