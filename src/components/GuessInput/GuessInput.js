import React from "react";

function GuessInput({ handleGuessSubmit, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  // Always use handler
  function submitHandler(event) {
    event.preventDefault();
    setGuess("");

    // push guess to parent component.
    handleGuessSubmit(guess);

    console.log({ guess });
  }
  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        autoFocus
        required
        disabled={gameStatus != "running" ? true : false}
        
        // Regular expression syntax should include the letter limination.
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={5}
        // Add "title" for error feedback
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          const nexeGuess = event.target.value.toUpperCase();
          setGuess(nexeGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
