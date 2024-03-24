import { useState } from "react";
import BillInput from "./BillInput";
import Output from "./Output";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";

export default function TipCalculator() {
  const [bill, setBill] = useState("");

  return (
    <div>
      <header>
        <br />
        <br />
      </header>
      <div className="tipCalculator">
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercentage>How did you like the service? </SelectPercentage>
        <SelectPercentage>How did your friend like the service? </SelectPercentage>
        <Output bill={bill} />
        <Reset />
      </div>
    </div>
  );
}
