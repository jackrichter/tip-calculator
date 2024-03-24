import React from "react";

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay ${Math.round(bill + tip)} ({bill === "" ? `$0 + $0 tip` : `$${bill} + $${tip} tip`})
      </h3>
    </div>
  );
}

export default Output;
