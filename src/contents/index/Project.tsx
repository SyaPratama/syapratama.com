import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ProjectContainer from "./layout/ProjectContainer";

function Project() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cardProject = gsap.utils.toArray(".slide");
    const cardContainer = document.querySelector(".project-container");
    if (cardContainer) {
      gsap.to(cardContainer, {
        x: () => window.innerWidth - cardContainer.scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: "#projects-wrapper",
          start: "top top",
          end: "+=" + cardProject.length * 50 + "%",
          pin: true,
          scrub: 0.65,
        },
      });
    }
  }, []);

  return (
    <section
      id="projects-wrapper"
      className="w-full h-screen overflow-hidden background-grid"
    >
      <div className="content-wrapper">
        <div className="w-full h-screen flex items-center">
          <ProjectContainer />
        </div>
      </div>
    </section>
  );
}

export default Project;
