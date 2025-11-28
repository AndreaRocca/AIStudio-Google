import React from 'react';

export type TaskType = 'pattern' | 'sorting' | 'sequence' | 'logic' | 'debugging';

export interface Option {
  id: string;
  label: string; // Emoji or text
  isCorrect: boolean;
  color?: string;
  contentClassName?: string; // Additional classes for the label content (e.g. filters)
}

export interface Task {
  id: number;
  title: string;
  instruction: string;
  type: TaskType;
  options: Option[];
  visualPrompt?: React.ReactNode; // For displaying the sequence/pattern/maze
  correctAnswerId: string;
  hint: string;
  csExplanation: string; // "Why is this computer science?"
  badgeName: string;
}

export interface GameState {
  currentTaskIndex: number;
  score: number;
  completedTasks: number[];
  attempts: number; // To track if we should show a hint
  isFinished: boolean;
  gameStarted: boolean;
}