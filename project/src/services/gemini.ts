import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyA8njqSRQKG7BG2n2f4SocZmSGt2_N7igM');

export async function generateCourseOutline(
  title: string,
  description: string,
  difficulty: string
): Promise<any> {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `Create a detailed course outline for a course with the following details:
Title: ${title}
Description: ${description}
Difficulty Level: ${difficulty}

Please provide the outline in the following JSON format:
{
  "lessons": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "learningOutcomes": [
        {
          "id": "string",
          "description": "string"
        }
      ],
      "keywords": ["string"]
    }
  ]
}

The outline should include 5-7 lessons that progressively build upon each other.
Each lesson should have 3-4 specific learning outcomes.
Include relevant keywords for each lesson.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return JSON.parse(text);
  } catch (error) {
    console.error('Error generating course outline:', error);
    throw new Error('Failed to generate course outline');
  }
}