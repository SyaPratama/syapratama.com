import ServiceCard from "@/components/index/ServiceCard";
import { MdOutlineWeb } from "react-icons/md";

export default function Card() {
  return (
    <div className="w-full py-12 inline-grid grid-cols-4 gap-8">
      <ServiceCard>
        <div className="w-14 h-14 bg-slate-700/50 p-2 rounded-full inline-flex items-center justify-center mb-3">
          <MdOutlineWeb className="text-3xl" />
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-md">We create modern, responsive, and user-friendly websites to help businesses grow online.</p>
        </div>
      </ServiceCard>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
}
