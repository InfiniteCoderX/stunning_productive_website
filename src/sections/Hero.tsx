export const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-200 from-40% to-[#183ec2]">
      <div className="py-8 px-6">
        <p className="border border-gray-400 w-fit py-1 px-2
        font-semibold rounded-full">
          Version 2.0 is here
        </p>
      </div>
      <div className="flex flex-col px-4 py-2 gap-6">
        <div className="bg-gradient-to-b from-black from-70% to-[#183ec2] inline-block bg-clip-text">
          <p className="text-6xl font-bold text-transparent">
          Pathway to productivity
          </p>
        </div>
        <div className="text-[1rem]">
        Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
        </div>
        <div>
          <button>Get for free</button>
          <button>Learn more <span><i className="ri-arrow-right-line"></i></span></button>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};
