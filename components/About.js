import React from "react";

const About = () => {
  return (
    <div className="my-8 sm:mt-32 ">
      <section className="w-[1024px] max-w-full flex flex-col mx-auto px-4">
        <div>
          <h2 className="mb-8 text-5xl custom-h2 sm:text-4xl sm:mb-4 ">About</h2>
        </div>
        <div>
          <p className="mb-4 text-lg font-normal sm:text-base">
            My name is Soumya U. I&apos;m a frontend web developer. I&apos;m
            passionate about music, technology and basically everything that
            makes the internet tick.
          </p>
          <p className="mb-4 text-lg font-normal sm:text-base">
            My previous work experience includes a  full time engineering role at
            Proactive For Her and Rayabhari Technologies respectively. My web
            development roots are in Javascript, ReactJs & NextJs.
          </p>

          <p className="mb-4 text-lg font-normal sm:text-base">
            Whether you&apos;re a business owner looking to get started on a app
            or web development project, a developer looking to collaborate on
            something cool, or just wanting to say hi, shoot me a message and
            let&apos;s work together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
