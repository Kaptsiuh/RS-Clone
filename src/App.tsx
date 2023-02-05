import { FC } from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";

const App: FC = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-8">
      <div className="bg-black text-white col-start-1 col-end-3 min-h-screen">
        Nurlan
      </div>
      <div className="bg-red-500 col-start-3 col-end-9">
        <div className="w-full h-20 bg-gray-200 shadow-2xl flex items-center">
          <input
            type="text"
            placeholder="What are you working on?"
            className="text-gray-600 bg-gray-200 w-5/6 ml-10"
          />
          <span className="w-1/12">ico</span>
          <span className="w-1/12">ico</span>
          <span className="w-1/12">ico</span>
          <span className="w-1/12">timer</span>
          <button className="w-1/12">play</button>
          <span className="w-1/12">toggle</span>
        </div>
        <div className="w-full h-20 bg-gray-100 flex items-center justify-around">
          <h2>period</h2>
          <h2>period total</h2>
          <h2>period time</h2>
          <button>left</button>
          <div>schedule</div>
          <button>right</button>
        </div>
        <div className="w-full h-20 bg-gray-100 flex items-center justify-center">
          <div>progress bar</div>
        </div>
      </div>
    </div>
  );
};

export default App;
