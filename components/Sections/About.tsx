import React from "react";
import {
  SquiggleVertical,
  PillShape,
  FlowerShape,
  StarBurst,
} from "../UI/Shapes";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="
        py-8 md:py-24
        px-6 md:px-8 lg:px-16
        w-full mx-auto
        flex flex-col md:flex-row
        gap-16 lg:gap-24
        items-start
        overflow-hidden
      "
    >
      {/* ================= LEFT SHAPES (HERO STYLE) ================= */}
      <div className="hidden md:flex w-5/12 justify-center gap-10 md:-translate-y-12 lg:-translate-y-16">
        {/* ---------- COLUMN 1 ---------- */}
        <div className="flex flex-col gap-8 items-center">
          {/* Dark blue pill */}
          <PillShape
            color="#204E62"
            className="w-28 h-64 lg:w-32 lg:h-72 shadow-xl"
          >
            <SquiggleVertical color="#FA934D" className="mx-auto scale-125" />
          </PillShape>

          {/* Small flower */}
          <PillShape
            color="#2B687F"
            className="w-24 h-24 lg:w-28 lg:h-28 shadow-lg"
          >
            <FlowerShape className="w-12 h-12 lg:w-14 lg:h-14" />
          </PillShape>

          {/* Orange pill */}
          <PillShape
            color="#FA934D"
            className="w-28 h-64 lg:w-32 lg:h-72 shadow-xl"
          >
            <SquiggleVertical color="#204E62" className="mx-auto scale-125" />
          </PillShape>
        </div>

        {/* ---------- COLUMN 2 ---------- */}
        <div className="flex flex-col gap-8 items-center mt-16">
          {/* Orange pill */}
          <PillShape
            color="#FA934D"
            className="w-28 h-72 lg:w-32 lg:h-80 shadow-xl"
          >
            <SquiggleVertical color="#F4F0EA" className="mx-auto scale-125" />
          </PillShape>

          {/* Star */}
          <PillShape
            color="#204E62"
            className="w-24 h-24 lg:w-28 lg:h-28 shadow-lg"
          >
            <StarBurst className="w-12 h-12 lg:w-14 lg:h-14" />
          </PillShape>

          {/* Orange pill */}
          <PillShape
            color="#FA934D"
            className="w-28 h-64 lg:w-32 lg:h-72 shadow-xl"
          >
            <SquiggleVertical color="#F4F0EA" className="mx-auto scale-125" />
          </PillShape>

          <PillShape
            color="#2B687F"
            className="w-24 h-24 lg:w-28 lg:h-28 shadow-lg"
          >
            <FlowerShape className="w-12 h-12 lg:w-14 lg:h-14" />
          </PillShape>
        </div>
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="flex-1 relative w-full md:-translate-y-16 lg:-translate-y-20">
        {/* Heading */}
        <div className="mb-10 text-left">
          <span className="block font-body text-brand-teal text-lg md:text-xl font-bold uppercase tracking-wider mb-3">
            About
          </span>

          <h2 className="font-display text-[2.2rem] sm:text-5xl md:text-6xl lg:text-8xl text-brand-orange leading-[0.9]">
            GET TO KNOW US
          </h2>
        </div>

        {/* Content box */}
        <div className="bg-brand-teal p-8 md:p-16 shadow-[16px_16px_0px_rgba(32,78,98,1)] rounded-2xl border-2 border-brand-dark">
          <p className="text-white text-right text-lg md:text-3xl lg:text-4xl leading-relaxed">
            We don't do guesswork. We don't chase trends for vanity. We build
            businesses that grow with{" "}
            <span className="text-brand-orange font-extrabold">strategy</span>,{" "}
            <span className="text-brand-orange font-extrabold">
              storytelling
            </span>
            , and systems that actually work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
