"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import he from "he";
type Post = {
  question: any;
  correct_answer: string;
  incorrect_answers: string[];
};
const page = () => {
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=9"
        );
        const data = await response.json();
        setPost(data.results);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    }
    fetchPosts();
  }, []);
  let [input, setInput] = useState("");

  let [gameNO, setGameNo] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);
  let [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (!post[gameNO]) return;

    const correct = post[gameNO].correct_answer.trim().toLowerCase();
    const userAnswer = input.trim().toLowerCase();

    if (userAnswer === correct) {
      setAnswer("✅ Well done! That's the correct answer");
    } else {
      setAnswer(`❌ Oops! The correct answer was ${correct}.`);
    }
    setInput("");

    setTimeout(() => setCurrentPage(2), 300); // delay to let animation complete
  };

  const handNext = () => {
    if (gameNO < 49) {
      setCurrentPage(1);

      setGameNo(gameNO + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex pt-30 flex-col items-center gap-15 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div>
        <h1 className="text-6xl text-center font-bold animate-pulse ">
          {gameNO == 0 ? "Welcome to General Knowledge" : "General Knowledge"}
        </h1>
      </div>

      {currentPage == 1 && (
        <div className="h-70 bg-black text-center rounded-2xl  shadow-lg p-10 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-2xl   font-extrabold text-purple-500 drop-shadow-lg text-center mb-8">
            {he.decode(post?.[gameNO]?.question || "Loading...")}
          </h1>

          <div className="m-3">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Your Answer"
              className="w-100 px-5 py-2 mt-8 mr-5 rounded-full bg-gray-900 text-white border border-purple-500 placeholder-gray-400 hover:shadow-[0_0_10px_rgba(128,0,128,0.4)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500    transition duration-200 mb-10"
            />

            <button
              disabled={input == ""}
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {currentPage == 2 && (
        <div className="h-80 pt-20 bg-black text-center rounded-2xl  shadow-lg p-10 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-2xl   font-extrabold text-purple-500 drop-shadow-lg text-center mb-8">
            {answer}
          </h1>

          {gameNO < post.length - 1 && (
            <div className="">
              <button
                onClick={handlePrevious}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold mr-5 py-2 px-3 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              >
                Try Again
              </button>
              <button
                onClick={handNext}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold  py-2 px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              >
                Next
              </button>
            </div>
          )}

          {gameNO == 9 && (
            <div>
              <button
                onClick={handlePrevious}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold mr-5 py-2 px-3 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300"
              >
                Restart
              </button>
              <Link href={"/"}>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-purple-500/50 transition duration-300">
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
