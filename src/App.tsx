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
        <div className="w-full h-20 bg-blue-300">Dima</div>
      </div>
    </div>
  );
};

export default App;
