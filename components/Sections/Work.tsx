import React, { useState, useEffect } from "react";
import { Reveal } from "../UI/Reveal";
import CardSwap, { Card } from "../UI/CardSwap";

const expertiseData = [
  {
    id: 1,
    title: "BUSINESS CONSULTATION",
    text: "Strategic advice and actionable plans to scale your business.",
  },
  {
    id: 2,
    title: "SOCIAL MEDIA MARKETING",
    text: "Amplifying your brand voice through targeted content.",
  },
  {
    id: 3,
    title: "EXPERIENCE MANAGEMENT",
    text: "Crafting unforgettable touchpoints that resonate with your audience.",
  },
  {
    id: 4,
    title: "BRAND BUILDING",
    text: "Developing a unique identity that stands out in the marketplace.",
  },
];

const initialWorkItems = [
  {
    id: 1,
    title: "Strategy Phase",
    img: "https://picsum.photos/600/900?random=1",
  },
  {
    id: 2,
    title: "Social Campaign",
    img: "https://picsum.photos/600/900?random=2",
  },
  {
    id: 3,
    title: "Event Launch",
    img: "https://picsum.photos/600/900?random=3",
  },
  {
    id: 4,
    title: "Brand Identity",
    img: "https://picsum.photos/600/900?random=4",
  },
];

const Work: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const [cards, setCards] = useState(initialWorkItems);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile properly (no window crash)
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSwap = (id: number) => {
    setActiveId(id);
    setCards((prev) => {
      const clicked = prev.find((c) => c.id === id);
      const rest = prev.filter((c) => c.id !== id);
      return clicked ? [clicked, ...rest] : prev;
    });
  };

  return (
    <section
      id="services"
      className="bg-brand-orange min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden flex flex-col md:flex-row items-center w-full"
    >
      <div className="w-full max-w-[1800px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32">
        {/* LEFT TEXT */}
        <div className="w-full md:w-5/12 text-brand-dark flex flex-col justify-center">
          <Reveal>
            <h4 className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] mb-4 uppercase border-b-4 border-brand-dark inline-block pb-2">
              Our Expertise
            </h4>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] text-brand-teal mb-10 md:mb-16 leading-[0.9]">
              SERVICES
            </h2>
          </Reveal>

          <div className="space-y-8 md:space-y-10">
            {expertiseData.map((item, idx) => (
              <Reveal key={item.id} delay={0.1 * idx + 0.3}>
                <div
                  onClick={() => handleSwap(item.id)}
                  className={`group cursor-pointer border-l-4 pl-4 md:pl-6 transition-all duration-300 ${
                    activeId === item.id
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  }`}
                >
                  <h3
                    className={`font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase mb-2 transition-colors ${
                      activeId === item.id
                        ? "text-white"
                        : "text-brand-teal group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`font-body text-sm sm:text-base md:text-lg lg:text-xl max-w-xl transition-colors ${
                      activeId === item.id
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="w-full md:w-7/12 flex items-center justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-full flex justify-center md:justify-end h-[320px] sm:h-[380px] md:h-[600px] lg:h-[650px]">
            <CardSwap
              cardDistance={isMobile ? 25 : 60}
              verticalDistance={isMobile ? 8 : 35}
            >
              {cards.map((item) => (
                <Card key={item.id}>
                  <div
                    onClick={() => handleSwap(item.id)}
                    className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-none h-full rounded-3xl overflow-hidden border-4 border-brand-dark shadow-2xl bg-gray-900 group cursor-pointer"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                      <p className="text-white font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
