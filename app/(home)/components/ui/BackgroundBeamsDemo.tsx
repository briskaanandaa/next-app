"use client";
import { BackgroundBeams } from "@/app/(home)/components/ui/background-beams";
import { HoverBorderGradientDemo } from "@/app/(home)/components/ui/HoverBorderGradientDemo";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-slate-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto mx-10">
      <h1 className="relative z-10 text-4xl md:text-7xl mb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
        HI, BRISKA IS HERE
      </h1>

        <p className="text-base md:text-md lg:text-lg xl:text-xl text-center">a happy web developer who strives to help others grow in web development</p>
        <p className="text-neutral-500 max-w-lg mx-auto mx-2 mb-4 text-sm md:text-base text-center relative z-10">
        </p>

        <div>
        <HoverBorderGradientDemo/>
        </div>

      </div>
      <BackgroundBeams />
    </div>
  );
}
