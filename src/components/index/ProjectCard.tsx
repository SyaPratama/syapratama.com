"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

interface ProjectType {
  className?: string;
  children?: PropsWithChildren<ReactNode>;
}

function ProjectCard({ className, children }: ProjectType) {
  return (
    <div className="relative">
      <div
        className={cn([
          "size-full cursor-custom hover:scale-105 transition ease-in-out duration-500 object-contain slide rounded-2xl flex items-end justify-start",
          className,
        ])}
      >
        {children}
      </div>
    </div>
  );
}

export default ProjectCard;
