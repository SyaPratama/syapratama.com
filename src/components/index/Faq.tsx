"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FaqProps {
  question: string;
  answer: string;
}

function Faq({ question, answer }: FaqProps) {
  const [isExpand,setIsExpand] = useState(false);
  const RefDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (RefDiv.current !== null) {
      gsap.to(RefDiv.current.children[1], {
        height: isExpand ? "auto" : 0,
        marginTop: isExpand ? "1rem" : 0,
        duration: 0.3
      });

      gsap.to(RefDiv.current.children[0].children[1], {
        rotate: isExpand ? 180 : 0,
        duration: 0.3
      });
    }
  }, [isExpand]);

  return (
    <div
      ref={RefDiv}
      className="w-full text-lg md:text-2xl font-normal inline-flex flex-col justify-between overflow-clip"
    >
      <dt className="inline-flex cursor-custom items-center justify-between w-full text-left">
        <button className=" cursor-custom" onClick={() => setIsExpand(!isExpand)}>
          <h3>{question}</h3>
        </button>
        <IoIosArrowDown className="arrow-icon" />
      </dt>
      <dd className="text-sm md:text-xl">{answer}</dd>
    </div>
  );
}

export default Faq;
