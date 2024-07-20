import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative mb-8 h-[370px] md:h-[480px]">
              {/* Image */}
              {/* <img
                src="" // Your image source here
                alt="product"
                className="h-full w-full object-cover object-center"
              /> */}

              <div className="absolute top-0 left-0 flex h-full w-full items-center px-8 md:px-12">
                <div className="max-w-[420px]">
                  <h3>
                    <a
                      href="filters.html"
                      className="mb-5 block text-2xl font-bold text-black hover:text-blue-400 sm:text-4xl"
                    >
                      Mega Sale
                    </a>
                  </h3>
                  <p className="mb-10 text-base font-medium text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ornare vestibulum mollis. Nam vitae augue purus.
                    Integer ac accumsan nunc.
                  </p>
                  {/* Shop now and search bar */}
                  <a
                    href=""
                    className="inline-flex items-center justify-center rounded bg-blue-700 py-[10px] px-8 text-center text-base font-semibold text-white hover:bg-opacity-90"
                  >
                    Shop Now
                  </a>
                  <div>
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search a Book"
                      className="py-2 px-2 rounded-sm outline-none"
                    />
                    <button className="bg-blue-700 px-6 py-2 font-medium hover:bg-black transition-all ease-in duration-200 hover:text-white">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Empty for now) */}
          <div className=" lg:w-1/2 px-4 flex justify-center items-center">
            {/* You can add content to the right section later if needed */}
            <BannerCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
