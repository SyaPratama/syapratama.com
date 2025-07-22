import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef } from "react";

function TextName() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);
    const textDOM = textRef.current;

    const MAX_DISTANCE = 50;
    const MAX_FONT_WEIGHT = 300;
    const MIN_FONT_WEIGHT = 900;
    const fontWeightItems = new SplitText(textDOM, { type: "chars" }).chars;

    document.addEventListener("mousemove", (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;

      fontWeightItems.forEach((char) => {
        const itemRect = char.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2 + window.scrollX;
        const itemCenterY = itemRect.top + itemRect.height / 2 + window.scrollY;

        const distance = Math.sqrt(
          Math.pow(mouseX - itemCenterX, 2) + Math.pow(mouseY - itemCenterY, 2)
        );

        const fontWeight =
          distance < MAX_DISTANCE
            ? gsap.utils.mapRange(
                0,
                MAX_DISTANCE,
                MIN_FONT_WEIGHT,
                MAX_FONT_WEIGHT,
                Math.max(0, MAX_DISTANCE - distance)
              )
            : MIN_FONT_WEIGHT;

        const color = distance < MAX_DISTANCE ? "#e2e8f0" : "#e2e8f0";

        gsap.to(char, {
          fontVariationSettings: `'wght' ${fontWeight.toFixed(0)}`,
          fontWeight,
          color,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <>
      <span
        ref={textRef}
        className="bg-purple-700 p-2 rounded-md lg:px-3 lg:py-4 lg:rounded-xl text-name cursor-custom"
      >
        RasyaPratama
      </span>
    </>
  );
}

export default TextName;
