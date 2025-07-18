import { FaFileLines } from "react-icons/fa6";

function Button() {
  return (
    <>
      <button className="px-10 py-2 rounded-md lg:px-14 lg:py-3 lg:rounded-lg font-bold bg-slate-800/25 border-1 border-slate-400/10 hover:text-slate-400 transition duration-300 cursor-custom backdrop-blur-md">
        Hire Me
      </button>
      <button className="inline-flex items-center text-slate-400 hover:text-slate-200 transition ease-in-out duration-300 font-semibold gap-2 cursor-custom">
        <FaFileLines/>
        Resume
      </button>
    </>
  );
}

export default Button;
