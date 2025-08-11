import React from "react";

interface Props {
  isLoading: boolean;
}

const Hero = ({ isLoading }: Props) => {
  return (
    <>
      <div className="flex flex-col-reverse -mt-20  sm:-mt-25 md:mt-0  md:flex-row   md:gap-12  md:justify-between  min-h-screen w-screen items-center max-md:text-center">
        {/* Left Section - Text & Buttons */}
        <div className="w-full md:w-[50%]  xl:pl-30 lg:pl-25 md:pl-20 px-6 sm:px-10 mt-10">
          <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold mb-6 sm:mb-8">
            Fun Zone
          </h1>

          <p className="text-sm sm:text-lg tracking-wide lg:leading-8 xl:text-2xl text-left md:text-left">
            Dive into an exciting world full of brain-teasing quizzes,
            interesting trivia, and knowledge-packed games. Challenge yourself
            with every level, test how much you really know, and unlock fun as
            you go. From general knowledge to surprising facts — it’s learning,
            but with a twist of entertainment. Ready to play smart? Your next
            challenge is just a click away!
          </p>

          {isLoading && <p className="mt-2">Loading...</p>}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4  sm:gap-1 mt-6  ">
            <button className="relative px-7 py-3 sm:px-5 sm:py-2 bg-gradient-to-r from-blue-950 via-gray-900 to-black text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#d946ef]">
              <a
                href="#game01"
                className="underline-offset-0 decoration-0 text-nowrap"
              >
                Fibonacci
              </a>
            </button>

            <button className="relative px-7 py-3 sm:px-5 sm:py-2 text-nowrap bg-gradient-to-r from-blue-950 via-gray-900 to-black text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#d946ef]">
              <a href="#game02" className="underline-offset-0 decoration-0">
                IQ Arena
              </a>
            </button>

            <button className="relative px-7 py-3 sm:px-5  sm:py-2 text-nowrap md:px-5 md:py-2 bg-gradient-to-r from-blue-950 via-gray-900 to-black text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#d946ef]">
              <a href="#game03" className="underline-offset-0 decoration-0">
                Mind Maze
              </a>
            </button>
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="w-full  sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 md:w-[45%] flex justify-center">
          <img
            className="w-[90%] mt-5 sm:mt-0  sm:w-[80%] md:w-[95%] 2xl:w-[85%]"
            src="brainnnn.png"
            alt="yele"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
