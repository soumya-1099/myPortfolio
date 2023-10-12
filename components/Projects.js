import { projectData } from "assets/projectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {

  return (
    <div
      name="portfolio"
      className=" w-[1024px] max-w-full mx-auto md:h-screen py-24 sm:py-4"
      id="projects"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:pb-0">
          <p
            id="projects"
            className="text-4xl text-green font-bold inline border-b-4 border-gray-500 sm:text-3xl"
          >
            Projects
          </p>
          <p className="py-6 ">Check out some of my work right here.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 px-4 md:px-0">
          {projectData.map(({ id, src, projectLink }) => (
            <div key={id} className="custom-shadow-teal rounded-lg">
              <Image
                src={src}
                alt="projectDisplay"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center space-x-4">
                {projectLink ? ( 
                  <Link
                    className="px-6 py-3 duration-200 hover:scale-105 hover:text-teal"
                    href={projectLink}
                    target="_blank"
                  >
                    Demo
                  </Link>
                ) : (
                  <span>Link not available</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full py-8 text-center">
            <h2 className="text-xl text-green font-semibold mb-4">
              {" "}
              Project under construction{" "}
            </h2>
            <p className="text-green mt-2">Stay tuned for more details!</p>
            <p className="text-green">Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
