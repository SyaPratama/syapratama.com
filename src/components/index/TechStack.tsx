import { FaLaravel, FaGithub, FaJs } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiNextdotjs, SiTypescript, SiReact, SiFigma } from "react-icons/si";
import { RiPhpLine } from "react-icons/ri";
function TechStack() {
  return (
    <>
      <span className="block mb-4 lg:text-base">Current favorite tech stack & tools</span>
      <div className="inline-flex items-center cursor-custom gap-3 text-lg lg:text-2xl">
        <FaLaravel className="hover:text-slate-100/80 transition ease-in-out duration-300" />
        <SiNextdotjs className="hover:text-slate-100/80 transition ease-in-out duration-300"/>
        <SiReact className="hover:text-slate-100/80 transition ease-in-out duration-300"/>
        <SiTypescript className="hover:text-slate-100/80 transition ease-in-out duration-300"/>
        <RiPhpLine className="hover:text-slate-100/80 transition ease-in-out duration-300"/>
        <FaJs className="hover:text-slate-100/80 transition ease-in-out duration-300"/>
        <span className="w-[0.5px] h-3 bg-slate-400/50"></span>
        <VscVscode className="hover:text-slate-100/80 transition ease-in-out duration-300"/>
        <FaGithub className="hover:text-slate-100/80 transition ease-in-out duration-300"/>
        <SiFigma className="hover:text-slate-100/80 transition ease-in-out duration-300"/>
      </div>
    </>
  );
}

export default TechStack;
