import Image from "next/image";
import React from "react";
import avatar from "../images/avatar.png";
import {
  UilLinkedin,
  UilGithub,
  UilEnvelopeAlt,
} from "@iconscout/react-unicons";
import Link from "next/link";
import launchIcon from "../images/launch.svg";

const Herosection = () => {
  return (
    <section className="max-w-990 mx-auto relative justify-between w-full	h-screen bg-cover bg-center flex items-center sm:px-4 sm:flex-col sm:mt-28">
      <div>
        <h1 className="text-5xl font-extrabold leading-tight mb-4 sm:text-3xl ">
          Hey there! I am
          <br />
          <span className="custom-h2 text-8xl sm:text-3xl">Soumya U </span>
          <br /> Frontend Developer 
        </h1>
        <div className="flex text-center  items-center flex-wrap">
          <div className="w-9 h-9 rounded-full bg-green flex items-center justify-center">
            <Image src={launchIcon} alt="launch" width={24} />
          </div>
          <p className="text-lg text-grey font-normal	leading-6 ml-2 sm:text-base">
            Open to new, exciting opportunities
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center text-grey font-medium max-w-[480px] my-0 mx-auto pt-12 sm:px-0">
            <Link
              className="flex p-2 rounded  hover:text-white hover:bg-green cursor-pointer sm:text-base sm:p-1"
              href="https://www.linkedin.com/in/soumya-umesh/"
              target="_blank"
            >
              <UilLinkedin />
              &nbsp; LinkedIn
            </Link>
            <Link
              className="flex p-2 rounded hover:text-white hover:bg-green cursor-pointer sm:text-base sm:p-1"
              href="https://github.com/soumya-1099"
              target="_blank"
            >
              <UilGithub />
              &nbsp; GitHub
            </Link>
            <Link
              className="flex p-2 rounded hover:text-white hover:bg-green cursor-pointer sm:text-base sm:p-1"
              href="mailto: soumyagoda1004@gmail.com"
              target="_blank"
            >
              <UilEnvelopeAlt />
              &nbsp; Email
            </Link>
          </div>
        </div>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-2xl w-80 h-80 mt-0 overflow-hidden sm:hidden">
        <Image src={avatar} alt="profile pic" />
      </div>
    </section>
  );
};

export default Herosection;
