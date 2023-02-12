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
      <div className="w-full h-20 bg-gray-100 flex items-center justify-around">
        <h2>period</h2>
        <h2>period total</h2>
        <h2>period time</h2>
        <button>left</button>
        <div>schedule</div>
        <button>right</button>
      </div>
      <div className="w-full h-20 bg-gray-100 flex items-center justify-center">
        <div>progress bar</div>
      </div>
    </>
  );
};

export default Home;
