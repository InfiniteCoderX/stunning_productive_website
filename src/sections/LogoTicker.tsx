import Image from "next/image";
import LogoAcme from "../assets/logo-acme.png"
import LogoApex from "../assets/logo-apex.png"
import LogoCelestial from "../assets/logo-celestial.png"
import LogoEcho from "../assets/logo-echo.png"
import LogoPulse from "../assets/logo-pulse.png"
import LogoQuantum from "../assets/logo-quantum.png"

export const LogoTicker = () => {
  return (
    <div className="bg-white py-8 md:py-10">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <div className="flex justify-center items-center gap-5 flex-none">
        <Image src={LogoAcme} alt="Acme Logo" className="logo-ticker-img" />
        <Image src={LogoApex} alt="Apex Logo" className="logo-ticker-img"/>
        <Image src={LogoCelestial} alt="Celestial Logo" className="logo-ticker-img"/>
        <Image src={LogoEcho} alt="Echo Logo" className="logo-ticker-img"/>
        <Image src={LogoPulse} alt="Pulse Logo" className="logo-ticker-img"/>
        <Image src={LogoQuantum} alt="Quantum Logo" className="logo-ticker-img"/>
      </div>
      </div>
    </div>
  );
};
