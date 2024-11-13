"use client"
import thingsWeDo from "@/datas/weDo";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 467 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2
  }
};

export default function Home() {
  return (
    <>
      <div className="rounded-md bg-home bg-cover w-full lg:w-auto lg:aspect-[10/4.5]">
        <div className="w-full h-full bg-black bg-opacity-60 flex flex-col items-start justify-center px-10 py-10 lg:py-0 rounded-md gap-6">
          <h1 className="lg:text-6xl text-4xl text-balance text-white font-black">We build systems. We create websites.</h1>
          <p className="text-white font-normal text-[16px] ">CodeSol is a team of software developers who help companies design and build custom software solutions. We&apos;re experts in full-stack development, and we&apos;ve worked with a wide range of clients to deliver high-quality products.</p>
          <button className="button">Get in touch</button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 w-full lg:w-auto">
        <h1 className="font-black text-4xl text-preto">What we do</h1>
        <p className="font-normal text-[16px] text-preto lg:w-4/5 text-balance">Our team has experience in a wide range of technologies, frameworks, and platforms. We provide high-quality, custom software development services tailored to your specific needs.</p>

        <div className="lg:grid grid-cols-5 gap-3 pt-8 hidden">
          {thingsWeDo.map((thing, index) => (
            <div className="bg-[#F7FAFC] border border-[#ccd6eb] rounded-md px-3 py-6 flex flex-col items-start justify-start gap-2" key={index}>
              <Image src={thing.icon} alt="Icon" />
              <h1 className="font-bold text-preto text-md">{thing.title}</h1>
              <p className="font-normal text-[#4566A1] text-sm">{thing.description}</p>
            </div>
          ))}
        </div>

        <Carousel className="lg:hidden w-full" responsive={responsive} showDots={false} infinite autoPlay autoPlaySpeed={5000} removeArrowOnDeviceType="mobile" deviceType="mobile" draggable swipeable sliderClass="itemcarrossa">
          {thingsWeDo.map((thing, index) => (
            <div className="bg-[#F7FAFC] h-60 border border-[#ccd6eb] rounded-md px-3 py-6 flex flex-col items-start justify-start gap-2" key={index}>
              <Image src={thing.icon} alt="Icon" />
              <h1 className="font-bold text-preto text-md">{thing.title}</h1>
              <p className="font-normal text-[#4566A1] text-sm">{thing.description}</p>
            </div>
          ))}
        </Carousel>

      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <h1 className="font-black text-4xl text-preto">Why choose CodeSolutions?</h1>
        <p className="font-normal text-[16px] text-preto w-4/5 text-balance">When you work with CodeSol, you&apos;re not just hiring a team of developers. You&apos;re partnering with a company that&apos;s dedicated to delivering exceptional software solutions. Here are a few reasons why clients choose us for their development needs:</p>
      </div>
    </>
  );
}
