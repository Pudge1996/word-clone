import React from "react";

function GuessInput() {
  const [guess, segGuess] = React.useState('');
  
  // Always use handler
  function submitHandler (event) {
    event.preventDefault();
    segGuess('')
      console.log({guess});
  }
  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        
        // Regular expression syntax should include the letter limination.
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={5}

        // Add "title" for error feedback
        title="5 letter word"

        value={guess}
        onChange={event => {
          segGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  );
}

export default GuessInput;
