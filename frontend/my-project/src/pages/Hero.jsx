import React from "react";
import { FaPlay } from "react-icons/fa";
import LoginButton from "../Auth/LoginButton";

const Hero = () => {
  const headerLinks = [
    { title: "Features", href: "#" },
    { title: "How It works", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const linkClasses =
    "inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300";
  
  const buttonClasses =
    "inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-200 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <div>
      <header className="py-4 bg-white sm:py-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="AuraUI Home">
              <h1 className=" text-3xl font-bold tracking-wide bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
  CreatoAi
</h1>

              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
              {headerLinks.map(({ title, href }) => (
                <a
                  key={title}
                  href={href}
                  title={title}
                  className={linkClasses}
                >
                  {title}
                </a>
              ))}
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
              <LoginButton/>
            </div>

            
          </div>
        </div>
      </header>

      <section className="relative py-12 bg-white sm:py-16 lg:pt-20 lg:pb-96 xl:pt-24 xl:pb-72">
        <div className="absolute inset-0 hidden lg:block">
          <img
            className="object-cover object-top w-full h-full"
            src="https://www.auraui.com/memeimage/dev-team.png"
            alt="Background"
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-7xl sm:tracking-tight">
            Revolutionize Your Content Creation
            </h1>
            <p className="max-w-xl mx-auto mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
            CreatoAI empowers businesses and creators with high-quality, AI-driven content generation tools. Say goodbye to creative blocks.
            </p>
            <div className="flex flex-col items-center gap-5 mt-8">
              <a
                href="#"
                title="Start Our 14 Days Free Trial"
                className={`${buttonClasses} text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:ring-blue-700`}
              >
                Get Started
              </a>
              <a
                href="#"
                title="Watch 1 Min Intro"
                className={`${buttonClasses} text-gray-900 hover:bg-gray-100 focus:ring-gray-300`}
              >
                <FaPlay className="w-6 h-6 mr-3 -ml-1 text-blue-600" />
                Watch 1 Min Intro
              </a>
            </div>
          </div>

          <div className="-mt-4 sm:-mt-16 md:-mt-32 lg:hidden">
            <img
              className="object-cover object-top w-full h-full"
              src="https://www.auraui.com/memeimage/dev-team.png"
              alt="Background"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
