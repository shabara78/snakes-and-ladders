import React from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

interface DiceProps {
  value: number;
  isRolling: boolean;
  onRoll: () => void;
}

export function Dice({ value, isRolling, onRoll }: DiceProps) {
  const DiceIcon = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6][value - 1] || Dice1;

  return (
    <button
      onClick={onRoll}
      disabled={isRolling}
      className={`p-4 bg-white rounded-lg shadow-md transition-transform ${
        isRolling ? 'animate-bounce' : 'hover:scale-110'
      }`}
    >
      <DiceIcon className="w-12 h-12" />
    </button>
  );
}