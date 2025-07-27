import { BackgroundGradientAnimation } from "@/components/index/BacgkroundGradient";
function BannerGradient() {
  return (
    <section className="w-full pt-20 pb-60 background-grid background-grid-fade-out">
      <div className="content-wrapper">
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
      </div>
    </section>
  );
}

export default BannerGradient;
