import ServiceCard from "@/components/index/ServiceCard";
import Link from "next/link";

function Projects() {
  return (
    <section className="w-full background-grid pb-36">
      <div className="content-wrapper">
        <div className="relative z-40">
          <div className="w-full inline-flex items-center justify-between">
            <h2 className="text-4xl font-bold">Projects</h2>
            <Link className="text-xl font-semibold hover:text-slate-400 duration-300" href={""}>
              List More
            </Link>
          </div>

          <div className="w-full py-12 inline-grid grid-cols-4 gap-8">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
