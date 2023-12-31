import React from "react";

import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import reactImage from "../images/react.png";
import nextjs from "../images/nextjs.png";
import github from "../images/github.png";
import tailwind from "../images/tailwind.png";
import Image from "next/image";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-navyBlue",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-skyBlue",
    },

    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray",
    },
  ];

  return (
    <div className="py-24 sm:py-4 md:pb-4" id='skills' >
      <div name="experience" className="w-[1024px] max-w-full mx-auto ">
        <div className="mx-auto p-4 flex flex-col justify-center">
          <div>
            <p className="text-4xl text-green font-bold border-b-4 border-gray-500 p-2 inline sm:text-3xl">
              Skills
            </p>
            <p className="py-6 sm:pb-5">
              These are the technologies I&apos;ve worked with.
            </p>
          </div>

          <div className="w-full grid grid-cols-7 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8  px-12 sm:p-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 hover:text-teal duration-500 py-2 rounded-lg ${style}`}
              >
                <Image src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
