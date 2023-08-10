import React from 'react';
import { characterClasses } from '../data';

function ClassList({ onClassSelect }) {
  return (
    <div>
      <h1>Choose a class</h1>
      {characterClasses.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <p>{character.description}</p>
          <button onClick={() => onClassSelect(character)}>Choose</button>
        </div>
      ))}
    </div>
  );
}

export default ClassList;
