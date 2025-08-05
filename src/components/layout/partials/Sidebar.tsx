import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAlignLeft, FaCode } from "react-icons/fa6";
import { FaLayerGroup, FaUser } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function Sidebar() {
  const [active, setActive] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const t = gsap.timeline();

    if (sidebarRef.current) {
      if (active) {
        t.to(sidebarRef.current, {
          translateX: "0%",
          ease: "power1.out",
          duration: 0.3,
          overwrite: true,
        });

        t.to(overlayRef.current, {
          pointerEvents: "auto",
          ease: "power1.out",
          opacity: 1,
          duration: 0.3,
          overwrite: true,
          cursor: "pointer",
        });
      } else {
        t.to(sidebarRef.current, {
          translateX: "-105%",
          ease: "power1.in",
          duration: 0.3,
          overwrite: true,
        });

        t.to(overlayRef.current, {
          pointerEvents: "none",
          opacity: 0,
          ease: "power1.in",
          duration: 0.3,
          overwrite: true,
        });
      }
    }
  }, [active]);

  return (
    <>
      <button
        onClick={() => setActive(true)}
        className=" fixed text-xl top-10 left-8 z-20 cursor-custom text-slate-600 hover:text-slate-200/50 transition duration-300 ease-in-out"
      >
        <FaAlignLeft />
      </button>
      <aside
        ref={sidebarRef}
        className="fixed py-8 px-6 -translate-x-[105%] transform top-0 left-0 z-50 w-64 md:w-84 h-screen bg-slate-950 shadow-sm border-r border-slate-800 shadow-slate-800"
      >
        <header className="pb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 533 578"
            fill="none"
            className="size-10"
          >
            <path
              d="M50.9627 15.043C51.0672 15.1082 73.3233 28.9732 84.7361 29.5293C96.1757 30.0862 114.001 21.3876 132.674 23.958C160.995 27.8569 168.274 36.7175 192.052 52.9307C210.028 65.1876 223.101 50.7029 223.101 70.2031C223.101 118.935 203.491 125.363 179.522 134.277C167.84 138.622 140.618 150.209 140.193 160.37L140.188 160.609C140.413 162.348 140.424 164.103 140.25 165.878C140.937 179.506 146.262 215.849 182.791 230.109L183.142 230.247C254.317 258.032 304.522 277.631 312.679 376.087C315.021 404.342 313.588 417.875 308.961 435.891C309.074 435.834 328.879 426.015 421.177 397.816C491.312 376.389 515.899 329.592 478.827 282.483C456.55 254.175 406.921 236.36 376.96 223.683C317.696 198.606 316.989 147.985 336.198 107.654C349.467 79.7955 376.829 54.3067 409.099 41.7871C409.343 41.674 489.415 4.50089 499.527 32.873C509.654 61.2879 469.021 59.0595 437.97 70.7598C406.921 82.4601 393.599 85.9554 376.96 107.654C364.57 123.812 355.884 160.896 380.772 182.75C438.515 233.452 544.597 223.459 531.122 326.063C522.847 389.069 483.278 417.504 402.656 435.891C367.027 444.016 296.102 477.39 295.886 477.491C275.64 519.019 234.661 545.077 149.356 549.061C148.124 545.59 147.405 537.211 145.984 512.722C142.962 460.648 149.006 440.718 161.094 409.217C173.166 377.754 202.571 332.183 202.643 332.071C202.556 332.146 164.847 364.302 144.473 438.79C134.807 474.133 142.045 547.743 142.204 549.34C141.933 549.348 141.661 549.358 141.389 549.366C138.512 557.111 119.504 571.554 111.428 572.21C103.095 572.886 72.7289 573.323 89.6394 544.908C106.549 516.493 89.7589 499.164 84.7361 460.776C83.9334 454.642 82.9962 448.533 81.9285 442.454C79.8538 462.521 76.3012 481.824 70.573 498.106C58.5871 532.177 52.9509 568.979 20.4568 576.667C-23.7219 587.119 16.8693 533.765 20.4568 498.106C22.049 482.28 25.8518 431.669 25.5584 387.954C25.1905 333.168 16.8689 273.568 16.8689 273.568C1.92959 198.607 16.8692 113.352 41.157 60.7305C41.0929 60.6448 23.195 36.707 31.3513 0L50.9627 15.043ZM34.823 10.0293C34.813 10.0895 32.1516 26.1801 39.117 40.1289C46.0955 54.104 46.6326 55.7168 46.6326 55.7168C48.7798 50.8793 49.3168 47.0185 55.7586 41.7412C62.1699 36.4889 69.1132 34.2379 69.1785 34.2168C69.1322 34.1962 64.3014 32.0351 54.6853 25.6162C46.858 20.3913 34.8902 10.0872 34.823 10.0293Z"
              className="fill-slate-600"
            />
          </svg>
        </header>
        <nav className="w-full">
          <ul className="flex flex-col gap-4 font-semibold mb-6 text-slate-400">
            <div className="text-[12px] mb-1 text-gray-400 font-medium">
              Personal
            </div>
            <li className="text-md">
              <Link className="inline-flex items-center gap-2" href={""}>
                <FaUser />
                About
              </Link>
            </li>
            <li className="text-md">
              <Link className="inline-flex items-center gap-2" href={""}>
                <IoSchoolSharp />
                Experience
              </Link>
            </li>
          </ul>
          <div className="w-full h-[1.5px] mb-5 bg-gradient-to-r from-slate-600 to-slate-950/60"></div>
          <ul className="flex flex-col gap-4 font-semibold text-slate-400">
            <div className="text-[12px] mb-1 text-gray-400 font-medium">
              Works
            </div>
            <li className="text-md">
              <Link className="inline-flex items-center gap-2" href={""}>
                <FaLayerGroup />
                Projects
              </Link>
            </li>
            <li className="text-md">
              <Link className="inline-flex items-center gap-2" href={""}>
                <FaCode />
                Skillset
              </Link>
            </li>
            <li className="text-md">
              <Link className="inline-flex items-center gap-2" href={""}>
                <IoMdMail />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div
        ref={overlayRef}
        onClick={() => setActive(false)}
        className="fixed top-0 opacity-0 pointer-events-none left-0 z-20 bg-slate-950/40 backdrop-blur-md w-full h-screen"
      ></div>
    </>
  );
}

export default Sidebar;
