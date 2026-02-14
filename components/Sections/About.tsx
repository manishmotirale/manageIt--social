import React from "react";

import { Reveal } from "../UI/Reveal";

import {
  SquiggleVertical,
  PillShape,
  FlowerShape,
  StarBurst,
} from "../UI/Shapes";

const About: React.FC = () => {
  return (
    <section
      /* Added ID here for direct scrolling and adjusted padding */

      id="about"
      className="

        py-1 md:py-32

        px-6 md:px-8 lg:px-16

        w-full mx-auto

        flex flex-col md:flex-row

        gap-20 md:gap-16 lg:gap-24

        items-start

        overflow-hidden

      "
    >
      {/* LEFT ABSTRACT SHAPES - Hidden on mobile for cleaner layout */}

      <div
        className="

          hidden md:flex flex-col gap-8 items-center w-5/12

          md:-translate-y-12 lg:-translate-y-20

        "
      >
        <div className="flex gap-6 items-end">
          <Reveal delay={0.2} direction="right">
            <PillShape
              color="#204E62"
              className="w-32 h-64 lg:w-40 lg:h-80 relative overflow-hidden shadow-2xl"
            >
              <SquiggleVertical
                color="#FA934D"
                className="mx-auto mt-10 md:scale-125"
              />
            </PillShape>
          </Reveal>

          <Reveal delay={0.3} direction="left">
            <PillShape
              color="#FA934D"
              className="w-32 h-80 lg:w-40 lg:h-96 relative overflow-hidden shadow-2xl"
            >
              <SquiggleVertical
                color="#F4F0EA"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150"
              />
            </PillShape>
          </Reveal>
        </div>

        <div className="flex gap-6 items-start">
          <Reveal delay={0.4} direction="right">
            <div className="flex flex-col gap-6">
              <PillShape
                color="#2B687F"
                className="w-28 h-28 lg:w-36 lg:h-36 shadow-xl"
              >
                <FlowerShape className="w-16 h-16 lg:w-20 lg:h-20" />
              </PillShape>

              <PillShape
                color="#FA934D"
                className="w-28 h-64 lg:w-36 lg:h-72 relative overflow-hidden shadow-xl"
              >
                <SquiggleVertical
                  color="#204E62"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125"
                />
              </PillShape>
            </div>
          </Reveal>

          <Reveal delay={0.5} direction="left">
            <div className="flex flex-col gap-6">
              <PillShape
                color="#204E62"
                className="w-28 h-28 lg:w-36 lg:h-36 shadow-xl"
              >
                <StarBurst className="w-16 h-16 lg:w-20 lg:h-20" />
              </PillShape>

              <PillShape
                color="#FA934D"
                className="w-28 h-40 lg:w-36 lg:h-48 relative overflow-hidden shadow-xl"
              >
                <SquiggleVertical
                  color="#204E62"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 scale-125"
                />
              </PillShape>

              <PillShape
                color="#2B687F"
                className="w-28 h-28 lg:w-36 lg:h-36 shadow-xl"
              >
                <FlowerShape className="w-12 h-12 lg:w-16 lg:h-16" />
              </PillShape>
            </div>
          </Reveal>
        </div>
      </div>

      {/* RIGHT CONTENT */}

      <div
        className="

          flex-1 relative w-full

          /* Removed negative translate on mobile to prevent navbar overlap */

          md:-translate-y-20 lg:-translate-y-24

        "
      >
        {/* ABOUT LABEL */}

        <div className="mb-6 ml-auto mr-4 sm:mr-12 md:mr-28 w-fit">
          <span className="font-body text-brand-teal text-xl md:text-2xl font-bold uppercase tracking-wider">
            About!
          </span>
        </div>

        {/* HEADING */}

        <Reveal>
          <h2
            className="

              font-display

              text-[2.5rem] sm:text-5xl md:text-6xl lg:text-8xl

              text-brand-orange

              text-right

              mb-10

              leading-[0.9]

            "
          >
            GET TO KNOW US
          </h2>
        </Reveal>

        {/* CONTENT BOXES */}

        <Reveal delay={0.3} width="100%">
          <div className="flex flex-col gap-8 md:gap-12">
            <div
              className="

                bg-brand-teal

                p-8 md:p-16

                shadow-[12px_12px_0px_0px_rgba(32,78,98,1)]

                md:shadow-[20px_20px_0px_0px_rgba(32,78,98,1)]

                rounded-2xl

                relative border-2 border-brand-dark

              "
            >
              <p className="text-white text-right text-lg md:text-3xl lg:text-4xl leading-relaxed">
                We don't do guesswork. We don't chase trends for vanity. We
                build businesses that grow with{" "}
                <span className="text-brand-orange font-extrabold">
                  strategy
                </span>
                ,{" "}
                <span className="text-brand-orange font-extrabold">
                  storytelling
                </span>
                , and systems that actually work.
              </p>
            </div>

            <div
              className="

                bg-brand-teal

                p-8 md:p-16

                shadow-[12px_12px_0px_0px_rgba(32,78,98,1)]

                md:shadow-[20px_20px_0px_0px_rgba(32,78,98,1)]

                rounded-2xl

                relative border-2 border-brand-dark

              "
            >
              <p className="text-white text-right text-lg md:text-3xl lg:text-4xl leading-relaxed">
                We believe in making impact, not just noise. Your brand deserves
                to be heard by the right people, at the right time.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <br />
    </section>
  );
};

export default About;
