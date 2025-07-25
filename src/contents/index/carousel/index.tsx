"use client";

import CardTestimonial from "@/components/index/CardTestimonial";
import { testimonials } from "@/data/dummy/testimonial";
import HorizontalLoop from "@/lib/horizontalLoop";
import gsap from "gsap";
import { useEffect } from "react";

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
        <div
          className={`w-fit flex flex-row gap-x-[25px] justify-center items-center`}
        >
          {testimonials
            .slice(0, (testimonials.length - 1) / 2)
            .map((v, index) => {
              const r = Math.floor(Math.random() * 255 + 1);
              const g = Math.floor(Math.random() * 255 + 1);
              const b = Math.floor(Math.random() * 255 + 1);
              return (
                <CardTestimonial key={index} direction="left">
                  <div className="inline-flex gap-2 items-center">
                    <div
                      style={{ background: `rgb(${r}, ${g}, ${b})` }}
                      className="w-9 h-9 rounded-full"
                      suppressHydrationWarning
                    ></div>
                    <div className="inline-flex flex-col">
                      <span className="text-md font-semibold"> {v.name} </span>
                      <span className="text-xs font-semibold text-gray-400">
                        @{v.name}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-regular text-slate-200">
                    {v.testimonial}
                  </div>
                </CardTestimonial>
              );
            })}
        </div>
        <div className="w-fit flex flex-row gap-x-[25px] justify-center items-center">
          {testimonials
            .slice((testimonials.length - 1) / 2, testimonials.length - 1)
            .map((v, index) => {
              const r = Math.floor(Math.random() * 255 + 1);
              const g = Math.floor(Math.random() * 255 + 1);
              const b = Math.floor(Math.random() * 255 + 1);
              return (
                <CardTestimonial key={index} direction="right">
                  <div className="inline-flex gap-2 items-center">
                    <div
                      style={{ background: `rgb(${r}, ${g}, ${b})` }}
                      className="w-9 h-9 rounded-full"
                      suppressHydrationWarning
                    ></div>
                    <div className="inline-flex flex-col">
                      <span className="text-md font-semibold"> {v.name} </span>
                      <span className="text-xs font-semibold text-gray-400">
                        @{v.name}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-regular text-slate-200">
                    {v.testimonial}
                  </div>
                </CardTestimonial>
              );
            })}
        </div>

        <div className="pointer-events-none absolute w-1/3 left-0 inset-y-0 bg-gradient-to-r from-white dark:from-slate-950"></div>
        <div className="pointer-events-none absolute w-1/3-0 inset-y-0 bg-gradient-to-l from-white dark:from-slate-950"></div>
      </div>
    </section>
  );
}

export default Carousel;
