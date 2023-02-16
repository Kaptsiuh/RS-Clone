import { FC, useEffect, useState } from "react";
import DateTodo from "../components/DateTodo";
import Progress from "../components/Progress";

const Home: FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHours] = useState(0);

  let timer: number;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      if (minutes === 59) {
        setHours(hour + 1);
        setMinutes(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const stop = () => {
    clearInterval(timer);
  };

  const activeButten = (e: any) => {
    if (e.target.innerHTML === "Play") {
      e.target.innerHTML = "Stop";
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      e.target.classList.add("bg-red-500");
      e.target.classList.remove("bg-green-500");
      e.target.classList.add("hover:bg-red-400");
      e.target.classList.remove("hover:bg-green-400");
    } else {
      e.target.innerHTML = "Play";
      stop();
      e.target.classList.add("bg-green-500");
      e.target.classList.remove("bg-red-500");
      e.target.classList.add("hover:bg-green-400");
      e.target.classList.remove("hover:bg-red-400");
    }
  };

  // const [todos, setTodos] = useState([]);

  // const time = (value: any) => {
  //   if (value) {
  //     setTodos: (value: React.SetStateAction<never[]>) =>
  //       void [...todos, { id: Date.now(), text: value, done: false }];
  //   }
  // };

  return (
    <>
      <div className="w-full h-20 bg-gray-200 shadow-md flex items-center">
        <input
          type="text"
          placeholder="What are you working on?"
          className="text-gray-600 bg-gray-200 w-5/6 ml-10"
        />
        <span className="w-1/12">
          {hour}:{minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </span>
        <div className="bg-gray-300 m-4 rounded-full">
          <button
            className="bg-green-500 hover:bg-green-400 text-white m-[4px] w-[44px] h-[42px] rounded-full transition-all"
            onClick={activeButten}
          >
            Play
          </button>
        </div>
        <div className="flex flex-col bg-gray-300 m-4 rounded-full">
          <button className="bg-gray-500 hover:bg-gray-700 text-white m-[4px] w-[22px] h-[22px] rounded-full transition-all"></button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white m-[4px] w-[22px] h-[22px] rounded-full transition-all active:bg-gray-700"></button>
        </div>
      </div>
      <div className="w-full h-20 flex items-center justify-around text-sm">
        <h2>THIS WEEK</h2>
        <h2 className="pl-[40%]">TOTAL TODAY</h2>
        <span className="w-1/12 text-base">0:00:00</span>
        <h2>WEEK TOTAL</h2>
        <span className="w-1/12 text-base">0:00:00</span>
      </div>
      <Progress />
      <DateTodo />
    </>
  );
};

export default Home;
