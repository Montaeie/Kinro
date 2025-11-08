"use client";
import { motion, MotionValue } from "motion/react";
import React from "react";

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
}) => {
  return (
    <div className="sticky top-80">
      <p className="text-brand text-center text-lg font-bold md:text-7xl">
        {title || "AI Distribution Intelligence"}
      </p>
      <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300 md:text-lg">
        {description ||
          "Track every step of the LLM decision journey and turn insights into revenue"}
      </p>
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#06b685] to-transparent blur-2xl h-px w-3/4" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#06b685] to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#047857] to-transparent blur-2xl h-px w-1/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#047857] to-transparent h-px w-1/4" />

      <div className="relative mx-auto mt-8 h-72 w-full max-w-lg overflow-hidden md:h-80">
        <svg
          width="380"
          height="315"
          viewBox="0 0 380 315"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto scale-[1.5] md:scale-[1.8]"
        >
          {pathLengths.map((pathLength, index) => {
            const colorMap = [
              "#06b685",
              "#059669",
              "#047857",
              "#065f46",
              "#064e3b",
            ];
            return (
              <motion.path
                key={index}
                d={paths[index % paths.length]}
                stroke={colorMap[index % colorMap.length]}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength }}
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

const paths = [
  "M190 50 Q 220 100, 190 150 Q 160 200, 190 250",
  "M150 50 Q 120 120, 150 190 Q 180 260, 150 280",
  "M230 50 Q 260 120, 230 190 Q 200 260, 230 280",
  "M110 80 Q 80 150, 110 220 Q 140 270, 110 300",
  "M270 80 Q 300 150, 270 220 Q 240 270, 270 300",
];
