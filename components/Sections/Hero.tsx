import React from "react";
import { Reveal } from "../UI/Reveal";
import {
  FlowerShape,
  SquiggleVertical,
  PillShape,
  EightPointStar,
} from "../UI/Shapes";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="
    md:min-h-screen
    flex flex-row items-start justify-between
    relative overflow-hidden
    px-4 sm:px-6 md:px-12 lg:px-20
    pt-24 sm:pt-28 pb-0
  "
    >
      {/* LEFT TEXT */}
      <div
        className="
          w-1/2 max-w-[50%]
          z-10 flex flex-col items-start justify-start
          pt-3 md:pt-12 lg:pt-16
          scale-[0.85] sm:scale-90 md:scale-100
          origin-top-left
        "
      >
        <Reveal>
          <h1 className="font-display text-[3.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] text-brand-orange leading-[0.95]">
            NO OFFENSE,
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="font-display text-[1.6rem] sm:text-[2.4rem] md:text-[4rem] lg:text-[4.5rem] text-brand-dark mt-4 mb-6 max-w-3xl">
            But we do marketing better than your current agency.
          </h2>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="bg-[#FFDcb0] px-8 py-4 rounded-full shadow-sm">
            <p className="text-brand-dark font-bold text-lg">
              For brands that refuse to blend in
            </p>
          </div>
        </Reveal>
      </div>

      {/* RIGHT SHAPES */}
      <div
        className="
          w-1/2
          flex flex-row items-start justify-end gap-6 md:gap-10
          relative pr-6 md:pr-12
          scale-[0.65] sm:scale-[0.8] md:scale-100
          origin-top-right
        "
      >
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="w-24 h-48 md:w-28 md:h-56 lg:w-36 lg:h-64 bg-brand-dark rounded-b-full shadow-xl md:-mt-12">
            <SquiggleVertical
              color="#FA934D"
              className="mx-auto mt-10 md:scale-125"
            />
          </div>

          <PillShape
            color="#204E62"
            className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 shadow-xl"
          >
            <FlowerShape className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </PillShape>

          <PillShape
            color="#FA934D"
            className="w-24 h-64 md:w-28 md:h-72 lg:w-36 lg:h-80 shadow-xl"
          >
            <SquiggleVertical
              color="#204E62"
              className="mx-auto mt-15 md:scale-150"
            />
          </PillShape>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-6 md:gap-6 mt-10">
          <PillShape
            color="#2B687F"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 shadow-xl"
          >
            <EightPointStar className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </PillShape>

          <PillShape
            color="#FA934D"
            className="w-24 h-[20rem] md:w-28 md:h-[30rem] lg:w-36 lg:h-[35rem] shadow-xl"
          >
            <SquiggleVertical
              color="#F4F0EA"
              className="mx-auto mt-20 md:scale-[2.5]"
            />
          </PillShape>
        </div>
      </div>
    </section>
  );
};

export default Hero;
