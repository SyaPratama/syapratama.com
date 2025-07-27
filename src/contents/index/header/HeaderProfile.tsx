import ButtonHire from "@/components/index/ButtonHire";
import ButtonResume from "@/components/index/ButtonResume";
import JobTransition from "@/components/index/JobTransition";
import TextName from "@/components/index/TextName";

function HeaderProfile() {
  return (
    <>
      <div className="relative z-10">
        <div className="text-slate-200 mt-3 mb-12">
          <div className="text-3xl md:text-7xl gap-2 lg:gap-3 inline-flex items-center font-bold">
            <span>I&apos;m</span>
            <div className="w-6 h-6 rounded-sm lg:w-14 lg:h-14 bg-red-300 mt-2 lg:rounded-xl"></div>
            <TextName />
          </div>
        </div>
        <div className="text-slate-400 mb-8">
          <JobTransition />
          <span className="block text-sm lg:text-xl font-normal">
            like to explore & professional personality
          </span>
        </div>
        <div className="relative z- mb-12">
          <div className="inline-flex text-sm lg:text-lg gap-4">
            <ButtonHire/>
            <ButtonResume/>
          </div>
        </div>
        <div className="text-xs lg:text-md text-slate-400">
          {/* <TechStack /> */}
        </div>
      </div>
    </>
  );
}

export default HeaderProfile;
