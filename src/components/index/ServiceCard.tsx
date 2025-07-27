"use client";

interface ServiceCardProps {
  children?: React.ReactNode;
}

function ServiceCard({ children }: ServiceCardProps) {
  return (
    <div className="w-full flex flex-col h-auto rounded-2xl p-6 bg-slate-900/50 backdrop-blur-xl border-3 border-slate-600/25  outline-3 outline-slate-800/50">
      { children }
    </div>
  );
}

export default ServiceCard;
