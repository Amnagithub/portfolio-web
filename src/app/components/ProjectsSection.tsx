"use client";


import Image from "next/image";
import Link from "next/link";


const ProjectsSection = () => {


  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-2 mb-2 md:mb-2">
        My Projects
      </h2>
  <section className="text-gray-600 body-font ">
    <div className="container px-5 py-9 mx-auto flex flex-wrap">
      <div className="lg:w-2/3 mx-auto">
        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 ">
         
          <Image
          width={800}
          height={800}
          alt="gallery"
          className="hover:border-yellow-950 hover:border-4  object-cover h-full object-center block opacity-25 absolute inset-0"
          src="/web-design.jpg"
          />

          <div className="text-center relative w-full">
            <h2 className="text-2xl text-gray-950 font-medium title-font mb-2">
              Blogs Website
            </h2>
            <p className="leading-relaxed md:mb-2 text-base">
              A blog website is designed to provide a knowledge about Web Designs.Its routed 3 pages Home,About and Contact. Its contains 6 diffrent blogs and detailed pages as well.
            </p>
            <button className="mt-3 text-indigo-500 inline-flex items-center">
              
            <Link target="blank" href="https://blogs-website-6fry.vercel.app/">check this out!</Link>
            </button>
              </div>
                </div>
       
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-1/2">
            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <Image
              width={100}
              height={100}
              alt="gallery"
              className="hover:border-yellow-950 hover:border-4 w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="/image2.jpg"
              />
              <div className="text-center relative w-full">
                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                Portfolio WebPage Design
                </h2>
                <p className="leading-relaxed">
                Its a Simple portfolio style page. Included 4 pages Home,Poftfolio,About and Contact-us. 
                </p>
                <button className="mt-3 text-indigo-500 inline-flex items-center">
              <Link target="blank" href="https://my-portfolio-assignment3.vercel.app"> check this out!</Link>
            </button>
              </div>
            </div>
          </div>
          
          <div className="px-2 w-1/2">
            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <Image
              width={400}
              height={400}
              alt="gallery"
              className="hover:border-yellow-950 hover:border-4 object-cover h-full object-center block opacity-25 absolute inset-0"
              src="/iphone14.png" />
              <div className="text-center relative w-full">
                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                  Ecommerce Website
                </h2>
                <p className="leading-relaxed">
                  Its an E-commerce web page Figma design for Mobile.
                  Included with diffrent section of the product are shown.               </p>
                <button className="mt-3 text-indigo-500 inline-flex items-center">
               <Link target="blank" href="https://mobile-web-psi.vercel.app/"> check this out!</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
     
    </section>
  )
}



export default ProjectsSection;