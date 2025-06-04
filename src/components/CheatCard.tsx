import React from 'react';
import { CheatItem } from '../data/cheatsheetData';

type Props = {
  item: CheatItem;
};

const CheatCard: React.FC<Props> = ({ item }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <pre style={{ background: '#f4f4f4', padding: '0.5rem' }}>
        <code>{item.code}</code>
      </pre>
    </div>
  );
};

export default CheatCard;
