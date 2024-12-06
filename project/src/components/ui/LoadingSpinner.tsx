import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800" />
      <span className="ml-2 text-gray-600">Generating course outline...</span>
    </div>
  );
}