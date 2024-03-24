import { useState } from "react";
import BillInput from "./BillInput";
import Output from "./Output";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  return (
    <div>
      <header>
        <br />
        <br />
      </header>
      <div className="tipCalculator">
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
          How did you like the service?{" "}
        </SelectPercentage>
        <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
          How did your friend like the service?{" "}
        </SelectPercentage>
        <Output bill={bill} />
        <Reset />
      </div>
    </div>
  );
}
