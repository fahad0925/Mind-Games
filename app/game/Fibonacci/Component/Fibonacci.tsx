import Link from "next/link";

const Fibonacci = () => {
  return (
    <div
      id="game01"
      className="flex sm:flex md:flex  lg:flex xl:flex flex-col md:flex-row  xl:justify-center pr-0 lg:pr-10 xl:pr-0 [@media(min-width:1100px)_and_(max-width:1600px)]:justify-between [@media(min-width:1100px)_and_(max-width:1600px)]:px-9  items-center sm:gap-10 xl:gap-10 md:gap-5 sm:px-4  md:px-0"
    >
      <div className="w-full lg:w-[30%] md:w-[40%]">
        <div
          className="bg-gray-600 rounded-xl  overflow-hidden border-2 border-pink-700 shadow-md 
      hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.7)] hover:scale-105 transform transition duration-300 ease-in-out xl:w-120 xl:h-110 lg:w-100 lg:h-90 sm:h-100 sm:w-110 md:h-80 md:w-90  h-70 w-80"
        >
          <img
            className="w-full xl:h-110 lg:h-90 sm:h-100 md:h-80 h-70 object-cover"
            src="/fibonacci.jpg"
            alt="yale"
          />
        </div>
      </div>

      <div className="w-full md:w-[50%]  md:text-left">
        <h1 className="text-4xl sm:text-5xl mb-5 font-semibold text-white">
          Fibonacci <br className="max-lg:hidden" /> MindStream
        </h1>
        <p className="max-sm:text-left tracking-wide lg:leading-8  xl:text-xl lg:text-lg text-md">
          The Fibonacci Sequence is a special pattern of numbers where each
          number is the sum of the two before it. It starts like this: 0, 1, 1,
          2, 3, 5, 8, 13... and goes on. This pattern appears naturally in
          nature — like in sunflower seeds, pinecones, and spiral shells. It’s
          used in computer science, financial markets, and even art and
          architecture for its beautiful, balanced structure. Mathematically,
          it's a great example of recursion and teaches how small steps can
          build into something big!
        </p>
        <Link href={"/game/Fibonacci"}>
          <button className="relative px-7 py-3 mt-5 bg-gradient-to-r from-blue-950 via-gray-900 to-black text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#d946ef]">
            Play Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Fibonacci;
