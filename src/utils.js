export function generateStats() {
    const rollDice = () => Math.floor(Math.random() * 6) + 1;
  
    let rolls = [rollDice(), rollDice(), rollDice(), rollDice()];
    rolls.sort((a, b) => a - b);
    rolls.shift(); // Remove the lowest roll
    return rolls.reduce((acc, curr) => acc + curr, 0);
  }