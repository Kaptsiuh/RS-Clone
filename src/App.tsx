import { FC } from "react";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <div className="grid grid-cols-8 h-full">
        <div className="flex text-white col-start-1 col-end-2 min-h-screen">
          <div className="w-full bg-gray-300 h-full flex flex-col justify-between">
            <div>
              <div className="flex w-full h-7 my-2">
                <a className="w-full" href="">
                  <img
                    className="w-full h-7"
                    src="/src/assets/power-on.svg"
                    alt="main page button"
                  />
                </a>
              </div>
              <div className="flex w-full h-20 text-black shrink text-center items-center justify-center border mb-10">
                <div className="w-5/6">USER'S WORKPLACE</div>
              </div>
            </div>

            <div>
              <div className="w-full px-2 flex item-center text-center text-black text-gray-400 font-bold">
                Track
              </div>
              <a
                className="flex w-full h-10 text-black shrink text-center items-center ml-10 hover:text-orange-500 transition-colors"
                href=""
              >
                <div className="w-2/6">Timer</div>
              </a>

              <div className="w-full px-2 flex item-center text-center text-black text-gray-400 font-bold">
                Analyze
              </div>
              <a
                className="flex w-full h-10 text-black shrink text-center items-center ml-10 hover:text-orange-500 transition-colors"
                href=""
              >
                <div className="w-2/6">Reports</div>
              </a>

              <div className="w-full px-2 flex item-center text-center text-gray-400 font-bold">
                Manage
              </div>
              <a
                className="flex w-full h-10 text-black shrink text-center items-center ml-10 hover:text-orange-500 transition-colors"
                href=""
              >
                <div className="w-2/6">Projects</div>
              </a>
            </div>
            <div className="flex">
              <div className="flex w-full h-10 my-4">
                <a className="w-full h-10" href="">
                  <img
                    className="w-full h-6"
                    src="./src/assets/nightmode.svg"
                    alt="nightmode switcher button"
                  />
                </a>
              </div>

              <div className="flex w-full h-10 my-3">
                <a className="w-full h-10" href="">
                  <img
                    className="w-full h-8"
                    src="/src/assets/language.svg"
                    alt="language button"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="w-6/6 h-full bg-gray-100 flex items-center justify-around"></div> */}
        </div>
        <div className="bg-gray-100 col-start-2 col-end-9 min-h-full flex flex-col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
