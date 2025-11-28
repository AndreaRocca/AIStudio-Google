import React from 'react';
import { Task, Option } from '../types';
import { HelpCircle } from 'lucide-react';

interface GameCardProps {
  task: Task;
  onAnswer: (option: Option) => void;
  showHint: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ task, onAnswer, showHint }) => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden animate-pop border-4 border-yellow-400">
      {/* Header */}
      <div className="bg-yellow-400 p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-yellow-900">{task.title}</h2>
        <span className="text-3xl">🦫</span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col items-center">
        <p className="text-xl md:text-2xl text-center text-gray-700 mb-8 font-medium">
          {task.instruction}
        </p>

        {/* Visual Prompt */}
        <div className="mb-10 p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-200 w-full flex justify-center items-center min-h-[160px]">
          {task.visualPrompt}
        </div>

        {/* Hint Box (Conditional) */}
        {showHint && (
          <div className="mb-6 p-4 bg-blue-100 rounded-xl border-2 border-blue-300 w-full flex gap-3 items-center animate-pop">
            <HelpCircle className="text-blue-500 flex-shrink-0" size={32} />
            <p className="text-blue-800 text-lg">{task.hint}</p>
          </div>
        )}

        {/* Options Grid */}
        <div className={`grid ${task.options.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'} gap-4 w-full`}>
          {task.options.map((option) => (
            <button
              key={option.id}
              onClick={() => onAnswer(option)}
              className={`
                ${option.color || 'bg-gray-100'} 
                hover:opacity-80 active:scale-95 transition-all transform
                p-6 rounded-2xl border-b-4 border-black/10
                flex flex-col items-center justify-center gap-2
                h-32 shadow-sm
              `}
            >
              <span className={`text-5xl drop-shadow-sm ${option.contentClassName || ''}`}>
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCard;