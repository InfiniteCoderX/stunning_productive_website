import Image from "next/image";
import Logosass from "../assets/logosaas.png";
import Menu from "../assets/menu.svg"

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-20">
      <div className="py-3 text-gray-200 bg-black gap-2 flex justify-center items-center">
        <p className="md:flex hidden text-gray-400">This page is included in a free SaaS Website Kit.</p>
        <div className="flex gap-2">
        View the complete kit
          <i className="ri-arrow-right-line"></i>
        </div>
      </div>
      <div className="w-full h-14 pt-2 backdrop-blur-sm">
        <div className="max-sm:container px-7">
          <div className="flex justify-between items-center">
            <Image src={Logosass} width={40} height={40} alt="logo" />
            <Menu className="w-6 h-6 md:hidden" />
          <nav className="md:flex hidden gap-5 justify-center items-center font-semibold">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="btn btn-primary">Get for free</button>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
