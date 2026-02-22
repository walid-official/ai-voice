import React from "react";
import leftSvg from "@/assets/left.svg";
import rightSvg from "@/assets/right.svg";

export default function EffortlessGrowth() {
  return (
    <section className="w-full relative pt-16 px-4">
      <div
        className="
          relative overflow-hidden py-14
          bg-[#0c0616]
          shadow-[inset_0_0_80px_0_rgba(141,35,255,0.12)]

          before:content-['']
          before:absolute before:top-0 before:left-0
          before:w-full before:h-[1px]
          before:bg-gradient-to-r
          before:from-transparent
          before:via-purple-400
          before:to-transparent

          after:content-['']
          after:absolute after:bottom-0 after:left-0
          after:w-full after:h-[1px]
          after:bg-gradient-to-r
          after:from-transparent
          after:via-purple-400
          after:to-transparent
        "
      >
        {/* Glow Background */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#8C21FF]/20 blur-[100px]" />

        <div className="flex flex-col items-center gap-8 relative z-10 py-12">
          <div className="flex items-center gap-3">
            <img src={leftSvg} alt="" className="h-[30px] w-[80px] md:w-[100px] lg:w-[135px]" />
            <p className="text-white uppercase tracking-[2px] text-[12px] md:text-[16px]">
              Effortless Appointment Growth
            </p>
            <img src={rightSvg} alt="" className="h-[30px] w-[80px] md:w-[100px] lg:w-[135px]" />
          </div>

          <div className="text-center">
            <h3
  className="
    max-w-5xl mx-auto
    font-['Raleway',sans-serif] font-semibold
    text-white text-[20px] lg:text-[33.72px] leading-[40.9px]
  "
>
  Your calendar fills itself automatically. Every call is answered
  instantly, inquiries handled naturally, and appointments
  confirmed in real time—no missed leads, no voicemail losses,{" "}
  <span className="text-[#BBBBBB]">
    no staff overload. Just consistent bookings 24/7.
  </span>
</h3>
          </div>

          <button
            className="
              mt-2 px-6 py-4 rounded-full
              bg-white text-[#0a0312]
              text-sm font-semibold uppercase
              cursor-pointer
            "
          >
            Book More Appointments
          </button>
        </div>
      </div>
    </section>
  );
}