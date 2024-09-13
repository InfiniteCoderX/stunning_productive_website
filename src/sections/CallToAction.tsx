import Image from "next/image";
import HexaCube from "@/assets/cube-helix.png"
import Cube from "@/assets/cube.png"
// import { ManagementData } from "@/data/Management.js"



export const CallToAction = () => {
  return (
    <div className="md:w-full md:flex flex-col bg-white py-5">
        <div className="flex flex-col py-7 px-5 gap-6">
          <div className="py-2 flex justify-center">
            <p
              className="border border-gray-400 w-fit py-1 px-3
        font-normal rounded-full md:text-md"
            >
              Everything you need
            </p>
          </div>

          <div className="flex flex-col text-center items-center gap-4 md:gap-8">
          <div className="bg-gradient-to-b from-black from-80% to-[#183ec2] inline-block bg-clip-text pt-4 md:max-w-[40rem]">
            <p className="text-4xl font-bold text-transparent md:text-6xl">
            Streamlined for easy management
            </p>
          </div>
          <div className="w-96 md:w-[40rem] text-[1.3rem] md:text-2xl font-normal ">
          Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
          </div>

          </div>
        </div>

        
        <div className="  flex flex-col justify-center items-center gap-10 lg:flex-row mt-10 md:gap-20 mx-10">

          {/* {
            ManagementData.map((items, index) => (
              <div key={index} className="easy-management">
            <Image src={items.img} width={300} height={300} alt={items.alt}/>
            
            <h2 className="text-xl md:text-3xl font-semibold">Integration ecosystem</h2>
            <p className="text-center md:text-xl px-6">Enhance your productivity by connecting with your favorite tools, keeping all your
            essentials in one place.</p>
          </div>
            ))
          } */}

        


          <div className="easy-management ">
            <Image src={HexaCube} alt="hexa Cube img"/>
            <h2 className="text-xl md:text-2xl font-semibold">Integration ecosystem</h2>
            <p className="text-center md:text-xl">Enhance your productivity by connecting with your favorite tools, keeping all your
            essentials in one place.</p>
          </div>

          <div className="easy-management ">
            <Image src={Cube} alt="hexa Cube img"/>
            <h2 className="text-xl md:text-2xl font-semibold">Goal setting and tracking</h2>
            <p className="text-center md:text-xl">Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>
          </div>
          
        </div>


        </div>
  );
};
