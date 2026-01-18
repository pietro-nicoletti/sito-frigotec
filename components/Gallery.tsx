import React, { useEffect, useRef, useState } from 'react';

const images = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
  "/assets/gallery/9.jpg",
  "/assets/gallery/10.jpg",
  "/assets/gallery/11.jpg",
  "/assets/gallery/12.jpg"
];

export const Gallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement>(null);
  const [itemStep, setItemStep] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateStep = () => {
      if (!trackRef.current || !firstItemRef.current) {
        return;
      }
      const styles = window.getComputedStyle(trackRef.current);
      const gapValue = styles.getPropertyValue('gap') || styles.getPropertyValue('column-gap');
      const gap = Number.parseFloat(gapValue) || 0;
      setItemWidth(firstItemRef.current.offsetWidth);
      setItemStep(firstItemRef.current.offsetWidth + gap);
    };

    updateStep();
    const ro = new ResizeObserver(updateStep);
    ro.observe(trackRef.current);
    ro.observe(firstItemRef.current);
    window.addEventListener('resize', updateStep);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateStep);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !itemStep || !itemWidth) {
      return;
    }
    let rafId = 0;
    const handleScroll = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        const centerOffset = track.clientWidth / 2 - itemWidth / 2;
        const index = Math.round((track.scrollLeft + centerOffset) / itemStep);
        const clampedIndex = Math.max(0, Math.min(index, images.length - 1));
        setActiveIndex(clampedIndex);
        rafId = 0;
      });
    };
    track.addEventListener('scroll', handleScroll);
    return () => {
      track.removeEventListener('scroll', handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [itemStep, itemWidth]);

  const goToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track || !itemStep || !itemWidth) {
      return;
    }
    const clampedIndex = Math.max(0, Math.min(index, images.length - 1));
    const centerOffset = track.clientWidth / 2 - itemWidth / 2;
    track.scrollTo({ left: clampedIndex * itemStep - centerOffset, behavior: 'smooth' });
  };

  const handlePrev = () => goToIndex(activeIndex - 1);
  const handleNext = () => goToIndex(activeIndex + 1);
  const closeLightbox = () => setLightboxIndex(null);
  const goToLightboxIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, images.length - 1));
    setLightboxIndex(clampedIndex);
  };
  const handleLightboxKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
    if (event.key === 'ArrowLeft' && lightboxIndex !== null) {
      goToLightboxIndex(lightboxIndex - 1);
    }
    if (event.key === 'ArrowRight' && lightboxIndex !== null) {
      goToLightboxIndex(lightboxIndex + 1);
    }
  };

  const getItemStyle = (index: number) => {
    const distance = Math.abs(index - activeIndex);
    const scale = distance === 0 ? 1 : distance === 1 ? 0.86 : distance === 2 ? 0.76 : 0.68;
    const z = distance === 0 ? 80 : distance === 1 ? 30 : 0;
    return {
      transform: `translateZ(${z}px) scale(${scale})`,
      opacity: 1
    };
  };

  return (
    <section id="galleria" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-frigo-main font-semibold tracking-wider uppercase text-base md:text-lg mb-2">Galleria</h2>
          <h3 className="text-3xl font-bold text-gray-900">Interventi e Macchinari</h3>
        </div>

        <div className="relative" style={{ perspective: '1200px' }}>
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                ref={index === 0 ? firstItemRef : undefined}
                className="group relative overflow-hidden rounded-3xl aspect-square min-w-[70%] sm:min-w-[55%] md:min-w-[40%] lg:min-w-[33.333%] snap-center transition-transform duration-500 transform-gpu cursor-zoom-in"
                style={getItemStyle(index)}
              >
                <img
                  src={src}
                  alt={`Lavoro ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onClick={() => setLightboxIndex(index)}
                />
              </div>
            ))}
          </div>

          <div className="hidden sm:flex items-center justify-between absolute inset-y-0 left-0 right-0 pointer-events-none z-10">
            <button
              type="button"
              onClick={handlePrev}
              className="pointer-events-auto ml-2 h-11 w-11 rounded-full bg-white/90 text-gray-900 shadow-lg transition hover:bg-white"
              aria-label="Galleria precedente"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="pointer-events-auto mr-2 h-11 w-11 rounded-full bg-white/90 text-gray-900 shadow-lg transition hover:bg-white"
              aria-label="Galleria successiva"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? 'bg-frigo-main' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Vai all'immagine ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Immagine ${lightboxIndex + 1} ingrandita`}
          onKeyDown={handleLightboxKey}
          tabIndex={0}
        >
          <button
            type="button"
            className="absolute inset-0 z-0 cursor-zoom-out"
            onClick={closeLightbox}
            aria-hidden="true"
            tabIndex={-1}
          />
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-20 h-10 w-10 rounded-full bg-white/90 text-gray-900 shadow-lg transition hover:bg-white"
            aria-label="Chiudi immagine ingrandita"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={() => goToLightboxIndex(lightboxIndex - 1)}
            className="absolute left-4 md:left-8 z-20 h-11 w-11 rounded-full bg-white/90 text-gray-900 shadow-lg transition hover:bg-white"
            aria-label="Immagine precedente"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goToLightboxIndex(lightboxIndex + 1)}
            className="absolute right-4 md:right-8 z-20 h-11 w-11 rounded-full bg-white/90 text-gray-900 shadow-lg transition hover:bg-white"
            aria-label="Immagine successiva"
          >
            ›
          </button>
          <img
            src={images[lightboxIndex]}
            alt={`Lavoro ${lightboxIndex + 1}`}
            className="relative z-10 max-h-[85vh] w-full max-w-5xl rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};
