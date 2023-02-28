import { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { toHHMMSS } from "../utils/toHHMMSS";

type TimerProps = {
  onStart: () => void;
  onStop: () => void;
};

const Timer: FC<TimerProps> = ({ onStart, onStop }) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);

  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    let id: number | undefined;

    if (isStarted) {
      onStart();
      id = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      onStop();
      clearInterval(id);
      setSeconds(() => 0);
    }

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
