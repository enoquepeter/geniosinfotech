import { useEffect, useRef } from "react";
import slide1 from "@/assets/slide 1.jpg";
import slide2 from "@/assets/slide 2.jpg";
import slide3 from "@/assets/slide 3.jpg";
import slide4 from "@/assets/slide 4.jpg";

const slides = [slide1, slide2, slide3, slide4, slide1, slide2, slide3, slide4];

const HeroSlidesBackground = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;
    const scrollSpeed = 0.3;

    const animate = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden h-full opacity-20 dark:opacity-10"
        style={{ scrollBehavior: 'auto' }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full"
            style={{ width: 'auto', aspectRatio: '16/9' }}
          >
            <img
              src={slide}
              alt=""
              className="w-full h-full object-cover opacity-15"
            />
          </div>
        ))}
      </div>
      {/* Backdrop mesh overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 dark:from-primary/50 dark:via-secondary/40 dark:to-accent/50 backdrop-blur-sm"></div> */}
    </div>
  );
};

export default HeroSlidesBackground;
