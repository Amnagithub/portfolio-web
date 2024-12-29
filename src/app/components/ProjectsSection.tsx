"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <section className="text-white body-font mt-11 ">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-2">
          My Projects
        </h2>
        <div className="container px-5 py-6 flex flex-wrap">
          <div className="lg:w-1/2 mx-auto">
            <div className=" text-startt flex flex-wrap w-full bg-gray-950 py-20 px-10 md:grid-flow-col auto-cols-max md:py-14 md:px-15 sm:py-5 relative mb-4 ">
              <Image
                width={800}
                height={800}
                alt="gallery"
                className="hover:border-yellow-300 hover:border-4  object-cover h-full object-center block opacity-25 absolute inset-0"
                src="/web-design.jpg"
              />
              <div className="relative w-full">
                <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-2">
                  Blogs Website
                </h2>
                <p className="leading-relaxed md:mb-2 text-left text-white">
                  A blog website is designed to provide a knowledge about Web
                  Designs.Its routed 3 pages Home,About and Contact. Its
                  contains 6 diffrent blogs and detailed pages as well.
                </p>
                <button className="mt-3 text-indigo-500 inline-flex items-center">
                  <Link
                    target="blank"
                    href="https://blogs-website-red.vercel.app/"
                  >
                    check this out!
                  </Link>
                </button>
              </div>
            </div>

            <div className=" text-startt flex flex-wrap w-full bg-gray-950 py-20 px-10 md:grid-flow-col auto-cols-max md:py-14 md:px-15 sm:py-5 relative mb-4 ">
              <Image
                width={570}
                height={570}
                alt="gallery"
                className="hover:border-yellow-300 hover:border-4  object-cover h-full object-center block opacity-25 absolute inset-0"
                src="/Group 8.png"
              />
              <div className="relative w-full">
                <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-2">
                  Furnico E-commerce Website
                </h2>
                <p className="leading-relaxed md:mb-2 text-left text-white">
                  An interactive E-commerce Website is designed for public
                  use.Many features are included in this website.Shop now and
                  enjoy the shopping experience.
                </p>
                <button className="mt-3 text-indigo-500 inline-flex items-center">
                  <Link
                    target="blank"
                    href="https://e-commerce-web-9xhx.vercel.app/"
                  >
                    {" "}
                    check this out!
                  </Link>
                </button>
              </div>
            </div>

            <div className=" text-startt flex flex-wrap w-full bg-gray-950 py-20 px-10 md:grid-flow-col auto-cols-max md:py-14 md:px-15 sm:py-5 relative mb-4 ">
              <Image
                width={800}
                height={800}
                alt="gallery"
                className="hover:border-yellow-300 hover:border-4  object-cover h-full object-center block opacity-25 absolute inset-0"
                src="/coin.png"
              />
              <div className="relative w-full">
                <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-2">
                  Coin Market Rates
                </h2>
                <p className="leading-relaxed md:mb-2 text-left text-white">
                  This website is designed for online Coin Market Rates for
                  CSR/ISR/SSG and SSR. Data Fetching from Coin API and shown in
                  diffrent routes.{" "}
                </p>
                <button className="mt-3 text-indigo-500 inline-flex items-center">
                  <Link
                    target="blank"
                    href="https://coins-market-rouge.vercel.app/"
                  >
                    {" "}
                    check this out!
                  </Link>
                </button>
              </div>
            </div>

            <div className=" text-startt flex flex-wrap w-full bg-gray-950 py-20 px-10 md:grid-flow-col auto-cols-max md:py-14 md:px-15 sm:py-5 relative mb-4 ">
              <Image
                width={570}
                height={570}
                alt="gallery"
                className="hover:border-yellow-300 hover:border-4  object-cover h-full object-center block opacity-25 absolute inset-0"
                src="/iphone14.png"
              />
              <div className="relative w-full">
                <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-2">
                  Mobile Store
                </h2>
                <p className="leading-relaxed md:mb-2 text-left text-white">
                  This is a layout page of a Mobile store where the front layout
                  shown with diffrent sections of the available products .{" "}
                </p>
                <button className="mt-3 text-indigo-500 inline-flex items-center">
                  <Link
                    target="blank"
                    href="https://mobile-web-blond.vercel.app/"
                  >
                    {" "}
                    check this out!
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectsSection;
