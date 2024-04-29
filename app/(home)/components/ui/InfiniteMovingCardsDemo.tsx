"use client";

import { InfiniteMovingCards } from "@/app/(home)/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[12rem] mt-14 rounded-md flex flex-col antialiased bg-slate-950 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "New Coral",
    asal: "Karanganyar",
    name: "Graphic Designer",
    title: "Juli 2023 - September 2023",
    foto: "https://drive.google.com/file/d/1vSHs8jKf7BgoYRL7Kv_eo3GWUtQvfygZ/view?usp=sharing"
  },
  {
    quote: "PT Berbinar Insightful",
    asal: "Surabaya",
    name: "UI/UX Designer",
    title: "Oktober 2023 - Desember 2023",
    foto: "https://drive.google.com/file/d/138eGu84A94TR1XecWsBsUEmH2F_J_IJe/view?usp=sharing"
  },
  {
    quote: "PT Berbinar Insightful",
    asal: "Surabaya",
    name: "Web Developer Manager",
    title: "Desember 2023 - April 2024",
    foto: "https://drive.google.com/file/d/1DrkvsPkRnwUsJRMvWx82jxif8iog-i6r/view?usp=sharing"
  },
  {
    quote: "Seven Media Technology",
    asal: "Semarang",
    name: "Wordpress Designer",
    title: "April 2024 - Sekarang",
    foto: "https://drive.google.com/file/d/138eGu84A94TR1XecWsBsUEmH2F_J_IJe/view?usp=sharing"
  }
];

