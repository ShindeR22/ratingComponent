import { useState } from "react";
import star from "/icon-star.svg";

export function NumButton({ numId }) {
  const [numColor, setNumColor] = useState(true);
  const number = [
    { num: "1", id: "001" },
    { num: "2", id: "002" },
    { num: "3", id: "003" },
    { num: "4", id: "004" },
    { num: "5", id: "005" }
  ];

  function handleNumButton(id, num) {
    setNumColor(id);
    numId(num);
  }
  return (
    <div>
      {number.map((num) => (
        <button
          className={`rounded-full mt-6 w-[40PX] h-[40px] ml- mr-2  md:h-[50px] md:w-[50px] md:mt-6 ${
            numColor === num.id ? "bg-[#a45720]" : "bg-[#121417]"
          } hover:bg-[#959eac]`}
          onClick={() => handleNumButton(num.id, num.num)}
          key={num.id}
        >
          {num.num}
        </button>
      ))}
    </div>
  );
}

export function SubmitButton({ PropsSubmit, againsubmit, num, alert }) {
  function handleSubmitButton() {
    if (num >= 1) {
      againsubmit(false);
    } else {
      // againsubmit(true);
      alert(true);
    }
  }
  return (
    <button
      className="rounded-r-full rounded-l-full h-10 w-full mt-6 bg-[#a45720] hover:bg-[#1a1a1a] hover:text-[hsl(25, 97%, 53%)] "
      onClick={handleSubmitButton}
    >
      {PropsSubmit}
    </button>
  );
}
export function StarButton() {
  return (
    <button className="rounded-full w-[50px] h-[50px] justify-center px-4 py-2 hover:cursor-default md:w-[70px] md:h-[70px] ">
      <img src={star} alt="" className="md:w-20" />
    </button>
  );
}

export function ThankYouButton({ num }) {
  const [getId, setGetId] = useState();
  return (
    <button className="text-xs text-[#a45720] h-8 w-3/5 rounded-r-full rounded-l-full mt-4 md:text-lg md:mt-6 md:h-10">
      You selected {num} out of 5
    </button>
  );
}

export function AlertButton({ againSubmit, alert }) {
  function handleAlert() {
    againSubmit(true);
    alert(false);
  }

  return (
    <button
      className="w-[50px] h-[30px] bg-blue-800 border-[2px] m-4"
      onClick={handleAlert}
    >
      OK
    </button>
  );
}
