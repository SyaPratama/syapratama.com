import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

export default function Social() {
  return (
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
  );
}
