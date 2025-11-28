import React, { useState, useEffect } from 'react';
import { TASKS } from './constants';
import { Option, Task } from './types';
import GameCard from './components/GameCard';
import FeedbackModal from './components/FeedbackModal';
import BadgeList from './components/BadgeList';
import { Play, RotateCcw } from 'lucide-react';

const App: React.FC = () => {
  // State
  const [gameStarted, setGameStarted] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [collectedBadges, setCollectedBadges] = useState<string[]>([]);
  
  // Modal State
  const [feedback, setFeedback] = useState<{ show: boolean; isCorrect: boolean } | null>(null);

  const currentTask: Task = TASKS[currentTaskIndex];
  const isGameFinished = currentTaskIndex >= TASKS.length;

  const handleStart = () => {
    setGameStarted(true);
    setCurrentTaskIndex(0);
    setCollectedBadges([]);
    setAttempts(0);
  };

  const handleAnswer = (option: Option) => {
    if (option.isCorrect) {
      setFeedback({ show: true, isCorrect: true });
      if (!collectedBadges.includes(currentTask.badgeName)) {
        setCollectedBadges([...collectedBadges, currentTask.badgeName]);
      }
    } else {
      setAttempts(prev => prev + 1);
      if (attempts >= 0) { // Show hint immediately on first wrong answer for 5yos
        setShowHint(true);
      }
      setFeedback({ show: true, isCorrect: false });
    }
  };

  const handleNextTask = () => {
    setFeedback(null);
    setAttempts(0);
    setShowHint(false);
    setCurrentTaskIndex(prev => prev + 1);
  };

  const handleRetry = () => {
    setFeedback(null);
  };

  // Render Intro Screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-yellow-100">
        <div className="max-w-2xl w-full bg-white p-8 rounded-[3rem] shadow-2xl border-8 border-yellow-400">
          <div className="text-8xl mb-6 animate-wiggle inline-block">🦫</div>
          <h1 className="text-5xl md:text-6xl font-black text-yellow-900 mb-4 tracking-tight">
            Pequeños Castores
          </h1>
          <p className="text-2xl text-gray-600 mb-10 font-medium">
            ¡Aventura de Pensamiento Lógico!
          </p>
          
          <div className="space-y-4">
             <div className="bg-blue-50 p-4 rounded-2xl text-blue-800 text-lg mb-8">
               👋 Hola amiguito/a. Ayuda al Castor a resolver acertijos y gana medallas. 
               ¡Aprenderás a pensar como una computadora!
             </div>

             <button 
              onClick={handleStart}
              className="group relative w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-3xl font-black py-6 px-10 rounded-full shadow-[0_10px_0_rgb(180,83,9)] active:shadow-none active:translate-y-[10px] transition-all flex items-center justify-center gap-4"
            >
               <span>¡JUGAR!</span>
               <Play size={40} className="fill-current" />
             </button>
          </div>
        </div>
        <p className="mt-8 text-yellow-700/60 font-medium text-sm">Para niños y niñas curiosos de 5+ años</p>
      </div>
    );
  }

  // Render Finish Screen
  if (isGameFinished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-green-50">
        <div className="max-w-3xl w-full flex flex-col items-center gap-8">
          <div className="text-center">
            <h1 className="text-5xl font-black text-green-700 mb-4">¡FELICIDADES! 🎉</h1>
            <p className="text-2xl text-green-800">Has completado todos los desafíos.</p>
          </div>
          
          <BadgeList 
            collectedBadges={collectedBadges} 
            totalBadges={TASKS.map(t => t.badgeName)} 
          />

          <button 
            onClick={handleStart}
            className="bg-white hover:bg-gray-50 text-gray-700 text-xl font-bold py-4 px-8 rounded-2xl shadow-lg border-2 border-gray-200 flex items-center gap-2"
          >
            <RotateCcw /> Jugar otra vez
          </button>
        </div>
      </div>
    );
  }

  // Render Game Screen
  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 max-w-6xl mx-auto">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-md font-bold text-yellow-900">
            {currentTaskIndex + 1}
          </div>
          <div className="h-4 w-32 md:w-64 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
            <div 
              className="h-full bg-green-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentTaskIndex) / TASKS.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex gap-1">
          {collectedBadges.map((_, i) => (
             <span key={i} className="text-xl animate-pop">⭐</span>
          ))}
        </div>
      </div>

      {/* Main Game Card */}
      <GameCard 
        task={currentTask} 
        onAnswer={handleAnswer} 
        showHint={showHint}
      />

      {/* Feedback Modal Overlay */}
      {feedback?.show && (
        <FeedbackModal 
          isCorrect={feedback.isCorrect}
          task={currentTask}
          onNext={handleNextTask}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
};

export default App;