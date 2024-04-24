"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Experience",
    value: "46",
    postfix: "y",
  },
  {
    metric: "Merchant Partners",
    value: "250",
    postfix: "+",
  },
  {
    metric: "Worldwide Clients",
    value: "1",
    postfix: "M+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-8 sm:py-16 xl:px-16">
      <div style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.1)" }} className=" rounded-3xl py-12 px-20 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-48 items-center justify-center md:mx-2 lg:mx-8 xl:mx-20 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#2BB32A] text-center">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
