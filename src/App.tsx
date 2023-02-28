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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="gray"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-10 w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex w-full h-10 my-3">
                <a className="w-full h-10" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="gray"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
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
