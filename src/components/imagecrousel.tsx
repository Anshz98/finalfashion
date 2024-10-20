import { useState, useEffect, useRef } from 'react';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slides = [
    'crousel/streetwear.webp',  // Image 1
    'crousel/streetwear2.webp',  // Image 1
    'crousel/streetwear3.webp',  // Image 1
    'crousel/streetwear.webp',  // Image 1
    'crousel/streetwear.webp',  // Image 1
  ];

  const totalSlides = slides.length;
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Add a duplicate of the first slide to the end of the slides array for seamless transition
  const slidesWithDuplicate = [...slides, slides[0]];

  // Slide changing interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds for a quicker transition

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Move to the next slide
  const nextSlide = () => {
    setIsTransitioning(true);
    if (currentSlide === totalSlides) {
      // If we're on the duplicated slide, instantly move back to the first real slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700); // Duration matches the CSS transition
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  // Move to the previous slide
  const prevSlide = () => {
    if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(totalSlides); // Jump to the duplicated slide for a smooth transition
      setTimeout(() => {
        setIsTransitioning(true);
      }, 10); // Re-enable transition
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <div className="relative w-full h-[850px] overflow-hidden">
      <div
        ref={carouselRef}
        className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesWithDuplicate.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'fallback-image.webp'; // Replace with fallback image if any image fails to load
                console.error(`Failed to load image: ${slide}`);
              }}
            />
          </div>
        ))}
      </div>

      {/* Manual Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 text-white bg-black/50 p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 text-white bg-black/50 p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageCarousel;


