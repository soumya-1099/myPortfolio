import React from "react";
import {
  UilHeart,
  UilLinkedin,
  UilGithub,
  UilEnvelopeAlt,
  UilFileAlt,
} from "@iconscout/react-unicons";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center  max-w-[768px] m-auto pb-4 sm:p-4">
        <div>
          <h2 className="custom-h2 text-center mb-4">Hit me up!</h2>
          <p className="text-lg text-center text-grey font-normal	leading-6 mb-4 sm:text-base">
            If you&apos;re looking for a developer with an eye for detail.
            <br />
            I&apos;m open to new and exciting opportunities!
          </p>
        </div>
        <div>
          <p className="text-lg text-teal font-normal text-center sm:text-base ">
            Contact me using the links below.
          </p>
          <div className="flex justify-evenly items-center text-grey font-medium max-w-[480px] my-0 mx-auto p-4 sm:px-0">
            <Link
              className="flex p-2 rounded  hover:text-white hover:bg-green cursor-pointer sm:text-base sm:p-1"
              href="https://www.linkedin.com/in/soumya-umesh/"
            >
              <UilLinkedin />
              &nbsp; LinkedIn
            </Link>
            <Link
              className="flex p-2 rounded hover:text-white hover:bg-green cursor-pointer sm:text-base sm:p-1"
              href="https://github.com/soumya-1099"
            >
              <UilGithub />
              &nbsp; GitHub
            </Link>
            <Link
              className="flex p-2 rounded hover:text-white hover:bg-green cursor-pointer sm:text-base sm:p-1"
              href="mailto: soumyagoda1004@gmail.com"
            >
              <UilEnvelopeAlt />
              &nbsp; Email
            </Link>
            {/* Todo: add resume in future */}
            {/* <Link
              className="flex p-2 rounded hover:text-white hover:bg-green cursor-pointer sm:text-base sm:p-1"
              href="/"
            >
              <UilFileAlt />
              &nbsp; Resume
            </Link> */}
          </div>
        </div>
      </div>
      <div className="h-14 border border-indigo-600 flex items-center justify-center bg-footer">
        <p className="text-sm font-semibold text-white flex">
          &nbsp; Made with &nbsp; <UilHeart size={20} />
          &nbsp; by Soumya U
        </p>
      </div>
    </div>
  );
};

export default Footer;