import { useState } from "react";
import "./App.css";
import Index2 from "./components/Index2";
import Index from "./components";
import Alert from "./components/alert";

function App() {
  const [submit, setSubmit] = useState(true);
  const [numId, setNumId] = useState();
  const [alert, setAlert] = useState(false);

  return (
    <>
      <div className="  bg-[#252d37] w-[300px] md:w-[400px] min-h-[300px] rounded-2xl p-5 md:h-[450px]  md:p-7  ">
        {alert ? (
          <Alert setSubmit={setSubmit} setAlert={setAlert} />
        ) : submit ? (
          <Index
            setSubmit={setSubmit}
            setNumId={setNumId}
            numId={numId}
            setAlert={setAlert}
          />
        ) : (
          <Index2 numId={numId} />
        )}
        {}
      </div>
    </>
  );
}

export default App;
