import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);
  const count = guesses.length;

  // receive {guess} from <GuessInput />
  function handleGuessSubmit(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= 6) {
      setGameStatus("lost");
    }
  }

  function restart() {
    setGuesses([]);
    setGameStatus("running");
  }

  return (
    <>
      {gameStatus}
      <button onClick={restart}> Restart </button>

      {/* 3: pass the {answer} to <Guess /> */}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        gameStatus={gameStatus}
      />
      {/* {gameStatus != "running" && <Ending gameStatus={gameStatus} answer={answer} count={count} />} */}
      {gameStatus === "won" && <WonBanner count={count} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
