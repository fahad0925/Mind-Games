"use client";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState([
    { detail: [1, 1, 2, 3, 5, "...?"], answer: "8" },
    { detail: [1029, 7059, 8088, 931, "...?"], answer: "9019" },
    { detail: [1, 9, 10, "...?"], answer: "19" },
    { detail: [46, 2, "...?"], answer: "48" },
    { detail: [1, 73737, "...?"], answer: "73738" },
  ]);

  let [gameNO, setGameNo] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);
  let [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (input.trim() == data[gameNO].answer) {
      setAnswer(`✅ Well done! That's the correct answer`);
    } else {
      setAnswer(`❌ Oops! The correct answer was ${data[gameNO].answer}.`);
    }
    setCurrentPage(2);
  };

  const handNext = () => {
    if (gameNO < 4) {
      setCurrentPage(1);

      setGameNo(gameNO + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentPage(1);
    if (gameNO > 0) {
      setGameNo(gameNO - 1);
    } else if (gameNO == 0) {
      setGameNo(0);
    }
  };

  return (
    <div className="min-h-screen flex pt-30 flex-col items-center gap-15 bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-center font-bold animate-pulse">
          {gameNO == 0 ? "Welcome to Fibonacci!" : "Fibonacci"}
        </h1>
      </div>

      {currentPage == 1 && (
        <div className="w-full max-w-3xl h-auto sm:h-80 bg-black text-center rounded-2xl shadow-lg p-6 sm:p-10 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-purple-500 drop-shadow-lg text-center mb-6 sm:mb-8">
            Observe the following pattern and find the missing number:
          </h1>
          <h1 className="text-sm sm:text-base md:text-lg">
            {data[gameNO].detail.join(", ")}
          </h1>
          <div className="m-3">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Your Answer"
              className="w-full sm:w-auto px-4 sm:px-5 py-2 mt-6 sm:mt-8 sm:mr-5 rounded-full bg-gray-900 text-white border border-purple-500 placeholder-gray-400 hover:shadow-[0_0_10px_rgba(128,0,128,0.4)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 mb-6 sm:mb-10"
            />
            <button
              disabled={input == ""}
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 sm:px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {currentPage == 2 && (
        <div className="w-full max-w-3xl h-auto sm:h-80 pt-10 sm:pt-20 bg-black text-center rounded-2xl shadow-lg p-6 sm:p-10 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-purple-500 drop-shadow-lg text-center mb-6 sm:mb-8">
            {answer}
          </h1>

          {gameNO < 4 && (
            <div>
              <button
                onClick={handlePrevious}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold mr-3 sm:mr-5 py-2 px-4 sm:px-3 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              >
                Restart
              </button>
              <button
                onClick={handNext}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 sm:px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              >
                Next
              </button>
            </div>
          )}

          {gameNO == 4 && (
            <div>
              <button
                onClick={handlePrevious}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold mr-3 sm:mr-5 py-2 px-4 sm:px-3 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              >
                Restart
              </button>
              <Link href={"/"}>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 sm:px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300">
                  Back
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
