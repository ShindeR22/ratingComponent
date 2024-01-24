import { SubmitButton, NumButton, StarButton } from "./Button";
function Index({ setSubmit, setNumId, numId, setAlert }) {
  return (
    <>
      <div className="flex">
        <StarButton />
      </div>

      <div className="flex flex-col text-left mt-3 ">
        <h1 className="font-bold text-[15px] text-[#e7e6e4] md:text-[25px] ">
          How did we do?
        </h1>
        <p className="font-normal text-sm leading-tight mt-2 text-[#aaa59e] md:text-lg md:mt-4">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <NumButton numId={setNumId} />
      <SubmitButton
        PropsSubmit="SUBMIT"
        againsubmit={setSubmit}
        num={numId}
        alert={setAlert}
      />
    </>
  );
}
export default Index;
