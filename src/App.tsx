import React from 'react';
import { Board } from './components/Board';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Snakes & Ladders</h1>
      <Board />
    </div>
  );
}

export default App;