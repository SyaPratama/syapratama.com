"use client";

import { cn } from "@/lib/utils";

interface ServiceCardProps {
  children?: React.ReactNode;
  className?: string;
}

function ServiceCard({ children, className }: ServiceCardProps) {
  return (
    <div
      className={cn([
        "w-full flex flex-col h-58 rounded-2xl p-6 bg-slate-900/50 backdrop-blur-xl border-3 border-slate-600/25  outline-3 outline-slate-800/50",
        className,
      ])}
    >
      {children}
    </div>
  );
}

export default ServiceCard;
