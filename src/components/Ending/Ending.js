import React from "react";

function Ending({ count, gameStatus, answer }) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {count} guesses</strong>.
        </p>
      </div>
    );
  } else if (gameStatus === "lose") {
    return (
      <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
    )
  }
}

export default Ending;
