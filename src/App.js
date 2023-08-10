

import React, { useState } from 'react';
import ChooseOrQuiz from './components/ChooseOrQuiz';
import ClassList from './components/ClassList';
import Quiz from './components/Quiz';
import { generateStats } from './utils';

function App() {
  const [step, setStep] = useState('chooseOrQuiz'); // or 'classList' or 'quiz'
  const [chosenClass, setChosenClass] = useState(null);

  const handleChoice = choice => {
    setStep(choice);
  };

  const handleClassSelect = characterClass => {
    setChosenClass(characterClass);
    // Generate stats and save (just logging for now)
    console.log({
      className: characterClass.name,
      stats: {
        strength: generateStats(),
        dexterity: generateStats(),
        constitution: generateStats(),
        intelligence: generateStats(),
        wisdom: generateStats(),
        charisma: generateStats(),
      }
    });
  };

  const handleQuizComplete = characterClass => {
    handleClassSelect(characterClass);
  };

  return (
    <div>
      {step === 'chooseOrQuiz' && <ChooseOrQuiz onChoice={handleChoice} />}
      {step === 'choose' && <ClassList onClassSelect={handleClassSelect} />}
      {step === 'quiz' && <Quiz onQuizComplete={handleQuizComplete} />}
    </div>
  );
}

export default App;
