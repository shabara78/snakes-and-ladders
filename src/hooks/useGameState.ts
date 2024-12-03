import { useState, useCallback } from 'react';
import { snakesAndLadders } from '../utils/gameConfig';

export function useGameState() {
  const [playerPositions, setPlayerPositions] = useState([1, 1]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [gameWinner, setGameWinner] = useState<number | null>(null);

  const movePlayer = useCallback((newPosition: number) => {
    const finalPosition = snakesAndLadders[newPosition] || newPosition;
    
    setPlayerPositions(prev => {
      const newPositions = [...prev];
      newPositions[currentPlayer - 1] = finalPosition;
      return newPositions;
    });

    if (finalPosition === 100) {
      setGameWinner(currentPlayer);
    } else {
      setCurrentPlayer(current => (current === 1 ? 2 : 1));
    }
  }, [currentPlayer]);

  const rollDice = useCallback(() => {
    if (isRolling || gameWinner) return;

    setIsRolling(true);
    const rollInterval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(rollInterval);
      setIsRolling(false);
      
      const finalDiceValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(finalDiceValue);

      const currentPos = playerPositions[currentPlayer - 1];
      const newPosition = Math.min(currentPos + finalDiceValue, 100);
      movePlayer(newPosition);
    }, 1000);
  }, [currentPlayer, isRolling, playerPositions, gameWinner, movePlayer]);

  return {
    playerPositions,
    currentPlayer,
    diceValue,
    isRolling,
    gameWinner,
    rollDice
  };
}