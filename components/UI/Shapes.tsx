import React from "react";

/* -------------------- SQUIGGLES -------------------- */

export const SquiggleVertical = ({
  color = "#204E62",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    width="40"
    height="150"
    viewBox="0 0 40 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 5 C35 15, 35 35, 20 45 C5 55, 5 75, 20 85 C35 95, 35 115, 20 125 C5 135, 5 155, 20 165"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export const TripleSquiggle = ({
  color = "#204E62",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    width="60"
    height="80"
    viewBox="0 0 60 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 10 Q 25 25 15 40 Q 5 55 15 70"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M30 10 Q 40 25 30 40 Q 20 55 30 70"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M45 10 Q 55 25 45 40 Q 35 55 45 70"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

/* -------------------- ARC -------------------- */

export const ArcShape = ({
  color = "#FA934D",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    width="60"
    height="150"
    viewBox="0 0 60 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M50 20 Q 10 75 50 130"
      stroke={color}
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

/* -------------------- FLOWER -------------------- */

export const FlowerShape = ({
  color = "#FA934D",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M50 0 L61 28 L90 20 L75 45 L100 60 L70 70 L65 100 L45 75 L15 90 L25 60 L0 50 L28 35 L10 10 L40 25 Z"
      fill={color}
    />
  </svg>
);

/* -------------------- STARS -------------------- */

export const EightPointStar = ({
  color = "#FA934D",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill={color}
    className={className}
  >
    <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
  </svg>
);

export const FourPointStar = ({
  color = "#FA934D",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M50 10 C50 10 60 40 90 50 C60 60 50 90 50 90 C50 90 40 60 10 50 C40 40 50 10 50 10Z"
      fill={color}
    />
  </svg>
);

export const StarBurst = ({
  color = "#FA934D",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 24 24"
    fill={color}
    className={className}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

/* -------------------- PILL -------------------- */

export const PillShape = ({
  color,
  children,
  className = "",
  outline = false,
}: {
  color: string;
  children?: React.ReactNode;
  className?: string;
  outline?: boolean;
}) => (
  <div
    className={`rounded-full flex items-center justify-center ${className}`}
    style={{
      backgroundColor: outline ? "transparent" : color,
      border: outline ? `3px solid ${color}` : "none",
    }}
  >
    {children}
  </div>
);

