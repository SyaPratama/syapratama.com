"use client";

import { FaFileLines } from "react-icons/fa6";

function ButtonResume() {
  return (
    <>
      <button className="inline-flex items-center text-slate-400 hover:text-slate-200 transition ease-in-out duration-300 font-semibold gap-2 cursor-custom">
        <FaFileLines />
        Resume
      </button>
    </>
  );
}

export default ButtonResume;
