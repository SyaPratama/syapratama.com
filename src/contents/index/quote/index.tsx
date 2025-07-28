import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

function Quote() {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, {
      type: "chars",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#textSection",
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.5,
          markers: false,
        },
      })
      .set(
        split.chars,
        {
          color: "#e2e8f0",
          stagger: 0.1,
        },
        0.1
      );
  }, []);

  return (
    <section id="textSection" className="w-full h-screen bg-slate-50 dark:bg-slate-950">
      <div className="flex h-full px-2 md:px-30 lg:px-46 justify-center items-center ">
        <h1 ref={textRef} className="text-3xl lg:text-6xl text-slate-600/50 text-center font-bold">
          Extraordinary development, will produce a extraordinary result
        </h1>
      </div>
    </section>
  );
}

export default Quote;
