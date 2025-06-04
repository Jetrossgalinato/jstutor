import React from 'react';
import { cheatsheetData } from '../data/cheatsheetData';
import CheatCard from './CheatCard';

const CheatList: React.FC = () => (
  <div>
    {cheatsheetData.map((item, idx) => (
      <CheatCard key={idx} item={item} />
    ))}
  </div>
);

export default CheatList;