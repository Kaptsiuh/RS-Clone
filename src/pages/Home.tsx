import { FC } from "react";
import DateTodo from "../components/DateTodo";
import Progress from "../components/Progress";
import Timer from "../components/Timer";

const Home: FC = () => {
  return (
    <>
      <div className="w-full h-20 bg-gray-200 shadow-md flex items-center">
        <input
          type="text"
          placeholder="What are you working on?"
          className="text-gray-600 bg-gray-200 w-5/6 ml-10"
        />
        <Timer />
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
      <div className="flex-auto"></div>
      <footer className="bg-gray-500">
        <div className="container text-white flex items-center justify-around  max-md:flex-col ">
          <div className="hover:text-orange-500 transition-colors font-bold">
            <a href="https://rs.school/js/">RS School</a>
          </div>
          <div className="flex">
            <a
              href="https://github.com/Kaptsiuh"
              className="flex m-4 items-center hover:text-orange-500 transition-colors"
            >
              <img
                src="../src/assets/github.svg"
                alt="github"
                className="w-6 m-2"
              />
              <p>Kaptsiuh</p>
            </a>
            <a
              href="https://github.com/kovalev-ds"
              className="flex m-4 items-center hover:text-orange-500 transition-colors"
            >
              <img
                src="../src/assets/github.svg"
                alt="github"
                className="w-6 m-2"
              />
              kovalev-ds
            </a>
            <a
              href="https://github.com/flopinski"
              className="flex m-4 items-center hover:text-orange-500 transition-colors"
            >
              <img
                src="../src/assets/github.svg"
                alt="github"
                className="w-6 m-2"
              />
              flopinski
            </a>
          </div>
          <div>© toggl.track-clone 2022</div>
        </div>
      </footer>
    </>
  );
};

export default Home;
