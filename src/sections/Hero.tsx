import Image from "next/image";
import Cog from "../assets/cog.png";
import Noodle from "../assets/noodle.png"
import Cylinder from "../assets/cylinder.png"

export const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-200 from-50% to-[#2d46a3] overflow-x-clip">
      <div className="md:w-full md:flex  items-center">
        <div className="flex flex-col py-7 px-5 gap-6 ">
          <div className="py-2">
            <p
              className="border border-gray-400 w-fit py-1 px-3
        font-semibold rounded-full md:text-lg"
            >
              Version 2.0 is here
            </p>
          </div>
          <div className="bg-gradient-to-b from-black from-70% to-[#183ec2] inline-block bg-clip-text pt-4 md:max-w-[40rem]">
            <p className="text-6xl font-bold text-transparent md:text-8xl">
              Pathway to productivity
            </p>
          </div>
          <div className="text-[1.4rem] md:text-3xl font-normal ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </div>
          <div className="flex gap-5">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-transparent">
              <p className="font-semibold">Learn more</p>
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>

        <div className="px-6 py-16 md:relative ">
          <Image className="hidden md:flex md:absolute md:top-3 md:-left-1/4" width={250} height={300} src={Cylinder} alt="cylinder-logo"/>
          <Image
            src={Cog}
            alt="cog-img"
            className="md:w-auto md:max-w-none md:h-[678px]"
          />
          <Image className="hidden md:flex md:absolute md:-right-5 md:-bottom-28  md:rotate-[20deg]" src={Noodle} width={250} height={300} alt="noodle-logo"/>
        </div>
        
      </div>
    </div>
  );
};
