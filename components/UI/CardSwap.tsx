import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardSwapProps {
  children: React.ReactNode[];
  cardDistance?: number;
  verticalDistance?: number;
}

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};

const CardSwap: React.FC<CardSwapProps> = ({
  children,
  cardDistance = 60,
  verticalDistance = 40,
}) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000 overflow-visible">
      <AnimatePresence mode="popLayout">
        {React.Children.map(children, (child, index) => {
          return (
            <motion.div
              key={(child as any).key}
              style={{
                zIndex: children.length - index,
                position: "absolute",
              }}
              initial={{ x: 100, opacity: 0, scale: 0.9 }}
              animate={{
                x: index * -cardDistance,
                y: index * verticalDistance,
                scale: 1 - index * 0.05,
                opacity: 1,
                rotateY: index === 0 ? 0 : -15 + index * 5,
              }}
              exit={{
                x: -300,
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.4 },
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="
                w-56 sm:w-64 md:w-80 lg:w-[450px]
                h-[340px] sm:h-[380px] md:h-[500px] lg:h-[650px]
              "
            >
              {child}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default CardSwap;
