import { FC } from "react";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="grid grid-cols-8">
      <div className="bg-black text-white col-start-1 col-end-3 min-h-screen">
        Nurlan
      </div>
      <div className="bg-red-500 col-start-3 col-end-9">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
