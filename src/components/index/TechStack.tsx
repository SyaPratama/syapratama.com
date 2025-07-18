import { FaLaravel, FaGithub, FaJs } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiNextdotjs, SiTypescript, SiReact, SiFigma } from "react-icons/si";
import { RiPhpLine } from "react-icons/ri";
function TechStack() {
  return (
    <>
      <span className="block mb-4 lg:text-base">Current favorite tech stack & tools</span>
      <div className="inline-flex items-center gap-3 text-lg lg:text-2xl">
        <FaLaravel />
        <SiNextdotjs />
        <SiReact />
        <SiTypescript />
        <RiPhpLine />
        <FaJs />
        <span className="w-[0.5px] h-3 bg-slate-400/50"></span>
        <VscVscode />
        <FaGithub />
        <SiFigma />
      </div>
    </>
  );
}

export default TechStack;
