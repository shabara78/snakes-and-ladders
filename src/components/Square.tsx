import React from 'react';
import { Player } from './Player';

interface SquareProps {
  number: number;
  hasPlayer1: boolean;
  hasPlayer2: boolean;
}

export function Square({ number, hasPlayer1, hasPlayer2 }: SquareProps) {
  return (
    <div className="relative w-14 h-14 border border-blue-200 flex items-center justify-center bg-white">
      <span className="text-sm text-gray-600">{number}</span>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {hasPlayer1 && <Player number={1} />}
        {hasPlayer2 && <Player number={2} />}
      </div>
    </div>
  );
}