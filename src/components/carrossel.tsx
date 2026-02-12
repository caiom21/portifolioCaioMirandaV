import { useState, useEffect, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarrosselProps } from "./tipos";


function Carrossel({
  theme = "dark",
  currentSlide,
  setCurrentSlide,
  carouselData,
}: CarrosselProps) {
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + carouselData.length) % carouselData.length,
    );
  };

  const shadowColor =
    theme === "dark" ? "shadow-[#DC0428]/70" : "shadow-[#18DE02]/70";

  return (
    <section>
      <div
        className={`relative rounded-2xl overflow-hidden shadow-2xl group ${shadowColor}`}
      >
        <div className="relative h-96">
          <img
            src={carouselData[currentSlide].image}
            alt="Slide"
            className="w-full h-full object-cover transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default memo(Carrossel);
