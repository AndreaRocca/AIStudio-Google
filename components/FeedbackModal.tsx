import React from 'react';
import { CheckCircle2, XCircle, Trophy, ArrowRight } from 'lucide-react';
import { Task } from '../types';
import { BADGE_ICONS } from '../constants';

interface FeedbackModalProps {
  isCorrect: boolean;
  task: Task;
  onNext: () => void;
  onRetry: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isCorrect, task, onNext, onRetry }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-pop">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border-4 border-white">
        
        <div className={`p-6 text-center ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
          <div className="flex justify-center mb-4">
            {isCorrect ? (
              <div className="bg-white p-4 rounded-full shadow-lg animate-bounce">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
            ) : (
              <div className="bg-white p-4 rounded-full shadow-lg animate-wiggle">
                <XCircle className="w-16 h-16 text-red-500" />
              </div>
            )}
          </div>
          
          <h2 className={`text-3xl font-bold mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? "¡Fantástico!" : "¡Casi casi!"}
          </h2>
        </div>

        <div className="p-8 text-center space-y-6">
          {isCorrect ? (
            <>
               {/* Badge Reveal */}
              <div className="flex flex-col items-center gap-2 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                <div className="text-sm uppercase tracking-wider text-yellow-700 font-bold">¡Nueva Medalla Ganada!</div>
                <div className="flex items-center gap-3">
                    <div className="bg-yellow-400 p-2 rounded-full shadow-md">
                        {BADGE_ICONS[task.badgeName] || <Trophy className="text-white"/>}
                    </div>
                    <span className="text-xl font-bold text-gray-800">{task.badgeName}</span>
                </div>
              </div>

              {/* CS Explanation */}
              <div className="text-left bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <h3 className="text-blue-500 font-bold text-sm uppercase mb-1">¿Por qué es informática?</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {task.csExplanation}
                </p>
              </div>

              <button
                onClick={onNext}
                className="w-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 px-8 rounded-2xl shadow-lg border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                Siguiente Desafío <ArrowRight />
              </button>
            </>
          ) : (
            <>
              <p className="text-xl text-gray-600">
                Esa no es la respuesta correcta, ¡pero buen intento!
              </p>
              <button
                onClick={onRetry}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-xl font-bold py-4 px-8 rounded-2xl shadow-lg border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 transition-all"
              >
                Intentar de nuevo
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;