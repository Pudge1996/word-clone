import React from "react";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";

function Cell({ letter, status }) {
  // 3: get the {letter} from result
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ value, answer, guesses }) {
  // 3: pass value to checker
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {/* Split value as a sparate individual, and map them. */}
      {/* Due to the game rule, we can set limition as 5 */}
      {range(5).map((num) => (
        <Cell 
        key={num}
        letter={result ? result[num].letter : undefined}
        status={result ? result[num].status : undefined}
         />
      ))}
    </p>
  );
}

export default Guess;
