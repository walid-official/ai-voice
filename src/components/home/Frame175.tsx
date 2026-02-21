import React from "react";
import svgPaths from "@/imports/svg-qar94wno65";
import imgEllipse1 from "@/assets/63298ab6f6ffbf8b31384c0bedddf190a35e7fac.png";
import imgEllipse2 from "@/assets/484c632f1919fed56f410e4a64cd5889954b04b0.png";
import imgEllipse3 from "@/assets/bd025e30d4127960c4c894af8910c29c1b31426d.png";
import imgEllipse4 from "@/assets/4eeccfd51cdff1c2eee566f49810dd46d400bbf7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  name: string;
  title: string;
  text: string;
  avatar: string;
  rating?: number;
};

function QuoteIcon() {
  return (
    <span className="inline-block size-8 opacity-20 align-top" aria-hidden="true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <path clipRule="evenodd" d={svgPaths.p3567580} fill="black" fillRule="evenodd" />
      </svg>
    </span>
  );
}
function QuoteIconStart() {
  return (
    <span className="inline-block size-8 opacity-20 align-top rotate-180" aria-hidden="true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <path clipRule="evenodd" d={svgPaths.p3567580} fill="black" fillRule="evenodd" />
      </svg>
    </span>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
    </svg>
  );
}

function StarRating({ rating = 0 }: { rating?: number }) {
  const stars = Math.max(0, Math.min(5, rating));
  return (
    <div className="flex items-center gap-1" aria-label={`${stars} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < stars} />
      ))}
    </div>
  );
}

function AvatarRow({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) {
  return (
    <div className="flex items-center px-2 gap-4">
      <img
        alt={`${name} avatar`}
        className="size-[42px] rounded-full"
        src={src}
        loading="lazy"
        width={42}
        height={42}
      />
      <div className="flex flex-col">
        <p className="font-['Cottorway_Pro:SemiBold',sans-serif] text-[15px] text-black">{name}</p>
        <p className="font-['Marble:Regular',sans-serif] text-[#505050] text-[12px]">{title}</p>
      </div>
    </div>
  );
}

function TestimonialCard({
  avatar,
  name,
  title,
  text,
  rating,
}: {
  avatar: string;
  name: string;
  title: string;
  text: string;
  rating?: number;
}) {
  return (
    <article
      className="rounded-2xl border border-[rgba(95,111,255,0.75)] bg-white
      shadow-[0_0_15px_rgba(42,60,222,0.47)] h-full transition-transform duration-300
      hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(42,60,222,0.35)]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.9) 0%, rgba(211,216,255,0.4) 52.5%, rgba(95,111,255,0.35) 100%)",
      }}
    >
      <div className="p-6 flex flex-col gap-6 h-full justify-between relative">
        <figure>
          <blockquote className="font-['Grift:Medium',sans-serif] relative text-[#525252] py-4 px-2 text-[16px] leading-[24px]">
            <div className="absolute top-0 -left-4">
              <QuoteIconStart />
            </div>
            <p className="mx-2">{text}</p>
            <div className="absolute bottom-3 right-0">
              <QuoteIcon />
            </div>
          </blockquote>
          <figcaption className="flex pt-6 items-center justify-between">
            <AvatarRow src={avatar} name={name} title={title} />
            {/* {typeof rating === "number" && rating > 0 ? <StarRating rating={rating} /> : null} */}
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

const testimonials: Testimonial[] = [
  {
    avatar: imgEllipse3,
    name: "Mrs. Van Hartmann",
    title: "Legacy Usability Manager",
    text:
      "Working with this team transformed our digital capabilities. Their AI expertise helped us achieve automation levels we didn't think possible.",
    rating: 5,
  },
  {
    avatar: imgEllipse1,
    name: "Mrs. Alex Doe",
    title: "Legacy Usability Manager",
    text:
      "The team delivered on time, on budget, and exceeded our expectations. Their agile approach kept us aligned throughout the project.",
    rating: 4,
  },
  {
    avatar: imgEllipse2,
    name: "Mr John Kallu",
    title: "Legacy Usability Manager",
    text:
      "Working with this team transformed our digital capabilities. Their AI expertise helped us achieve automation levels we didn't think possible.",
    rating: 5,
  },
  {
    avatar: imgEllipse2,
    name: "Mr John Kallu",
    title: "Legacy Usability Manager",
    text:
      "Working with this team transformed our digital capabilities. Their AI expertise helped us achieve automation levels we didn't think possible.",
    rating: 5,
  },
  {
    avatar: imgEllipse1,
    name: "Mrs. Alex Doe",
    title: "Legacy Usability Manager",
    text:
      "The team delivered on time, on budget, and exceeded our expectations. Their agile approach kept us aligned throughout the project.",
    rating: 4,
  },
];

export function Frame175() {
  return (
    <section
      className="relative w-full min-h-[60vh] lg:h-[70vh] flex items-center justify-center"
      aria-label="Testimonials"
    >
      {/* Background Container */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div
          className="w-[800px] h-[420px] rounded-2xl border-6 border-white/10 shadow-[0_0_30px_rgba(64,65,72,0.25)] overflow-hidden bg-gradient-to-l from-[#0a0312] from-[21.698%] to-[101.89%] to-[rgba(0,0,0,0)] relative"
        >
          {/* Pagination positioned absolutely on background container */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
            <div className="custom-pagination-container swiper-pagination"></div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          autoplay={{ 
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination-container",
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={`${t.name}-${index}`} className="!h-auto">
              <TestimonialCard
                avatar={t.avatar}
                name={t.name}
                title={t.title}
                text={t.text}
                rating={t.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Styles for purple pagination */}
      <style>{`
        .custom-pagination-container {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 8px !important;
          position: relative !important;
          bottom: 20px !important;
        }
        
        .custom-pagination-container .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          background: #e0e0e0 !important;
          opacity: 1 !important;
          margin: 0 !important;
          transition: all 0.3s ease !important;
        }
        
        .custom-pagination-container .swiper-pagination-bullet-active {
          background: #8b5cf6 !important;
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5) !important;
        }
        
        .custom-pagination-container .swiper-pagination-bullet:hover {
          background: #a78bfa !important;
        }
      `}</style>
    </section>
  );
}