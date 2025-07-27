import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <section className="w-full background-grid background-grid-fade-in py-14">
      <div className="content-wrapper">
        <div className="w-full flex flex-col items-center">
          <div className="inline-flex mb-6 text-2xl gap-3 cursor-custom">
            <Link
              className="hover:text-slate-400 ease-in-out cursor-[inherit] duration-300"
              href={""}
            >
              <FaGithub />
            </Link>
            <Link
              className="hover:text-slate-400 ease-in-out cursor-[inherit] duration-300"
              href={""}
            >
              <FaInstagram />
            </Link>
            <Link
              className="hover:text-slate-400 ease-in-out cursor-[inherit] duration-300"
              href={""}
            >
              <FaLinkedin />
            </Link>
            <Link
              className="hover:text-slate-400 ease-in-out cursor-[inherit] duration-300"
              href={""}
            >
              <FaTiktok />
            </Link>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-md font-normal">PawDev &#128900; Studio</span>
            <span className="text-sm font-normal">
              &copy; 2025 SyaPratama. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
