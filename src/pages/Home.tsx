import { FC, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { Task, useTaskStore } from "../store/taskStore";

import DateTodo from "../components/DateTodo";
import Progress from "../components/Progress";
import Timer from "../components/Timer";
import Footer from "../components/Footer";

const initialTask: Task = {
  id: "",
  title: "",
  startTimestamp: 0,
  endTimestamp: 0,
};

const Home: FC = () => {
  const { tasks, addTask } = useTaskStore();

  const [task, updateTask] = useReducer(
    (prev: Task, next: Partial<Task>) => ({ ...prev, ...next }),
    initialTask
  );

  useEffect(() => {
    if (task.endTimestamp) {
      addTask(task);
      updateTask(initialTask);
    }
  }, [task]);

  return (
    <>
      <div className="w-full h-20 bg-gray-200 shadow-md flex items-center">
        <input
          type="text"
          value={task.title}
          onChange={(e) => updateTask({ title: e.target.value })}
          placeholder="What are you working on?"
          className="text-gray-600 bg-gray-200 w-5/6 ml-10"
        />
        <Timer
          onStart={() =>
            updateTask({ id: uuidv4(), startTimestamp: Date.now() })
          }
          onStop={() => updateTask({ endTimestamp: Date.now() })}
        />
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
      <div className="flex-auto">
        {tasks.map((task, i) => (
          <DateTodo item={task} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
