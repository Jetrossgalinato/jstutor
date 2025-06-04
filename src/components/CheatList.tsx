import React from 'react';
import CheatCard from './CheatCard';
import { CheatItem } from '../data/cheatsheetData';

type Props = {
  items: CheatItem[];
};

const CheatList: React.FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <CheatCard key={index} item={item} />
      ))}
    </div>
  );
};

export default CheatList;