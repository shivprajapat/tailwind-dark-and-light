import React from "react";
// import logo
import LogoDark from "../assets/img/logo-dark.svg";
// import icons
import { BsCheck } from "react-icons/bs";
// import girl image
import GirlImg from "../assets/img/girl.png";
import ThemeButton from "./ThemeButton";

const Hero = () => {
  return (
    <section className="min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark">
      <div className="container mx-auto px-4 lg:px-0">
        {/* header */}
        <header className="flex items-center justify-between py-8">
          {/* logo */}
          <div>
            <a href="#">
              <img src={LogoDark} />
            </a>
          </div>
          <ThemeButton />
          {/* button */}
        </header>
        {/* text & image wrapper */}
        <div className="flex flex-col items-center lg:flex-row min-h-[740px]">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl text-primary font-bold mb-6 leading-[60px] dark:text-white">
              Online Accounting <br />
              <span className="text-accent">Fast & Uncomplicated</span>
            </h1>
            <p className="font-light text-grey mb-12 max-w-[597px] dark:text-white">
              We specialize in small businesses. Our goale is to eliminate
              bureaucracy, creating a modern relationship between your company
              and the accountant.
            </p>
            {/* checked items */}
            <div className="flex flex-col gap-y-6 mb-12">
              {/* item */}
              <div className="flex items-center gap-x-2">
                {/* item icon */}
                <div className="bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white">
                  <BsCheck />
                </div>
                {/* item text */}
                <p className="text-base font-light  dark:text-white">
                  Have your accounting 100% online.
                </p>
              </div>
              {/* item */}
              <div className="flex items-center gap-x-2">
                {/* item icon */}
                <div className="bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white">
                  <BsCheck />
                </div>
                {/* item text */}
                <p className="text-base font-light  dark:text-white">
                  Save with plans starting at $10/month.
                </p>
              </div>
            </div>
            {/* button */}
            <button className="btn">Discover our plans</button>
          </div>
          {/* image */}
          <div className="hidden lg:flex self-end">
            <img src={GirlImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;