const Home = () => {
  return (
    <>
      <div className="w-full h-20 bg-gray-200 shadow-2xl flex items-center">
        <input
          type="text"
          placeholder="What are you working on?"
          className="text-gray-600 bg-gray-200 w-5/6 ml-10"
        />
        <span className="w-1/12">0:00:00</span>
        <div className="bg-gray-300 m-4 rounded-full">
          <button className="bg-green-500 hover:bg-green-400 text-white m-[4px] w-[44px] h-[42px] rounded-full transition-all">
            Play
          </button>
        </div>
        <div className="flex flex-col bg-gray-300 m-4 rounded-full">
          <button className="bg-gray-500 hover:bg-gray-700 text-white m-[4px] w-[22px] h-[22px] rounded-full transition-all"></button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white m-[4px] w-[22px] h-[22px] rounded-full transition-all active:bg-gray-700"></button>
        </div>
      </div>
      <div className="w-full h-20 bg-gray-100 flex items-center justify-around text-sm">
        <h2>THIS WEEK</h2>
        <h2 className="pl-[40%]">TOTAL TODAY</h2>
        <span className="w-1/12 text-base">0:00:00</span>
        <h2>WEEK TOTAL</h2>
        <span className="w-1/12 text-base">0:00:00</span>
      </div>
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
    </>
  );
};

export default Home;
