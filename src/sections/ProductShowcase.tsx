import Image from "next/image";
import Product from "../assets/product-image.png"
import { ProductData } from "@/data/ProductData";
import TubeImg from "@/assets/tube.png"
import PyramidImg from "@/assets/pyramid.png"

export const ProductShowcase = () => {

  return (
    <div className="w-full bg-gradient-to-b from-white from-70% to-[#8ba0eb] overflow-x-clip">
    <div className="md:w-full  items-center">
      <div className="flex items-center justify-center text-center flex-col py-4 px-5 gap-4 ">
        <div className="py-2">
          <p
            className="border border-gray-400 w-fit py-1 px-3
      font-semibold rounded-full md:text-lg"
          >
            Boost your productivity
          </p>
        </div>
        <div className="bg-gradient-to-b from-black from-70% to-[#8ba0eb] inline-block bg-clip-text pt-4 md:max-w-[40rem]">
          <p className="text-4xl font-bold text-transparent md:text-6xl">
          A more effective way to track progress
          </p>
        </div>
        <div className="text-[1.4rem] md:text-3xl font-normal md:max-w-[45rem]">
        Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
        </div>
      </div>

      <div className="px-8 py-24 relative flex justify-center items-center my-16 md:my-52 lg:my-[45vh]">
        <Image src={TubeImg} alt="Tube Image" className="product-img hidden md:flex md:top-20 md:-rotate-6 md:-left-24 lg:top-56"/>
        <Image src={PyramidImg} alt="Pyramid Image" className="product-img hidden md:flex md:-right-20 md:-top-56 md:-rotate-12"/>
        <Image src={Product} alt="Product Logo" className="min-sm:shadow-xl absolute -z-0"/>
      </div>

      <div className="py-6 px-10 md:px-14 lg:px-20 gap-10 grid md:grid-cols-2 lg:grid-cols-4">
        {
          ProductData.map((items, index) => (
          <div key={index} className="flex flex-col md:gap-3 gap-2">
          <i className={`${items.img} text-3xl md:text-4xl lg:text-5xl`} ></i>
          <div className="font-semibold text-xl md:text-2xl lg:text-3xl">{items.title}</div>
          <div className="text-lg md:text-xl lg:text-2xl">{items.subtitle}</div>
          <div className=" flex justify-center items-center gap-2 w-fit cursor-pointer">
            <p className="text-lg md:text-xl lg:text-2xl">
              Learn more
              </p> 
          <i className="ri-arrow-right-line text-lg font-semibold pt-[3px] md:text-xl"></i>
          </div> 
        </div>
          ))
        }
      </div>


      <div>

      </div>
      
    </div>
  </div>
  );
};
