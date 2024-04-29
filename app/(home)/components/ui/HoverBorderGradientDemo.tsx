"use client";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="m-2 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-base md:text-md lg:text-lg xl:text-xl text-center"
      >
        <span>connect with me</span>
      </HoverBorderGradient>
    </div>
  );
}