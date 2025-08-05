"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaFileLines } from "react-icons/fa6";

function ButtonResume() {
  const [repeat, setRepeat] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Clear any existing timeouts to avoid overlapping
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!repeat) {
      tl.to("#HireMe", { opacity: 0, duration: 3, delay: 6 })
        .set("#HireMe", { display: "none" }) // Instant display change
        .set("#Resume", { display: "inline-flex" }) // Ensure it's visible
        .to("#Resume", { opacity: 1, duration: 3, delay: 1 });

      timeoutRef.current = setTimeout(() => setRepeat(true), 16000);
    } else {
      tl.to("#Resume", { opacity: 0, duration: 3, delay: 6 })
        .set("#Resume", { display: "none" })
        .set("#HireMe", { display: "inline-flex" })
        .to("#HireMe", { opacity: 1, duration: 3 });

      timeoutRef.current = setTimeout(() => setRepeat(false), 16000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [repeat]);

  return (
    <>
      <button
        id="HireMe"
        style={{ opacity: 1, transition: "opacity 0.3s" }}
        className="inline-flex items-center opacity-70 text-purple-500 pointer-events-none transition ease-in-out font-semibold gap-3 cursor-custom"
      >
        <div className="indicator bg-purple-500"></div>
        I&rsquo;m Ready To Hire...
      </button>
      <button
        id="Resume"
        style={{ opacity: 0, display: "none" }}
        className="inline-flex opacity-0 items-center text-slate-400 hover:text-slate-200 transition ease-in-out duration-300 font-semibold gap-2 cursor-custom"
      >
        <FaFileLines />
        Resume
      </button>
    </>
  );
}

export default ButtonResume;
