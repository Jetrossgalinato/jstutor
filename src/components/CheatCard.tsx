import React from 'react';
import { CheatItem } from '../types';

type Props = {
  item: CheatItem;
};

const CheatCard: React.FC<Props> = ({ item }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px', background: '#fff' }}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <pre style={{ background: '#f4f4f4', padding: '0.5rem', borderRadius: '4px', overflowX: 'auto' }}>
        <code>{item.code}</code>
      </pre>
      <details style={{ marginTop: '0.5rem' }}>
        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Explanation</summary>
        <pre style={{ background: '#eef6fa', padding: '0.5rem', borderRadius: '4px', whiteSpace: 'pre-wrap' }}>
          {item.explanation}
        </pre>
      </details>
    </div>
  );
};

export default CheatCard;