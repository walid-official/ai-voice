import React from "react";
import svgPaths from "@/imports/svg-qar94wno65";
import imgFrame2147224780 from "@/assets/8d7301a878915636181f3e0c5abd22deb05d82f7.png";
import imgFrame2147224781 from "@/assets/84bd5b09676f0ef13bd88c6c447bd2045d61969c.png";

function ArrowUpRight1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20.211px] top-1/2" data-name="arrow-up-right-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2105 20.2105">
        <g id="arrow-up-right-03">
          <path d={svgPaths.p271ab580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.26316" />
          <path d={svgPaths.p95f7a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.26316" />
        </g>
      </svg>
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-[rgba(255,255,255,0.14)] overflow-clip relative rounded-[20.211px] shrink-0 size-[32px]">
      <ArrowUpRight1 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 top-[208px] w-[200px]">
      <p className="bg-clip-text bg-gradient-to-b font-['Grift:Medium',sans-serif] from-[23.469%] from-white leading-[normal] not-italic relative shrink-0 text-[20px] to-[#bababa] to-[77.551%] uppercase" style={{ WebkitTextFillColor: "transparent" }}>
        Medical spa
      </p>
      <Frame125 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="-translate-x-1/2 absolute h-[271px] left-[calc(50%+0.5px)] overflow-clip rounded-[13px] top-[-9px] w-[426px]" style={{ backgroundImage: "linear-gradient(180.106deg, rgba(18, 18, 18, 0) 7.0887%, rgb(18, 18, 18) 99.855%)" }}>
      <Frame124 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="h-[254px] overflow-clip relative rounded-[13px] shrink-0 w-[257px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[13px]">
        <div className="absolute bg-white inset-0 rounded-[13px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[13px] size-full" src={imgFrame2147224780} />
      </div>
      <Frame123 />
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20.211px] top-1/2" data-name="arrow-up-right-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2105 20.2105">
        <g id="arrow-up-right-03">
          <path d={svgPaths.p271ab580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.26316" />
          <path d={svgPaths.p95f7a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.26316" />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="bg-[rgba(255,255,255,0.14)] overflow-clip relative rounded-[20.211px] shrink-0 size-[32px]">
      <ArrowUpRight2 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-[calc(50%-0.5px)] top-[198px] w-[345px]">
      <p className="bg-clip-text bg-gradient-to-b font-['Grift:Medium',sans-serif] from-[23.469%] from-white leading-[normal] not-italic relative shrink-0 text-[20px] to-[#bababa] to-[77.551%] uppercase" style={{ WebkitTextFillColor: "transparent" }}>
        Barbershop
      </p>
      <Frame129 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[271px] left-[calc(50%+0.5px)] overflow-clip rounded-[13px] top-1/2 w-[426px]" style={{ backgroundImage: "linear-gradient(180.106deg, rgba(18, 18, 18, 0) 7.0887%, rgb(18, 18, 18) 99.855%)" }}>
      <Frame128 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="h-[255px] overflow-clip relative rounded-[13px] shrink-0 w-[407px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[13px]">
        <div className="absolute bg-white inset-0 rounded-[13px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[13px] size-full" src={imgFrame2147224781} />
      </div>
      <Frame127 />
    </div>
  );
}

export function Frame121() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[calc(41.67%+28px)] top-[2681px] w-[692px]">
      <Frame122 />
      <Frame126 />
    </div>
  );
}
