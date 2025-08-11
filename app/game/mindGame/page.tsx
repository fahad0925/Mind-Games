"use client";
import React, { useState } from "react";

const CounterApp = () => {
  let [game, setGame] = useState(1);

  return (
    <div className="min-h-screen gap-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="flex justify-center pt-14">
        <h1 className="text-6xl text-center pt-30 font-bold animate-pulse">
          {game == 1 ? "Welcome to Mind Reader!" : "Mind Reader"}
        </h1>
      </div>

      <div className=" flex flex-col items-center justify-center text-white px-4  pt-25 ">
        {game == 1 && (
          <div className="flex flex-col items-center justify-center gap-10  p-20 -pt-5  bg-gray-950 bg-opacity-60 border border-purple-500 rounded-2xl shadow-lg shadow-purple-800/30   text-center transition duration-300">
            <p className="text-4xl sm:text-5xl font-extrabold text-purple-500 drop-shadow-lg text-center mb-6">
              I can read your mind. Want to try?
            </p>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              onClick={() => setGame(2)}
            >
              Im ready!
            </button>
          </div>
        )}

        {game == 2 && (
          <div className="flex flex-col items-center justify-center gap-10 h- p-20 -pt-5  bg-gray-950 bg-opacity-60 border border-purple-500 rounded-2xl shadow-lg shadow-purple-800/30   text-center transition duration-300">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-500 drop-shadow-lg text-center mb-6">
              Think of a number...
            </h1>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              onClick={() => setGame(3)}
            >
              done
            </button>
          </div>
        )}

        {game == 3 && (
          <div className="flex flex-col items-center justify-center gap-10 h- p-20 -pt-5  bg-gray-950 bg-opacity-60 border border-purple-500 rounded-2xl shadow-lg shadow-purple-800/30   text-center transition duration-300">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-500 drop-shadow-lg text-center mb-6">
              Multiply it by 2
            </h1>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              onClick={() => setGame(4)}
            >
              Done
            </button>
          </div>
        )}
        {game == 4 && (
          <div className="flex flex-col items-center justify-center gap-10 h- p-20 -pt-5  bg-gray-950 bg-opacity-60 border border-purple-500 rounded-2xl shadow-lg shadow-purple-800/30   text-center transition duration-300">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-500 drop-shadow-lg text-center mb-6">
              Add 10
            </h1>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              onClick={() => setGame(5)}
            >
              Done
            </button>
          </div>
        )}
        {game == 5 && (
          <div className="flex flex-col items-center justify-center gap-10 h- p-20 -pt-5  bg-gray-950 bg-opacity-60 border border-purple-500 rounded-2xl shadow-lg shadow-purple-800/30   text-center transition duration-300">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-500 drop-shadow-lg text-center mb-6">
              Divide by 2
            </h1>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              onClick={() => setGame(6)}
            >
              Done
            </button>
          </div>
        )}
        {game == 6 && (
          <div className="flex flex-col items-center justify-center gap-10 h- p-20 -pt-5  bg-gray-950 bg-opacity-60 border border-purple-500 rounded-2xl shadow-lg shadow-purple-800/30   text-center transition duration-300">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-500 drop-shadow-lg text-center mb-6">
              Subtract your original number
            </h1>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              onClick={() => setGame(7)}
            >
              Done
            </button>
          </div>
        )}
        {game == 7 && (
          <div className="flex flex-col items-center justify-center gap-10 h- p-20 -pt-5  bg-gray-950 bg-opacity-60 border border-purple-500 rounded-2xl shadow-lg shadow-purple-800/30   text-center transition duration-300">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-500 drop-shadow-lg text-center mb-6">
              😵‍💫 “Wait… don’t tell me…
            </h1>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-500 drop-shadow-lg text-center mb-6">
              🤔 “Is it... 5 ...?
            </h1>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              onClick={() => setGame(2)}
            >
              Play again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CounterApp;
