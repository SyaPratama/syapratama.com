function ButtonHire() {
  return (
    <button className="relative w-38 inline-flex h-12 overflow-hidden rounded-[.8rem] p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-slate-700">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-custom hover:text-slate-400 transition ease-in-out duration-300 items-center justify-center rounded-xl  bg-slate-950/75 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Hire Me
      </span>
    </button>
  );
}

export default ButtonHire;
