"use client";

// import { FaLaravel, FaGithub, FaJs } from "react-icons/fa6";
// import { VscVscode } from "react-icons/vsc";
// import { SiNextdotjs, SiTypescript, SiReact, SiFigma } from "react-icons/si";
// import { RiPhpLine } from "react-icons/ri";
function TechStack() {
  // const icons = [
  //   FaLaravel,
  //   SiNextdotjs,
  //   SiReact,
  //   SiTypescript,
  //   RiPhpLine,
  //   FaJs,
  //   VscVscode,
  //   FaGithub,
  //   SiFigma,
  // ];

  return (
    <>
      <span className="block mb-4 lg:text-base">
        Current favorite tech stack & tools
      </span>
      <div className="inline-flex items-center cursor-custom gap-3 text-lg lg:text-2xl">
        {/* {icons.map((Icon, i) => (
          <div key={i}>
            <Icon key={i} className="icon-hover" />
            {i == 5 ? <span className="w-px h-3 bg-slate-400/50"></span> : null}
          </div>
        ))} */}
      </div>
    </>
  );
}

export default TechStack;
