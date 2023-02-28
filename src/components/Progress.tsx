import { FC } from "react";

const Progress: FC = () => {
  return (
    <div className="p-3 w-full h-[60px] bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col w-[60%]">
        <div className="whitespace-nowrap overflow-hidden">Name progect</div>
        <span className="w-full bg-red-700 h-[5px] rounded-xl"></span>
      </div>
      <div className="flex flex-col w-[32%]">
        <div className="whitespace-nowrap overflow-hidden">Name progect</div>
        <span className="w-full bg-blue-700 h-[5px] rounded-xl"></span>
      </div>
      <div className="flex flex-col w-[8%]">
        <div className="whitespace-nowrap overflow-hidden">Name progect</div>
        <span className="w-full bg-green-700 h-[5px] rounded-xl"></span>
      </div>
    </div>
  );
};

export default Progress;
