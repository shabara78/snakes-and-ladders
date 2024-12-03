import React from 'react';
import { User, User2 } from 'lucide-react';

interface PlayerProps {
  number: number;
}

export function Player({ number }: PlayerProps) {
  return (
    <div className={`absolute ${number === 1 ? 'text-blue-500' : 'text-red-500'}`}>
      {number === 1 ? <User size={20} /> : <User2 size={20} />}
    </div>
  );
}