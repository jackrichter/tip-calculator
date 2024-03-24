import BillInput from "./BillInput";
import Output from "./Output";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";

export default function TipCalculator() {
  return (
    <div>
      <header>
        <br />
        <br />
      </header>
      <div className="tipCalculator">
        <BillInput />
        <SelectPercentage>How did you like the service? </SelectPercentage>
        <SelectPercentage>How did your friend like the service? </SelectPercentage>
        <Output />
        <Reset />
      </div>
    </div>
  );
}
