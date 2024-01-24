import logo from "/illustration-thank-you.svg";
import { ThankYouButton } from "./Button";
function Index2({ numId }) {
  return (
    <>
      <img
        src={logo}
        alt="Thank You Illustration"
        className=" flex justify-center ml-12  h-[95px] md:ml-20 md:h-[125px]"
      />
      <ThankYouButton num={numId} />
      <h1 className="text-2xl mt-3 text-[#e7e6e4] md:mt-6 md:text-5xl ">
        Thank you!
      </h1>
      <p className="text-[15px] mt-3  text-[#aaa59e] md:mt-6 md:text-[20px]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
}
export default Index2;
