import React from "react";
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  // console.log(checkGuess);
  return (
    <div className="guess-results">
      {/* limit the maximum row */}
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        // Pass items to <Guess />
        // 3: pass the {answer} to <Guess />
        <Guess key={num} value={guesses[num]} guesses={guesses} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
