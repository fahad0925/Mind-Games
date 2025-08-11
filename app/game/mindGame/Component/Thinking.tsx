import Link from "next/link";

const Thinking = () => {
  return (
    <div
      id="game03"
      className="flex flex-col-reverse md:flex-row gap-5 md:gap-10  xl:gap-40 lg:justify-between  md:items-center md:pl-10 lg:pl-0  sm:px-4 2xl:mx-12"
    >
      <div className="xl:w-[50%] lg:w-[50%] xl:ml-30 md:w-[50%] ">
        <h1 className="text-4xl mb-5 md:text-5xl.  font-semibold text-white">
          MindMaze <br /> What's on Your Mind?
        </h1>
        <p className="max-sm:text-left  tracking-wide lg:leading-8  md:text-xl text-md">
          Welcome to MindMaze, where every question unlocks a piece of your
          mind! This fun and brain-teasing zone challenges your instincts,
          imagination, and logic. Whether it’s a tricky riddle, a hilarious
          guess, or a deep thought — your brain's in the spotlight. Are you
          thinking what we’re thinking? Let’s find out in this twisty mental
          playground. Perfect for friends, fun, and self-discovery — start the
          maze now!
        </p>
        <Link href={"/game/mindGame"}>
          <button className="relative px-7 py-3 mt-5 bg-gradient-to-r  from-blue-950 via-gray-900 to-black text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#d946ef]">
            Play Now
          </button>
        </Link>
      </div>
      <div className="w-[30%] lg:w-[43%] md:w-[30] xl:w-[30%]">
        <div
          className="bg-gray-600  rounded-xl overflow-hidden border-3 border-purple-700 shadow-md 
hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.7)] hover:scale-105 transform transition duration-300 ease-in-out xl:w-120 xl:h-110 lg:w-110 lg:h-100 sm:h-100 sm:w-110 md:h-80 md:w-90 h-70 w-80"
        >
          <img
            className="w-full xl:h-110 lg:h-100 md:h-80 sm:h-100 h-70 object-cover"
            src="/thinking.avif"
            alt="yale"
          />
        </div>
      </div>
    </div>
  );
};

export default Thinking;
