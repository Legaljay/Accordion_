import { useState } from "react";
import Accordion from "./components/Accordion";
import { Bill } from "./components/Bill";
import ResetButton from "./components/ResetButton";
import Service from "./components/Service";
import Servicerating from "./components/Servicerating";
import TipCalculator from "./components/Calculator";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  const [bill, setBill] = useState(0)
  const [selectPercent, setSelectPercent] = useState(0)
  const [selectPercent2, setSelectPercent2] = useState(0)

  function handleReset(){
    setBill(0)
    setSelectPercent(0)
    setSelectPercent2(0)
  }

  return (
    <div>
      <Accordion data={faqs}/>
      <div className="checkout">
        <Bill bill={bill} onSetBill={setBill}/>
        <Service selectPercent={selectPercent} onSelect={setSelectPercent}>How did you like the service?</Service>
        <Servicerating selectPercent2={selectPercent2} onSelect={setSelectPercent2}>How did your friend like the service?</Servicerating>
        {
          bill > 0 && 
          <>
            <TipCalculator bill={bill} selectPercent={selectPercent} selectPercent2={selectPercent2}/>
            <ResetButton
                handleReset={handleReset}
            >Reset</ResetButton>
          </>
        }
      </div>
    </div>
  );
}


