import React from 'react';
import { Task } from './types';
import { 
  Puzzle, 
  ArrowRight, 
  ArrowUp, 
  Zap, 
  Search, 
  Layers, 
  Umbrella, 
  Sun,
  Lightbulb,
  Repeat
} from 'lucide-react';

export const TASKS: Task[] = [
  {
    id: 1,
    title: "Completar el Patrón",
    instruction: "¿Qué fruta sigue en la fila?",
    type: 'pattern',
    visualPrompt: (
      <div className="flex gap-4 text-6xl">
        <span>🍎</span>
        <span>🍌</span>
        <span>🍎</span>
        <span>🍌</span>
        <span className="animate-pulse bg-gray-200 rounded-lg w-16 h-16 flex items-center justify-center">?</span>
      </div>
    ),
    options: [
      { id: 'opt1', label: '🍎', isCorrect: true, color: 'bg-red-100' },
      { id: 'opt2', label: '🍇', isCorrect: false, color: 'bg-purple-100' },
      { id: 'opt3', label: '🍌', isCorrect: false, color: 'bg-yellow-100' },
    ],
    correctAnswerId: 'opt1',
    hint: "Mira los colores: Rojo, Amarillo, Rojo, Amarillo... ¿Cuál toca ahora?",
    csExplanation: "¡Eso es RECONOCIMIENTO DE PATRONES! A las computadoras les encanta encontrar patrones para predecir qué va a pasar después.",
    badgeName: "Detective de Patrones"
  },
  {
    id: 2,
    title: "Clasificar Objetos",
    instruction: "Selecciona el que NO es un animal.",
    type: 'sorting',
    visualPrompt: (
      <div className="text-center mb-4">
        <p className="text-xl text-gray-600">¡Busca al intruso!</p>
      </div>
    ),
    options: [
      { id: 'opt1', label: '🐶', isCorrect: false, color: 'bg-orange-100' },
      { id: 'opt2', label: '🚗', isCorrect: true, color: 'bg-blue-100' },
      { id: 'opt3', label: '🐱', isCorrect: false, color: 'bg-yellow-100' },
      { id: 'opt4', label: '🐸', isCorrect: false, color: 'bg-green-100' },
    ],
    correctAnswerId: 'opt2',
    hint: "Tres de estos tienen patas y hacen sonidos de animales. Uno tiene ruedas.",
    csExplanation: "¡Eso es CLASIFICACIÓN! Las computadoras organizan la información en grupos para encontrarla rápido.",
    badgeName: "Maestro del Orden"
  },
  {
    id: 3,
    title: "El Robot Castor",
    instruction: "Ayuda al robot a llegar a la madera. ¿Qué flecha falta?",
    type: 'sequence',
    visualPrompt: (
      <div className="flex flex-col items-center gap-2">
        <div className="grid grid-cols-3 gap-2 bg-gray-200 p-4 rounded-xl">
          <div className="bg-white p-2 rounded text-4xl">🤖</div>
          <div className="bg-blue-200 p-2 rounded text-4xl opacity-50">➡️</div>
          <div className="bg-white p-2 rounded text-4xl">🪵</div>
        </div>
      </div>
    ),
    options: [
      { id: 'opt1', label: '⬆️', isCorrect: false, color: 'bg-gray-100' },
      { id: 'opt2', label: '➡️', isCorrect: true, color: 'bg-blue-100' },
      { id: 'opt3', label: '⬇️', isCorrect: false, color: 'bg-gray-100' },
    ],
    correctAnswerId: 'opt2',
    hint: "El robot está a la izquierda y la madera a la derecha. ¿Hacia dónde debe caminar?",
    csExplanation: "¡Eso es un ALGORITMO! Son pasos ordenados que le damos a una computadora para resolver un problema.",
    badgeName: "Guía de Robots"
  },
  {
    id: 4,
    title: "Lógica del Clima",
    instruction: "Si está lloviendo, ¿qué necesitas llevar?",
    type: 'logic',
    visualPrompt: (
      <div className="flex items-center gap-4 text-6xl">
        <span>🌧️</span>
        <ArrowRight className="text-gray-400" size={48} />
        <span className="bg-gray-200 w-20 h-20 rounded-xl flex items-center justify-center text-4xl">?</span>
      </div>
    ),
    options: [
      { id: 'opt1', label: '🕶️', isCorrect: false, color: 'bg-yellow-100' },
      { id: 'opt2', label: '☂️', isCorrect: true, color: 'bg-purple-100' },
      { id: 'opt3', label: '🍦', isCorrect: false, color: 'bg-pink-100' },
    ],
    correctAnswerId: 'opt2',
    hint: "El agua te mojará. ¿Qué objeto te protege del agua?",
    csExplanation: "¡Eso es LÓGICA CONDICIONAL! 'SI llueve, ENTONCES paraguas'. Así toman decisiones las computadoras.",
    badgeName: "Sabio del Clima"
  },
  {
    id: 5,
    title: "Depuración (Arreglar)",
    instruction: "¡Oh no! La secuencia para cepillarse los dientes está mal. ¿Cuál es el primer paso?",
    type: 'debugging',
    visualPrompt: (
      <div className="flex gap-2 text-4xl opacity-50 mb-2">
        <span>?</span> ➡️ <span>🦷</span> ➡️ <span>✨</span>
      </div>
    ),
    options: [
      { id: 'opt1', label: '🪥', isCorrect: true, color: 'bg-green-100' },
      { id: 'opt2', label: '😴', isCorrect: false, color: 'bg-blue-100' },
      { id: 'opt3', label: '🚲', isCorrect: false, color: 'bg-red-100' },
    ],
    correctAnswerId: 'opt1',
    hint: "Antes de cepillar, necesitas agarrar una herramienta.",
    csExplanation: "¡Eso es DEPURACIÓN! Encontraste el error y lo arreglaste. Es una súper habilidad informática.",
    badgeName: "Mecánico de Ideas"
  },
  {
    id: 6,
    title: "Abstracción (Sombras)",
    instruction: "¿Cuál es la sombra de este objeto?",
    type: 'pattern',
    visualPrompt: (
      <div className="text-8xl mb-4">
        🦒
      </div>
    ),
    options: [
      { id: 'opt1', label: '🐈', isCorrect: false, color: 'bg-white', contentClassName: 'brightness-0 opacity-60' },
      { id: 'opt2', label: '🦒', isCorrect: true, color: 'bg-white', contentClassName: 'brightness-0 opacity-60' },
      { id: 'opt3', label: '🐘', isCorrect: false, color: 'bg-white', contentClassName: 'brightness-0 opacity-60' },
    ],
    correctAnswerId: 'opt2',
    hint: "Busca el cuello largo.",
    csExplanation: "¡Eso es ABSTRACCIÓN! Las computadoras a veces ignoran los detalles (como el color) y solo ven la forma importante.",
    badgeName: "Ninja de las Sombras"
  },
  {
    id: 7,
    title: "Códigos Secretos",
    instruction: "Si Correr es ➡️ y Dormir es ⬇️... ¿Cuál es el código secreto para SALTAR?",
    type: 'sequence',
    visualPrompt: (
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border-2 border-dashed border-gray-300">
          <span className="text-xl font-bold text-gray-500 mb-2 block text-center">Libro de Códigos</span>
          <div className="grid grid-cols-1 gap-3 text-2xl">
            <div className="flex items-center gap-4 bg-gray-50 p-2 rounded">
                <span>🏃 Correr</span> <span>=</span> <span>➡️</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-2 rounded">
                <span>😴 Dormir</span> <span>=</span> <span>⬇️</span>
            </div>
            <div className="flex items-center gap-4 bg-yellow-50 p-2 rounded border-2 border-yellow-200">
                <span>🤸 Saltar</span> <span>=</span> <span className="font-bold text-3xl text-orange-500 animate-pulse">?</span>
            </div>
          </div>
        </div>
      </div>
    ),
    options: [
      { id: 'opt1', label: '⬇️', isCorrect: false, color: 'bg-red-100' },
      { id: 'opt2', label: '⬆️', isCorrect: true, color: 'bg-green-100' },
      { id: 'opt3', label: '➡️', isCorrect: false, color: 'bg-blue-100' },
    ],
    correctAnswerId: 'opt2',
    hint: "Piensa en el movimiento: Para dormir te tumbas (abajo), para saltar vas hacia...",
    csExplanation: "¡Eso es CODIFICACIÓN! Convertimos acciones reales en símbolos lógicos.",
    badgeName: "Agente Secreto"
  },
  {
    id: 8,
    title: "Bucles (Repetición)",
    instruction: "Sigue el ritmo: Palmada, Palmada, Salto. Palmada, Palmada... ¿Qué sigue?",
    type: 'pattern',
    visualPrompt: (
      <div className="flex gap-2 text-5xl items-center">
        <span>👏</span><span>👏</span><span>⏫</span>
        <div className="w-1 h-12 bg-gray-300 mx-2"></div>
        <span>👏</span><span>👏</span><span className="animate-bounce">?</span>
      </div>
    ),
    options: [
      { id: 'opt1', label: '👏', isCorrect: false, color: 'bg-yellow-100' },
      { id: 'opt2', label: '⏫', isCorrect: true, color: 'bg-green-100' },
      { id: 'opt3', label: '💤', isCorrect: false, color: 'bg-blue-100' },
    ],
    correctAnswerId: 'opt2',
    hint: "Es un ciclo que se repite. Después de dos palmadas viene...",
    csExplanation: "¡Eso es un BUCLE! Las computadoras son geniales repitiendo cosas una y otra vez sin cansarse.",
    badgeName: "DJ del Bucle"
  },
  {
    id: 9,
    title: "Estados (Binario)",
    instruction: "Para que la bombilla encienda, el interruptor debe estar...",
    type: 'logic',
    visualPrompt: (
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center">
           <span className="text-6xl mb-2 text-gray-300">💡</span>
           <span className="text-sm font-bold text-gray-400">OFF (Apagado)</span>
        </div>
        <div className="w-px h-24 bg-gray-300"></div>
        <div className="flex flex-col items-center">
           <span className="text-6xl mb-2 text-yellow-400 drop-shadow-xl filter">💡</span>
           <span className="text-sm font-bold text-green-600">ON (Encendido)</span>
        </div>
      </div>
    ),
    options: [
      { id: 'opt1', label: '🔴 OFF', isCorrect: false, color: 'bg-red-100' },
      { id: 'opt2', label: '🟢 ON', isCorrect: true, color: 'bg-green-100' },
    ],
    correctAnswerId: 'opt2',
    hint: "Queremos luz. Mira el dibujo de la derecha.",
    csExplanation: "¡Eso es BINARIO! Las computadoras en el fondo solo entienden dos cosas: Encendido (1) y Apagado (0).",
    badgeName: "Ingeniero de Luz"
  },
  {
    id: 10,
    title: "Optimización",
    instruction: "¿Qué camino es más corto para llegar a la fresa?",
    type: 'logic',
    visualPrompt: (
      <div className="relative w-64 h-32 bg-green-50 rounded-xl border-2 border-green-200 overflow-hidden">
        <div className="absolute left-2 top-12 text-4xl">🐜</div>
        <div className="absolute right-2 top-12 text-4xl">🍓</div>
        {/* Long path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path d="M 40 60 Q 80 10 120 60 T 200 60" stroke="#EF4444" strokeWidth="4" fill="none" strokeDasharray="5,5" />
            <path d="M 40 60 L 200 60" stroke="#3B82F6" strokeWidth="4" fill="none" strokeDasharray="5,5" />
        </svg>
      </div>
    ),
    options: [
      { id: 'opt1', label: 'El Curvo (Rojo)', isCorrect: false, color: 'bg-red-100' },
      { id: 'opt2', label: 'El Recto (Azul)', isCorrect: true, color: 'bg-blue-100' },
    ],
    correctAnswerId: 'opt2',
    hint: "Imagina que estiras una cuerda. ¿Cuál gastaría menos cuerda?",
    csExplanation: "¡Eso es OPTIMIZACIÓN! Las computadoras siempre intentan encontrar la manera más rápida de hacer el trabajo.",
    badgeName: "Corredor Veloz"
  }
];

export const BADGE_ICONS: Record<string, React.ReactNode> = {
  "Detective de Patrones": <Search className="w-8 h-8 text-white" />,
  "Maestro del Orden": <Layers className="w-8 h-8 text-white" />,
  "Guía de Robots": <ArrowUp className="w-8 h-8 text-white" />,
  "Sabio del Clima": <Umbrella className="w-8 h-8 text-white" />,
  "Mecánico de Ideas": <Puzzle className="w-8 h-8 text-white" />,
  "Ninja de las Sombras": <Sun className="w-8 h-8 text-white" />,
  "Agente Secreto": <Search className="w-8 h-8 text-white" />,
  "DJ del Bucle": <Repeat className="w-8 h-8 text-white" />,
  "Ingeniero de Luz": <Zap className="w-8 h-8 text-white" />,
  "Corredor Veloz": <Lightbulb className="w-8 h-8 text-white" />,
};