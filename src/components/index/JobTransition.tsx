import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useMemo, useRef, useState } from "react";

function JobTransition() {
  const textRef = useRef<HTMLDivElement>(null);
  const [textIndex, setTextIndex] = useState(0);
  const textList = useMemo(
    () => [
      "Software-Enginer",
      "Game-Developer",
      "Iot-Developer",
      "Tech-Enthusiast",
      "Laravel-Lovers",
      "FullStack Developer",
    ],
    []
  );

  useEffect(() => {
    gsap.registerPlugin(SplitText);
    const textDOM = textRef.current;
    if (!textDOM) return;
    const intervalId = setInterval(() => {
      textDOM.innerHTML = textList[textIndex];
      gsap.set(textDOM, { opacity: 1 });

      const split = new SplitText(textDOM, { type: "chars" });
      gsap.from(split.chars, {
        y: 20,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05,
      });

      setTextIndex((prev) => (prev + 1) % textList.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [textList, textIndex]);
  return (
    <>
      <span
        ref={textRef}
        className="block text-md lg:text-2xl font-medium mb-2 text-slate-200"
      >
        FullStack Developer
      </span>
    </>
  );
}

export default JobTransition;
