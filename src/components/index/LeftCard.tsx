"use client";


import CardTestimonial from "@/components/index/CardTestimonial";
import { testimonials } from "@/data/dummy/testimonial";

export default function LeftCard() {
  return (
    <div
      className={`w-fit flex flex-row gap-x-[25px] justify-center items-center`}
    >
      {testimonials.slice(0, (testimonials.length - 1) / 2).map((v, index) => {
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
            <div className="text-xs md:text-sm font-regular text-slate-200">
              {v.testimonial}
            </div>
          </CardTestimonial>
        );
      })}
    </div>
  );
}
