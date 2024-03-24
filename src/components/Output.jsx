import React from "react";

function Output({ bill }) {
  return (
    <div>
      <h3>You pay X ({bill === "" ? `$0 + $B tip` : `$${bill} + $B tip`})</h3>
    </div>
  );
}

export default Output;
