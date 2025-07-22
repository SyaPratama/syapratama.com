import { PropsWithChildren, ReactNode } from "react";

interface CardTestimonialProps {
  children: PropsWithChildren<ReactNode>;
  direction: "left" | "right";
}

function CardTestimonial({ children,direction }: CardTestimonialProps) {
  return (
    <div
      className="image bg-slate-400/20 p-6 border border-slate-400/30 w-70 rounded-xl h-36"
      data-direction={direction}
    >
        { children }
    </div>
  );
}

export default CardTestimonial;
