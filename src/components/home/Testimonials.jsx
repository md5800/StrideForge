import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Rating from "../common/Rating";
import ImageWithFallback from "../common/ImageWithFallback";

const TESTIMONIALS = [
  {
    name: "Marcus Reid",
    role: "Marathon Runner, Sub-2:30",
    quote:
      "The Momentum Foam Runner shaved 90 seconds off my marathon PR. The energy return is unreal.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&q=80&auto=format&fit=crop",
  },
  {
    name: "Dario Ortiz",
    role: "Ultra-Trail Athlete",
    quote:
      "Trailblaze GTX handled a 50K ultra in the rain without a single slip. Best grip I've tested.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&q=80&auto=format&fit=crop",
  },
  {
    name: "Jordan Blake",
    role: "Strength & Conditioning Coach",
    quote:
      "Cloudstrike Trainer gives me the stability I need for heavy lifts and the flexibility for HIIT days.",
    rating: 4.5,
    avatar: "https://images.unsplash.com/photo-1747995371110-7dfa822073a2?w=160&q=80&auto=format&fit=crop",
  },
  {
    name: "Priya Nandan",
    role: "Weekend Baller",
    quote:
      "Skyline Court Mid locks down every cut. I stopped rolling my ankle on defense the moment I switched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1683848644087-c3cb69b77d4f?w=160&q=80&auto=format&fit=crop",
  },
  {
    name: "Alex Munro",
    role: "Street Style Enthusiast",
    quote:
      "Metro Street Sneaker gets more compliments than any pair I own — and it's still my most comfortable walk to work.",
    rating: 4.5,
    avatar: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=160&q=80&auto=format&fit=crop",
  },
  {
    name: "Sam Okafor",
    role: "Youth Coach & Dad",
    quote:
      "My son's Junior Bolt Runners survived an entire soccer season. Durable, and he actually asks to wear them.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?w=160&q=80&auto=format&fit=crop",
  },
];

const PAGE_SIZE = 3;
const PAGES = Array.from({ length: Math.ceil(TESTIMONIALS.length / PAGE_SIZE) }, (_, i) =>
  TESTIMONIALS.slice(i * PAGE_SIZE, i * PAGE_SIZE + PAGE_SIZE)
);

function Testimonials() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (PAGES.length <= 1) return;
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % PAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-5 bg-light-subtle">
      <div className="container">
        <div className="text-center mb-4">
          <span className="sf-eyebrow sf-eyebrow--dark">Community</span>
          <h2 className="fw-bold mt-2">What Athletes Are Saying</h2>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="row g-4"
            >
              {PAGES[page].map((t) => (
                <div className="col-md-4" key={t.name}>
                  <div className="sf-testimonial-card h-100">
                    <Rating value={t.rating} size={14} />
                    <p className="mt-3 mb-4 text-secondary">&ldquo;{t.quote}&rdquo;</p>
                    <div className="d-flex align-items-center gap-3">
                      <ImageWithFallback
                        src={t.avatar}
                        alt={t.name}
                        className="sf-testimonial-avatar"
                      />
                      <div>
                        <div className="fw-semibold">{t.name}</div>
                        <div className="text-muted small">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {PAGES.length > 1 && (
          <div className="d-flex justify-content-center gap-2 mt-4">
            {PAGES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`sf-slider-dot ${idx === page ? "sf-slider-dot--active" : ""}`}
                onClick={() => setPage(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
