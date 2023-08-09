// src/components/ChooseOrQuiz.js

import React from 'react';

function ChooseOrQuiz({ onChoice }) {
  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={() => onChoice('choose')}>Choose a class</button>
      <button onClick={() => onChoice('quiz')}>Take the character quiz</button>
    </div>
  );
}

export default ChooseOrQuiz;
