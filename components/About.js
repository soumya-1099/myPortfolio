import React from "react";

const About = () => {
  return (
    <div className="my-8 sm:mt-32  ">
      <section className="w-[1024px] max-w-full flex flex-col mx-auto px-4">
      <div className="pb-8">
      <p className="text-4xl text-green font-bold inline border-b-4 border-gray-500">
        About 
      </p>
    
    </div>
        <div>
          <p className="mb-4 text-lg font-normal sm:text-base">
            I am Soumya U. Experienced Software Engineer with 2 years of working
            experience in the Information Technology and Services industry.
            Skilled in JavaScript, React Js, Next.js, HTML5, and CSS3.
          </p>
          <p className="mb-4 text-lg font-normal sm:text-base">
            I&apos;m passionate about music, technology and basically everything
            that makes the internet tick.
          </p>
          <p className="mb-4 text-lg font-normal sm:text-base">
            My previous work experience includes a full time engineering role at
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
