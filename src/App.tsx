import React from 'react';
import CheatCard from './components/CheatCard';
import { cheatsheetData } from './data/cheatsheetData';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>JavaScript Cheatsheet</h1>
      {cheatsheetData.map((item, index) => (
        <CheatCard key={index} item={item} />
      ))}
    </div>
  );
};

export default App;
