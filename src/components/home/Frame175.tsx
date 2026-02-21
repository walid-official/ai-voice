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
import "../../styles/pagination.css"
function QuoteIcon() {
  return (
    <span className="inline-block size-8 opacity-20 align-top">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p3567580}
          fill="black"
          fillRule="evenodd"
        />
      </svg>
    </span>
  );
}
function QuoteIconStart() {
  return (
    <span className="inline-block size-8 opacity-20 align-top rotate-180">
  <svg
    className="block size-full"
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 36 36"
  >
    <path
      clipRule="evenodd"
      d={svgPaths.p3567580}
      fill="black"
      fillRule="evenodd"
    />
  </svg>
</span>
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
      <img alt="" className="size-[42px] rounded-full" src={src} />
      <div className="flex flex-col">
        <p className="font-['Cottorway_Pro:SemiBold',sans-serif] text-[15px] text-black">
          {name}
        </p> 
        <p className="font-['Marble:Regular',sans-serif] text-[#505050] text-[12px]">
          {title}
        </p>
      </div>
    </div>
  );
}

function TestimonialCard({
  avatar,
  name,
  title,
  children,
}: {
  avatar: string;
  name: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl border border-[rgba(95,111,255,0.75)]
      shadow-[0px_0px_15px_rgba(42,60,222,0.47)] bg-white h-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.4) 0%, rgba(211,216,255,0.4) 52.5%, rgba(95,111,255,0.4) 100%)",
      }}
    >
      <div className="p-6 flex flex-col gap-6 h-full justify-between">
        
        {/* Text with quotation at start & end */}
        <div className="font-['Grift:Medium',sans-serif] relative text-[#525252] py-4 px-2 text-[16px] leading-[24px]">
          <div className="absolute top-0 -left-4">
            <QuoteIconStart />
          </div>
          <p className="mx-2 ">{children}</p>
          <div className="absolute bottom-3 left-18">
            <QuoteIcon />
          </div>
        </div>

        <AvatarRow src={avatar} name={name} title={title} />
      </div>
    </div>
  );
}

export function Frame175() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
  
{/* Background (centered image) */}
<div
  className="w-[800px] h-[400px] absolute
  top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2
  rounded-2xl
  border border-white/10
  shadow-[0_0_30px_rgba(64,65,72,0.25)]
  overflow-hidden
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF),
linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(211, 216, 255, 0.4) 52.5%, rgba(95, 111, 255, 0.4) 100%);

  z-0"
>
  <img
    src={imgEllipse4}
    alt="Background"
    className="object-cover"
  />

  {/* Optional dark overlay for better contrast */}
  <div className="absolute inset-0 bg-black/30" />
</div>

  {/* Cards container */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
   <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={24}
  loop
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-14 testimonial-swiper"
>
      <SwiperSlide className="!h-auto">
        <TestimonialCard
          avatar={imgEllipse3}
          name="Mrs. Van Hartmann"
          title="Legacy Usability Manager"
        >
          Working with this team transformed our digital capabilities.
          Their AI expertise helped us achieve automation levels we
          didn't think possible.
        </TestimonialCard>
      </SwiperSlide>

      <SwiperSlide className="!h-auto">
        <TestimonialCard
          avatar={imgEllipse1}
          name="Mrs. Alex Doe"
          title="Legacy Usability Manager"
        >
          The team delivered on time, on budget, and exceeded our
          expectations. Their agile approach kept us aligned
          throughout the project.
        </TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className="!h-auto">
        <TestimonialCard
          avatar={imgEllipse1}
          name="Mrs. Alex Doe"
          title="Legacy Usability Manager"
        >
          The team delivered on time, on budget, and exceeded our
          expectations. Their agile approach kept us aligned
          throughout the project.
        </TestimonialCard>
      </SwiperSlide>

      <SwiperSlide className="!h-auto">
        <TestimonialCard
          avatar={imgEllipse2}
          name="Mr John Kallu"
          title="Legacy Usability Manager"
        >
          Working with this team transformed our digital capabilities.
          Their AI expertise helped us achieve automation levels we
          didn't think possible.
        </TestimonialCard>
      </SwiperSlide>
    </Swiper>
  </div>

</section>
  );
}