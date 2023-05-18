import React, { useState } from 'react';

export default function  Toggle() {
  const [selected, setSelected] = useState('light');

  return (
    <div className="flex items-center">
      <div
        className={`w-12 h-6 rounded-full border  ${
          selected === 'light' ? 'bg-white' : 'bg-gray-300'
        }`}
        onClick={() => setSelected('light')}
        data-toggle-theme="emerald"
      />
      <div
        className={`w-12 h-6 rounded-full ${
          selected === 'gray' ? 'bg-gray-700/90' : 'bg-gray-300'
        } ml-2`}
        onClick={() => setSelected('gray')}
        data-toggle-theme="business"
      />
      <div
        className={`w-12 h-6 rounded-full ${
          selected === 'retro' ? 'bg-purple-800' : 'bg-gray-300'
        } ml-2`}
        onClick={() => setSelected('retro')}
      />
    </div>
  );
}