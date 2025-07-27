import ServiceCard from "@/components/index/ServiceCard";
import { MdOutlineWeb, MdPalette } from "react-icons/md";
import { IoIosChatboxes, IoLogoGameControllerB } from "react-icons/io";
import { PiMegaphoneDuotone } from "react-icons/pi";
import { SiBlender } from "react-icons/si";


export default function Card() {
  return (
    <div className="w-full py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard className="hover:bg-slate-500/25 transition duration-300 cursor-custom group hover:border-slate-500/40 hover:outline-slate-600/40">
        <div className="w-14 h-14 bg-slate-700/50 transition duration-300 p-2 group-hover:bg-slate-600/50 rounded-full inline-flex items-center justify-center mb-3">
          <MdOutlineWeb className="text-3xl" />
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-md font-normal">We create modern, responsive, and user-friendly websites to help businesses grow online.</p>
        </div>
      </ServiceCard>
      <ServiceCard className="hover:bg-slate-500/25 transition duration-300 cursor-custom group hover:border-slate-500/40 hover:outline-slate-600/40">
        <div className="w-14 h-14 bg-slate-700/50 transition duration-300 p-2 group-hover:bg-slate-600/50 rounded-full inline-flex items-center justify-center mb-3">
          <MdPalette className="text-3xl" />
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-2">Design UI/UX</h3>
          <p className="text-md font-normal">We create clean, user-friendly, and visually appealing UI/UX designs that enhance user experience and help your product stand out.</p>
        </div>
      </ServiceCard>
      <ServiceCard className="hover:bg-slate-500/25 transition duration-300 cursor-custom group hover:border-slate-500/40 hover:outline-slate-600/40">
        <div className="w-14 h-14 bg-slate-700/50 transition duration-300 p-2 group-hover:bg-slate-600/50 rounded-full inline-flex items-center justify-center mb-3">
          <PiMegaphoneDuotone className=" rotate-y-180 text-3xl" />
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-2">Digital Branding</h3>
          <p className="text-md font-normal">We help businesses build a strong online identity through creative design, consistent messaging, and strategic brand positioning.</p>
        </div>
      </ServiceCard>
      <ServiceCard className="hover:bg-slate-500/25 transition duration-300 cursor-custom group hover:border-slate-500/40 hover:outline-slate-600/40">
        <div className="w-14 h-14 bg-slate-700/50 transition duration-300 p-2 group-hover:bg-slate-600/50 rounded-full inline-flex items-center justify-center mb-3">
          <IoIosChatboxes className="text-3xl" />
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-2">Consultation</h3>
          <p className="text-md font-normal">Get expert guidance to help you make smarter decisions and solve problems efficiently.</p>
        </div>
      </ServiceCard>
      <ServiceCard className="hover:bg-slate-500/25 transition duration-300 cursor-custom group hover:border-slate-500/40 hover:outline-slate-600/40">
        <div className="w-14 h-14 bg-slate-700/50 transition duration-300 p-2 group-hover:bg-slate-600/50 rounded-full inline-flex items-center justify-center mb-3">
          <IoLogoGameControllerB className="text-3xl" />
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-2">Game Developer</h3>
          <p className="text-md font-normal">We create fun, engaging, and high-performance games for mobile, web, and desktop platforms.</p>
        </div>
      </ServiceCard>
      <ServiceCard className="hover:bg-slate-500/25 transition duration-300 cursor-custom group hover:border-slate-500/40 hover:outline-slate-600/40">
        <div className="w-14 h-14 bg-slate-700/50 transition duration-300 p-2 group-hover:bg-slate-600/50 rounded-full inline-flex items-center justify-center mb-3">
          <SiBlender className="text-3xl" />
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-2">3D Designer Game</h3>
          <p className="text-md font-normal">We create high-quality 3D models, characters, and environments for games.</p>
        </div>
      </ServiceCard>
    </div>
  );
}
