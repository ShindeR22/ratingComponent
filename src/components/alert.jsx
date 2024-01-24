import { IoMdCloseCircleOutline } from "react-icons/io";
import { AlertButton } from "./Button";

function Alert({ setSubmit, setAlert }) {
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-full h-2/5 bg-[#121417] ">
        <IoMdCloseCircleOutline className="text-red-700 " size={64} />
        <p>Please select an option before proceeding.</p>
        <AlertButton againSubmit={setSubmit} alert={setAlert} />
      </div>
    </>
  );
}
export default Alert;
