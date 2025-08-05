import ProjectCard from "@/components/index/ProjectCard";
import { projectData } from "@/data/dummy/project";

function ProjectContainer() {
  return (
    <div className="project-container w-fit h-screen flex gap-20 items-center flex-nowrap">
      {projectData.map((item, index) => (
        <ProjectCard key={index} className="bg-slate-900/80 backdrop-blur-2xl ring-4 ring-slate-600/50 w-[30rem] h-[20rem] md:w-[60rem] md:h-[35rem]">
          <img
            className="absolute top-0 -z-10 w-full h-full rounded-2xl object-cover"
            src={item.img}
            alt={item.title}
          />
          <div className="absolute w-full inset-0 rounded-2xl bg-gradient-to-t from-black/95 via-black/30 to-black/10 md:via-black/10"></div>
          <div className="absolute p-10 flex gap-2 flex-col">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <span className="text-lg">{item.description}</span>
          </div>
        </ProjectCard>
      ))}
      <ProjectCard className="w-[10rem] h-[20rem] md:w-[30rem] md:h-[35rem]" />
    </div>
  );
}

export default ProjectContainer;
