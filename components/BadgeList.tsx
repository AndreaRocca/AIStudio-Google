import React from 'react';
import { BADGE_ICONS } from '../constants.tsx';
import { Lock } from 'lucide-react';

interface BadgeListProps {
  collectedBadges: string[];
  totalBadges: string[];
}

const BadgeList: React.FC<BadgeListProps> = ({ collectedBadges, totalBadges }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border-4 border-indigo-100 w-full max-w-4xl">
      <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
        <span>🏆</span> Tu Colección de Medallas
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {totalBadges.map((badge, index) => {
          const isUnlocked = collectedBadges.includes(badge);
          return (
            <div 
              key={index} 
              className={`
                flex flex-col items-center p-3 rounded-xl border-2 text-center transition-all
                ${isUnlocked 
                  ? 'bg-yellow-50 border-yellow-300 scale-100' 
                  : 'bg-gray-50 border-gray-200 opacity-50 grayscale'
                }
              `}
            >
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-sm
                ${isUnlocked ? 'bg-yellow-400' : 'bg-gray-300'}
              `}>
                {isUnlocked ? BADGE_ICONS[badge] : <Lock className="w-6 h-6 text-white" />}
              </div>
              <span className="text-xs font-bold text-gray-700 leading-tight">
                {badge}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BadgeList;