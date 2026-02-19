import React from "react";
import svgPaths from "@/imports/svg-qar94wno65";
import imgFrame2147224780 from "@/assets/8d7301a878915636181f3e0c5abd22deb05d82f7.png";
import imgFrame2147224781 from "@/assets/84bd5b09676f0ef13bd88c6c447bd2045d61969c.png";

function ArrowIcon() {
  return (
    <svg className="block size-[20.211px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2105 20.2105" aria-hidden="true">
      <g>
        <path d={svgPaths.p271ab580} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.26316" />
        <path d={svgPaths.p95f7a00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.26316" />
      </g>
    </svg>
  );
}

function ArrowButton() {
  return (
    <div className="bg-[rgba(255,255,255,0.14)] overflow-clip rounded-[20.211px] size-[32px] flex items-center justify-center">
      <ArrowIcon />
    </div>
  );
}

type CardProps = {
  image: string;
  label: string;
  className?: string;
};

function Card({ image, label, className }: CardProps) {
  return (
    <div className={`grid rounded-[13px] overflow-clip ${className ?? ""}`}>
      <img alt="" src={image} className="col-start-1 row-start-1 w-full h-full object-cover" />
      <div className="col-start-1 row-start-1 w-full h-full bg-[linear-gradient(180.106deg,rgba(18,18,18,0)_7.0887%,rgb(18,18,18)_99.855%)]" />
      <div className="col-start-1 row-start-1 w-full p-4 md:p-5 self-end flex items-center justify-between">
        <p className="bg-clip-text bg-gradient-to-b from-white from-[23.469%] to-[#bababa] to-[77.551%] font-['Grift:Medium',sans-serif] leading-[normal] not-italic text-[20px] uppercase" style={{ WebkitTextFillColor: "transparent" }}>
          {label}
        </p>
        <ArrowButton />
      </div>
    </div>
  );
}

export function Frame121() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[692px] grid grid-cols-1 md:grid-cols-[257px_407px] items-end justify-center gap-4 md:gap-6">
        <Card image={imgFrame2147224780} label="Medical spa" className="h-[220px] md:h-[254px] md:w-[257px]" />
        <Card image={imgFrame2147224781} label="Barbershop" className="h-[220px] md:h-[255px] md:w-[407px]" />
      </div>
    </section>
  );
}
