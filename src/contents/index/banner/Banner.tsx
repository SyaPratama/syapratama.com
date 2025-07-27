import { BackgroundGradientAnimation } from "@/components/index/BacgkroundGradient";

export default function Banner() {
  return (
    <BackgroundGradientAnimation
      className="w-full h-100"
      containerClassName="cursor-custom rounded-[3.5rem]"
    >
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text pb-4 text-5xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Agile, Inovative, Professional, Creative
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
