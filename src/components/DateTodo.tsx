import { FC } from "react";
import { Task } from "../store/taskStore";

type DateTodoProps = {
  item: Task;
};

let now = new Date().toLocaleDateString();

const DateTodo: FC<DateTodoProps> = (props) => {
  const {
    item: { id, title, startTimestamp, endTimestamp },
  } = props;

  let start = new Date(startTimestamp).toLocaleTimeString();
  let end = new Date(endTimestamp).toLocaleTimeString();
  let all = new Date(
    endTimestamp - startTimestamp - 3600000
  ).toLocaleTimeString();

  return (
    <div className="bg-gray-200 shadow-md p-2 mb-2">
      <div className="flex justify-between">
        <h2>{now}</h2>
        <span className="w-1/12">All time</span>
      </div>
      <div className="flex justify-between">
        <div>
          <span className="mr-6">Play</span>
          <span className="ml-20">{title}</span>
        </div>
        <div>
          <span className="text-xs">{start}</span>
          <span className="mx-1">-</span>
          <span className="text-xs">{end}</span>
          <span className="text-base ml-6 mr-10">{all}</span>
        </div>
      </div>
    </div>
  );
};

export default DateTodo;
