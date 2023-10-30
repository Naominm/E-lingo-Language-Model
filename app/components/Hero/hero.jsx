import React from 'react';
import Image from "next/image";
import { Star, Globe, Info, User } from 'react-feather';

function Hero() {
  return (
    <div className="w-full h-[calc(100vh - 100px)] relative">
      {/* Your large hero image */}
      <Image
        src="/images/hero.svg"
        layout="fill"
        objectFit="cover"
        className="md:object-cover absolute h-full w-full z-20 right-0 top-0 "
        alt="relative image"
      />
      <div className="container relative z-30">
        {/* Your navigation bar */}
        <div className="navbar flex justify-between items-center absolute top-0 left-0 right-0 pt-25 color-[##FF5F1F]">
          <Image
            src="/images/E-Lingo.svg"
            width={200}
            height={200}
            className="pl-10 pt-3"
            alt="relative image"
          />
          <a className="flex items-center">
            <h1 className="navbar-brand ml-2">Start Translator</h1>
            <Star color="#FF5F1F" size={24} />
          </a>
          <a className="flex items-center">
            <h1 className="navbar-brand ml-2">All languages</h1>
            <Globe color="#FF5F1F" size={24} />
          </a>
          <a className="flex items-center">
            <h1 className="navbar-brand ml-2">About</h1>
            <Info color="#FF5F1F" size={24} />
          </a>
          <a className="flex items-center">
            <div className="relative">
              <h1 className="navbar-brand mt-6 w-20 h-20 ml-2 border border-solid border-[#FF5F1F] border-1 rounded-full bg-none flex items-center justify-center">
                <Image
                  src="/images/User.svg"
                  width={30}
                  height={30}
                  alt="user image"
                />
              </h1>
            </div>
          </a>
        </div>
        {/* First Row (Content) */}
        <div className="flex">
  <div className="w-full md:w-1/2 lg:w-1/3 sm:w-full pt-10 px-5">
    <h3 className="text-4xl font-bold pt-20 pl-35 leading-relaxed color-[#FF5F1F]">
      Welcome to E-Lingo, where we translate Native Languages through predictive typing and many more features. and many other features.
    </h3>
    {/* Your button */}
    <button className="relative w-30 h-15 py-3 px-10 mt-10 ml-20 items-center text-white border border-solid border-white border-1 bg-none rounded-full">
      Get Started
    </button>
  </div>
          <div className="w-full md:w-1/2 lg:w-2/3 sm:w-full">
            {/* Your image */}
            <Image
              src="/images/image5.svg"
              width={700}
              height={300}
              className="object-cover ml-20"
              alt="relative image"
            />
          </div>
        </div>
        {/* Second Row (Button) */}
     
      </div>
    </div>
  );
}

export default Hero;
