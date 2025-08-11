import Link from "next/link";

const GeneralKnowledge = () => {
  return (
    <div
      id="game02"
      className="flex sm:flex md:flex flex-col md:flex-row lg:flex md:justify-center md:gap-5 gap-5 md:items-center md:p-0  sm:px-4"
    >
      <div className="xl:w-[30%] lg:w-[50%] lg:-ml-15 md:w-[40%]">
        <div
          className="bg-gray-600  rounded-xl overflow-hidden border-2 border-blue-300 shadow-md 
hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.7)] hover:scale-105 transform transition duration-300 ease-in-out xl:w-120 xl:h-110 lg:w-110 lg:h-100 sm:h-100 sm:w-110 md:h-80 md:w-90 h-70 w-80"
        >
          <img
            className="w-full xl:h-110 lg:h-100 sm:h-100 md:h-80 h-70 object-cover"
            src="/general knowledge.jpg"
            alt="yale"
          />
        </div>
      </div>
      <div className="md:w-[50%]  ">
        <h1 className="md:text-5xl text-4xl mb-5 font-semibold text-white">
          General Knowledge <br /> IQ Arena
        </h1>
        <p className="max-sm:text-left tracking-wide  lg:leading-8 xl:text-xl lg:text-xl text-md">
          Welcome to BrainQuest, the ultimate zone to sharpen your mind. Dive
          into thrilling questions across history, science, culture, and more.
          Every tap brings a new challenge — simple, tricky, or totally
          unexpected. Train your brain, test your instincts, and level up your
          general knowledge. Ready to think fast and learn smarter? Let’s begin.
        </p>
        <Link href={"/game/GeneralKnowledge"}>
          <button className="relative px-7 py-3 mt-5 bg-gradient-to-r  from-blue-950 via-gray-900 to-black text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#d946ef]">
            Play Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GeneralKnowledge;
