import { useEffect, useState } from "react";
import clsx from "clsx";

import { toHHMMSS } from "../utils/toHHMMSS";

const Timer = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let id: number | undefined;
    if (isStarted) {
      id = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(id);
      setSeconds(() => 0);
    }

    console.log(Date.now());

    return () => {
      clearInterval(id);
    };
  }, [isStarted]);

  return (
    <>
      <span className="w-1/12">{toHHMMSS(seconds)}</span>
      <div className="bg-gray-300 m-4 rounded-full">
        <button
          className={clsx(
            "bg-green-500 hover:bg-green-400 text-white m-[4px] w-[44px] h-[42px] rounded-full transition-all",
            isStarted && "bg-red-500 hover:bg-red-400"
          )}
          onClick={() => setIsStarted((prev) => !prev)}
        >
          {isStarted ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
};

export default Timer;
