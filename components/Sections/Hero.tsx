import React from "react";
import { Reveal } from "../UI/Reveal";
import "../../styles/hero.css";
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
    hero-section
    flex flex-row
    items-start justify-between
    relative overflow-hidden

    px-4 sm:px-6 md:px-12 lg:px-20
    pt-16 sm:pt-20 md:pt-28 pb-6
  "
    >
      {/* LEFT TEXT */}
      <div
        className="
  w-[55%]              /* give text more space */
  shrink-0
  z-10
  flex flex-col items-start
  pt-2 sm:pt-4 md:pt-12
"
      >
        <Reveal>
          <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-brand-orange leading-[1.05]">
            NO OFFENSE,
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="font-display text-[1.4rem] sm:text-[2.1rem] md:text-[3.5rem] lg:text-[4rem] text-[#345C72] mt-3 mb-6 max-w-3xl">
            But we do marketing better than your current agency.
          </h2>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="bg-[#FFDcb0] px-2  text-center py-1 rounded-2xl shadow-sm">
            <p className="text-brand-dark font-bold text-lg">
              For brands that refuse to blend in
            </p>
          </div>
        </Reveal>
      </div>

      {/* RIGHT SHAPES */}
      <div
        className="
  w-[45%]
  shrink-0
  flex flex-row
  items-start justify-end

  gap-3 sm:gap-6 md:gap-10

  relative

  scale-[0.65] sm:scale-[0.75] md:scale-100
  origin-top-right
"
      >
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="w-24 h-48 md:w-28 md:h-56 lg:w-36 lg:h-64 bg-[#345C72] rounded-b-full shadow-xl md:-mt-12">
            <SquiggleVertical
              color="#FA934D"
              className="mx-auto md:mt-11 mt-4 md:scale-150"
            />
          </div>

          <PillShape
            color="#345C72"
            className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 shadow-xl"
          >
            <FlowerShape className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </PillShape>

          <PillShape
            color="#FA934D"
            className="w-24 h-64 md:w-28 md:h-72 lg:w-36 lg:h-80 shadow-xl"
          >
            <SquiggleVertical
              color="#345C72"
              className="mx-auto mt-15 md:scale-150"
            />
          </PillShape>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-6 mt-10">
          <PillShape
            color="#345C72"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 shadow-xl"
          >
            <EightPointStar className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </PillShape>

          <PillShape
            color="#FA934D"
            className="w-24 h-[20rem] md:w-28 md:h-[30rem] lg:w-36 lg:h-[30rem] shadow-xl"
          >
            <SquiggleVertical
              color="#F4F0EA"
              className=" mx-auto md:mt-11 mt-2 md:scale-150 h-96 my-10"
            />
          </PillShape>
        </div>
      </div>
    </section>
  );
};

export default Hero;
