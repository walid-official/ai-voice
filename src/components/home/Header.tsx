import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "@/imports/svg-qar94wno65";

function Mic2() {
  return (
    <div className="relative shrink-0 size-[31px]" data-name="mic-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="mic-01">
          <path d={svgPaths.p3ea94300} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.98214" />
          <path d={svgPaths.p29e00940} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.98214" />
          <path d={svgPaths.p3f7ddb80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.98214" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLogo() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <Mic2 />
      <p
        className="uppercase text-[18px] md:text-[19px] tracking-wide font-normal bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(90deg, rgb(235,235,235) 20%, rgb(197,197,197) 100%)",
          WebkitTextFillColor: "transparent",
        }}
      >
        instaflow
      </p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 uppercase tracking-wider text-sm md:text-[15px] font-medium">
      <p className="text-[#dadada] hover:text-white cursor-pointer transition">Demo</p>
      <p className="text-[#7989a3] hover:text-white cursor-pointer transition">Features</p>
      <p className="text-[#7989a3] hover:text-white cursor-pointer transition">Industries</p>
      <p className="text-[#7989a3] hover:text-white cursor-pointer transition">Blog</p>
    </div>
  );
}

function CTAButton() {
  return (
    <button className="bg-[#7711e5] cursor-pointer hover:bg-[#5f0fc0] transition-all duration-300 uppercase text-white text-sm md:text-base rounded-full px-6 py-2 md:py-2.5 whitespace-nowrap">
      Get Start
    </button>
  );
}

function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-10">
      <NavLinks />
      <CTAButton />
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-6 z-50 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/10 backdrop-blur-lg border border-white/30 rounded-full px-6 py-3">
        <HeaderLogo />
        <DesktopNav />
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-4 max-w-7xl mx-auto bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-6 space-y-6">
          <NavLinks />
          <CTAButton />
        </div>
      )}
    </div>
  );
}
