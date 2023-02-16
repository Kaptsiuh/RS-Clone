import { FC } from "react";

const DateTodo: FC = () => {
  return (
    <div className="bg-gray-200 shadow-md p-2">
      <div className="flex justify-between">
        <h2>Date</h2>
        <span className="w-1/12">All time</span>
      </div>
      <div className="flex justify-between">
        <div>
          <span className="mr-6">Play</span>
          <span>Name project</span>
        </div>
        <div>
          <span>8:00 PM</span>
          <span className="mx-1">-</span>
          <span>8:00 PM</span>
          <span className="text-base ml-6">time</span>
        </div>
      </div>
    </div>
  );
};

export default DateTodo;
