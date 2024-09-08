export const Header = () => {
  return (
    <>
    <div className="w-full h-12 text-gray-200 bg-black gap-2 flex justify-center items-center">
      <p>
      View the complete kit
      </p>
      <div className="">
      <i className="ri-arrow-right-line"></i>
      </div>
    </div>
    <div className= "bg-gray-200 w-full h-14 flex px-4 items-center justify-between">
        <div>
        <img src="./assets/logosaas.png" alt="logo"/>
        </div>
        <div>
        <i className="ri-menu-line text-2xl"></i>
        </div>
    </div>
    </>
  );
};

