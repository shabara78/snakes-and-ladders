import React from 'react';
import { Square } from './Square';
import { Player } from './Player';
import { useGameState } from '../hooks/useGameState';
import { Dice } from './Dice';

export function Board() {
  const { 
    currentPlayer,
    playerPositions,
    diceValue,
    isRolling,
    rollDice,
    gameWinner
  } = useGameState();

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="grid grid-cols-10 gap-1 bg-blue-100 p-4 rounded-lg shadow-lg">
        {Array.from({ length: 100 }, (_, i) => {
          const position = 100 - i;
          return (
            <Square 
              key={position} 
              number={position}
              hasPlayer1={playerPositions[0] === position}
              hasPlayer2={playerPositions[1] === position}
            />
          );
        })}
      </div>
      
      <div className="flex flex-col items-center gap-4">
        {gameWinner ? (
          <div className="text-2xl font-bold text-green-600">
            Player {gameWinner} wins! 🎉
          </div>
        ) : (
          <>
            <div className="text-xl font-semibold">
              Player {currentPlayer}'s turn
            </div>
            <Dice value={diceValue} isRolling={isRolling} onRoll={rollDice} />
          </>
        )}
      </div>
    </div>
  );
}