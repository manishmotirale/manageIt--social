import React from "react";
import { Reveal } from "../UI/Reveal";
import { FlowerShape, StarBurst } from "../UI/Shapes";

const CheckerStrip = () => (
  <svg width="100%" height="40" preserveAspectRatio="none">
    <defs>
      <pattern
        id="checkerboard-pattern"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <rect width="12" height="12" fill="#234357" />
        <rect x="12" y="12" width="12" height="12" fill="#234357" />
        <rect x="12" width="12" height="12" fill="#ffffff" />
        <rect y="12" width="12" height="12" fill="#ffffff" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#checkerboard-pattern)" />
  </svg>
);

const Vision: React.FC = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* Top Chess Strip */}
      <CheckerStrip />

      {/* ===================== */}
      {/* OUR VISION SECTION   */}
      {/* ===================== */}
      <div className="bg-brand-dark text-white relative py-16 sm:py-20 md:py-32 w-full">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          {/* Left Flower */}
          <div className="absolute left-0 md:left-20 top-1/2 -translate-y-1/2 hidden lg:block">
            <FlowerShape
              color="#FA934D"
              className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 opacity-20 rotate-12"
            />
          </div>

          {/* Right Flower */}
          <div className="absolute right-0 md:right-20 top-0 hidden lg:block">
            <FlowerShape
              color="#345C72"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-20 -rotate-12"
            />
          </div>

          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-6 md:mb-8 tracking-tighter">
              OUR VISION
            </h2>
          </Reveal>

          {/* 🔥 FONT SIZE MATCHED HERE */}
          <Reveal delay={0.2}>
            <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl text-gray-200 leading-relaxed">
              Marketing that looks good is nice.
              <br />
              Marketing that{" "}
              <span className="text-brand-orange font-bold italic">
                scales revenue
              </span>{" "}
              is better.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ===================== */}
      {/* HOW WE OPERATE       */}
      {/* ===================== */}
      <div className="bg-brand-orange text-white py-16 sm:py-20 md:py-32 relative w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-8 md:mb-12 tracking-tighter text-white">
              HOW WE OPERATE
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium max-w-3xl">
              Every business is <span className="font-bold">different</span>. So
              should be the <span className="font-bold">strategy</span>.
              <br className="hidden md:block" />
              We study your goals, your gaps, and what's actually stopping
              growth.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10 md:mt-16 space-y-3 md:space-y-4">
              <p>
                <span className="font-bold" style={{ color: "#345C72" }}>
                  Execution
                </span>{" "}
                follows.
              </p>
              <p>
                <span className="font-bold" style={{ color: "#345C72" }}>
                  Tracking
                </span>{" "}
                is constant.
              </p>
              <p>
                <span className="font-bold" style={{ color: "#345C72" }}>
                  Decisions
                </span>{" "}
                are data-led.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Starburst Right */}
        <div className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 hidden md:block">
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-[28rem] md:h-[28rem] rounded-full bg-brand-dark flex items-center justify-center p-6 md:p-12 shadow-2xl">
            <StarBurst color="#FA934D" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Bottom Chess Strip */}
      <CheckerStrip />
    </section>
  );
};

export default Vision;
