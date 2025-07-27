"use client";

import HorizontalLoop from "@/lib/horizontalLoop";
import gsap from "gsap";
import { useEffect } from "react";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

function Carousel() {
  useEffect(() => {
    const images = Array.from(document.querySelectorAll(".image"));

    const leftLoop = document.querySelectorAll('[data-direction="left"]');
    const rightLoop = document.querySelectorAll('[data-direction="right"]');

    const leftAnimation = HorizontalLoop(leftLoop, {
      speed: 1,
      repeat: -1,
      gap: 25,
      paddingRight: 25,
      paddingLeft: 25,
      reversed: false,
    });

    const rightAnimation = HorizontalLoop(rightLoop, {
      speed: 1,
      repeat: -1,
      gap: 25,
      paddingRight: 25,
      paddingLeft: 25,
      reversed: true,
    });

    gsap.to(leftAnimation, {
      duration: 0.3,
      overwrite: true,
      ease: "power2.inOut",
    });
    gsap.to(rightAnimation, {
      duration: 0.3,
      overwrite: true,
      ease: "power2.inOut",
    });

    images.forEach((image: Element) => {
      const direction = image.getAttribute("data-direction");
      if (direction === "left") {
        image.addEventListener("mouseenter", () => {
          gsap.to(leftAnimation, { timeScale: 0, overwrite: true });
        });
        image.addEventListener("mouseleave", () => {
          gsap.to(leftAnimation, { timeScale: 1, overwrite: true });
        });
      } else {
        image.addEventListener("mouseenter", () => {
          gsap.to(rightAnimation, { timeScale: 0, overwrite: true });
        });
        image.addEventListener("mouseleave", () => {
          gsap.to(rightAnimation, { timeScale: -1, overwrite: true });
        });
      }
    });
  }, []);

  return (
    <section className="w-full background-grid background-grid-fade-in overflow-x-hidden pt-44 pb-48 carousel-section bg-slate-50 dark:bg-slate-950">
      <div className="relative flex w-full flex-col gap-y-6 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <LeftCard />
        <RightCard/>
        <div className="pointer-events-none absolute w-1/3 left-0 inset-y-0 bg-gradient-to-r from-white dark:from-slate-950"></div>
        <div className="pointer-events-none absolute w-1/3-0 inset-y-0 bg-gradient-to-l from-white dark:from-slate-950"></div>
      </div>
    </section>
  );
}

export default Carousel;
