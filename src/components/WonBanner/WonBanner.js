import React from "react";
import Banner from "../Banner";

function WonBanner({count}) {
  return (
    <Banner status="won">
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {count} guesses</strong>.
        </p>
      </div>
    </Banner>
  );
}

export default WonBanner;
