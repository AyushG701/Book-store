import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Review = () => {
  return (
    <>
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
          Our Customers
        </h3>
      </div>

      {/* First Testimonial */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full pb-7 "
        >
          <SwiperSlide className="shadow-2xl bg-white  md:m-5 rounded-lg border">
            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    alt="User Avatar"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Neque cupiditate assumenda in maiores repudi mollitia
                    architecto.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white  md:m-5 rounded-lg border">
            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    alt="User Avatar"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Neque cupiditate assumenda in maiores repudi mollitia
                    architecto.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white  md:m-5 rounded-lg border">
            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    alt="User Avatar"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Neque cupiditate assumenda in maiores repudi mollitia
                    architecto.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white  md:m-5 rounded-lg border">
            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    alt="User Avatar"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Neque cupiditate assumenda in maiores repudi mollitia
                    architecto.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white  md:m-5 rounded-lg border">
            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    alt="User Avatar"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Neque cupiditate assumenda in maiores repudi mollitia
                    architecto.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <!-- Second Testimonial -->
  <div class="mb-12 md:mb-0">
    <div class="mb-6 flex justify-center">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
        class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 class="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">
      Graphic Designer
    </h6>
    <p class="mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid commodi.
    </p>
    <ul class="mb-0 flex items-center justify-center">
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5 text-yellow-500">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd" />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5 text-yellow-500">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd" />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5 text-yellow-500">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd" />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5 text-yellow-500">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd" />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5 text-yellow-500">
          <path
            d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
        </svg>
      </li>
    </ul>
  </div>

  <!-- Third Testimonial --> */}
    </>
  );
};

export default Review;
