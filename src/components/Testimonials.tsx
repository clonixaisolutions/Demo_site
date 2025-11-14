// src/components/Testimonials.tsx
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, X as CloseIcon } from "lucide-react";

/* ---------------- TEXT TESTIMONIALS (no locations) ---------------- */
const textTestimonials = [
  {
    name: "Andy Fung",
    text: "Wes and his team provided excellent, professional service, clearly explaining the insurance process. Highly recommend them for handling complex claims.",
    rating: 5,
  },
  {
    name: "J D",
    text: "Wes fought my insurance for roof replacement after multiple denials. Hiring him was my best decision; I highly recommend him before dealing with insurance.",
    rating: 5,
  },
  {
    name: "Jeremy Liu",
    text: "Wes was professional and responsive, guiding me through the roof damage insurance claim process. He answered all my questions — highly recommended!",
    rating: 5,
  },
];

/* ---------------- VIDEO TESTIMONIALS (REAL VIDEO LINKS) ---------------- */
const videoTestimonials = [
  {
    name: "",
    videoId: "C6XxjY9Nm1M",
    thumbnail: "https://img.youtube.com/vi/C6XxjY9Nm1M/maxresdefault.jpg",
  },
  {
    name: "",
    videoId: "84FN9pwTsF8",
    thumbnail: "https://img.youtube.com/vi/84FN9pwTsF8/maxresdefault.jpg",
  },
  {
    name: "",
    videoId: "tjyJo5Jd2j0",
    thumbnail: "https://img.youtube.com/vi/tjyJo5Jd2j0/maxresdefault.jpg",
  },
  {
    name: "",
    videoId: "nZN0yFBLQ9s",
    thumbnail: "https://img.youtube.com/vi/nZN0yFBLQ9s/maxresdefault.jpg",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const AUTO_SPEED = 22;

  /* ---------------- AUTO SCROLL + LOOP ---------------- */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number | null = null;
    let lastTime: number | null = null;

    const loop = (time: number) => {
      if (!lastTime) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (!isHovering && !isDragging && !modalVideo) {
        track.scrollLeft += AUTO_SPEED * dt;

        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => rafId && cancelAnimationFrame(rafId);
  }, [isHovering, isDragging, modalVideo]);

  /* ---------------- DRAGGING ---------------- */
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const pointerDown = (e: PointerEvent) => {
      setIsDragging(true);
      dragState.current.startX = e.clientX;
      dragState.current.scrollLeft = track.scrollLeft;
      (e.target as Element).setPointerCapture?.((e as any).pointerId);
    };

    const pointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragState.current.startX;
      track.scrollLeft = dragState.current.scrollLeft - dx;
    };

    const pointerUp = (e: PointerEvent) => {
      setIsDragging(false);
      try {
        (e.target as Element).releasePointerCapture?.((e as any).pointerId);
      } catch {}
    };

    container.addEventListener("pointerdown", pointerDown);
    window.addEventListener("pointermove", pointerMove);
    window.addEventListener("pointerup", pointerUp);

    return () => {
      container.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerup", pointerUp);
    };
  }, [isDragging]);

  /* Reset scroll when modal closes */
  useEffect(() => {
    if (!modalVideo && trackRef.current) {
      setTimeout(() => {
        if (trackRef.current) trackRef.current.scrollLeft = 0;
      }, 120);
    }
  }, [modalVideo]);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real stories from real clients who trusted us with their insurance claims.
          </p>
        </div>

        {/* TEXT TESTIMONIALS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {textTestimonials.map((t, idx) => (
            <Card key={idx} className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
                {/* location removed on purpose */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* TIPS HEADING */}
        <div className="text-center mb-6 mt-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Tips for Maximizing Your Claims
          </h3>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Learn how to strengthen your claim, avoid delays, and secure the highest possible settlement.
          </p>
        </div>

        {/* VIDEO CAROUSEL */}
        <div
          ref={containerRef}
          className="relative overflow-hidden select-none"
          onPointerEnter={() => setIsHovering(true)}
          onPointerLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-6 py-4"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`div::-webkit-scrollbar{display:none}`}</style>

            {[0, 1].map(loop =>
              videoTestimonials.map((v, i) => (
                <div
                  key={`${loop}-${i}`}
                  className="relative rounded-xl overflow-hidden flex-shrink-0 cursor-pointer group"
                  style={{ width: 260, height: 420 }}
                  onClick={() => setModalVideo(v.videoId)}
                >
                  <div
                    className="w-full h-full bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${v.thumbnail})` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full shadow-xl flex items-center justify-center transition-transform group-hover:scale-95">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 text-white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-black rounded-xl w-[90%] max-w-3xl p-4">
            <button
              className="absolute top-3 right-3 text-white"
              onClick={() => setModalVideo(null)}
            >
              <CloseIcon size={28} />
            </button>

            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1&rel=0`}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
