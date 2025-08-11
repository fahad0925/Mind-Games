import Hero from "./Components/hero";
import Fibonacci from "./game/Fibonacci/Component/Fibonacci";
import GeneralKnowledge from "./game/GeneralKnowledge/Component/GeneralKnowledge";
import Thinking from "./game/mindGame/Component/Thinking";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0f2c] to-[#010326] ">
      <div className=" text-white flex justify-center items-center px-10 -pt-5  ">
        <Hero isLoading={false} />
      </div>

      {/* games */}
      <div className="flex flex-col lg:p-0 xl:p-10 gap-70 mt-30 md:mt-0">
        {/* fibonacci */}
        <div className="m-4">
          <Fibonacci />
        </div>

        {/* what are you thinking */}
        <div className="m-4">
          <Thinking />
        </div>
        {/* GENERAL KNOWLEDGE */}
        <div className="m-4 mb-100">
          <GeneralKnowledge />
        </div>
      </div>
    </div>
  );
}
