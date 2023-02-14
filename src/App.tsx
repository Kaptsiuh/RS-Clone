import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="grid grid-cols-8">
      <div className="flex text-white col-start-1 col-end-2 min-h-screen">
        <div className="w-full bg-gray-300 h-full flex flex-col justify-between">
          <div>
            <div className="flex w-full h-10 my-1">
              <a className="w-full" href="">
                <img
                  className="w-full h-10"
                  src="./src/assets/power-on.svg"
                  alt="main page button"
                />
              </a>
            </div>
            <div className="flex w-full h-20 text-black shrink text-center items-center justify-center border mb-10">
              <div className="w-5/6">USER'S WORKPLACE</div>
              {/* <div className="w-1/6">
              <img
                className="w-full h-20"
                src="./src/assets/chevron-down.svg"
                alt="chevron down icon"
              />
            </div> */}
            </div>
          </div>

          <div>
            <div className="w-full px-6 flex item-center text-center text-black text-gray-400 font-bold">
              TRACK
            </div>
            <a
              className="flex w-full h-10 text-black shrink text-center items-center m-3"
              href=""
            >
              <div className="w-1/6">
                <img
                  className="w-full h-20"
                  src="./src/assets/timer.svg"
                  alt="timer icon"
                />
              </div>
              <div className="w-2/6">Timer</div>
            </a>

            <div className="w-full px-6 flex item-center text-center text-black text-gray-400 font-bold">
              ANALYZE
            </div>
            <a
              className="flex w-full h-10 text-black shrink text-center items-center m-3"
              href=""
            >
              <div className="w-1/6">
                <img
                  className="w-full h-20"
                  src="./src/assets/reports.svg"
                  alt="timer icon"
                />
              </div>
              <div className="w-2/6">Reports</div>
            </a>

            <div className="w-full px-6 flex item-center text-center text-gray-400 font-bold">
              MANAGE
            </div>
            <a
              className="flex w-full h-10 text-black shrink text-center items-center m-3"
              href=""
            >
              <div className="w-1/6">
                <img
                  className="w-full h-20"
                  src="./src/assets/projects.svg"
                  alt="timer icon"
                />
              </div>
              <div className="w-2/6">Projects</div>
            </a>
          </div>
          <div>
            <div className="flex w-full h-10 my-1">
              <a className="w-full h-10" href="">
                <img
                  className="w-full h-10"
                  src="./src/assets/nightmode.svg"
                  alt="nightmode switcher button"
                />
              </a>
            </div>

            <div className="flex w-full h-10 my-1">
              <a className="w-full h-10" href="">
                <img
                  className="w-full h-10"
                  src="./src/assets/language.svg"
                  alt="language button"
                />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="w-6/6 h-full bg-gray-100 flex items-center justify-around"></div> */}
      </div>
      <div className="bg-gray-100 col-start-2 col-end-9">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
