import { useRef } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCarouselProps = {
  children: ReactNode;
  previousLabel: string;
  nextLabel: string;
};

const ProjectCarousel = ({ children, previousLabel, nextLabel }: ProjectCarouselProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "previous" | "next") => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const visibleCards = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    const gap = 20;
    const cardWidth = (viewport.clientWidth - gap * (visibleCards - 1)) / visibleCards;

    viewport.scrollBy({
      left: (cardWidth + gap) * (direction === "next" ? 1 : -1),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div ref={viewportRef} className="project-carousel-viewport">
        <div className="project-carousel-track">{children}</div>
      </div>
      <div className="mt-5 flex items-center justify-end gap-2">
        <button type="button" onClick={() => scroll("previous")} className="icon-button" aria-label={previousLabel}><ChevronLeft size={17} /></button>
        <button type="button" onClick={() => scroll("next")} className="icon-button" aria-label={nextLabel}><ChevronRight size={17} /></button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
