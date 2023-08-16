import Image from "next/image";
import React from "react";
import demoProject from "../images/demoProject.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: demoProject,
    },
    {
      id: 2,
      src: demoProject,
    },
    {
      id: 3,
      src: demoProject,
    },
    {
      id: 4,
      src: demoProject,
    },
  ];

  return (
    <div name="portfolio" className=" w-[1024px] max-w-full mx-auto md:h-scree">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:pb-0">
          <p className="text-4xl text-green font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 ">Check out some of my work right here.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 gap-8  px-4 md:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" custom-shadow-teal rounded-lg">
              <Image
                src={src}
                alt="projectDisplay"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center space-x-4">
                <button className="px-6 py-3 duration-200 hover:scale-105 hover:text-teal">
                  Demo
                </button>
                <button className="px-6 py-3 duration-200 hover:scale-105 hover:text-teal">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
