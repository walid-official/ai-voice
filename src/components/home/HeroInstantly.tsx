import React from "react";
import svgPaths from "@/imports/svg-qar94wno65";
import { Play as IconParkSolidPlay } from '@icon-park/react';
import { Play } from 'lucide-react';
/* ================= HERO TITLE ================= */

function Group43() {
  return (
    <div className="text-center mt-10 uppercase font-['Grift:Extra_Bold',sans-serif]">
        <h2 className="text-2xl font-bold md:text-[45px] leading-[1.1] bg-clip-text bg-gradient-to-b from-white to-[#bababa] text-transparent">
        Every Call
      </h2>
      <h1 className="text-2xl font-bold md:text-[45px] leading-[1.1] bg-clip-text bg-gradient-to-b from-white to-[#bababa] text-transparent">
        Answered{" "}
        <span className="bg-clip-text bg-gradient-to-b from-[#f5ebff] to-[#ba79ff] text-transparent">
          Instantly
        </span>
      </h1>
    
    </div>
  );
}

function Frame59() {
  return (
    <div className="flex flex-col items-center gap-4 text-center max-w-[600px] px-4">
      <Group43 />
      <p className="text-[#c8c8c8] text-[15px] leading-relaxed font-['Grift:Medium',sans-serif]">
        Scale your business with human-sounding AI voice agents. Pick up every
        lead, handle complex support, and never leave a customer hanging.
      </p>
    </div>
  );
}

/* ================= DROPDOWN ================= */

function ArrowDown() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 21.6 21.6">
      <path
        d={svgPaths.p2089ff50}
        stroke="#D0D0D0"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

 function Frame13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50.1%-0.42px)] size-[71.953px] top-[calc(50.8%-0.42px)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.9531 71.9531">
        <g data-figma-bg-blur-radius="15.8472" id="Frame 21">
          <g clipPath="url(#clip0_1_2986)">
            <rect fill="var(--fill-0, white)" fillOpacity="0.06" height="71.9531" rx="35.9765" width="71.9531" />
            <g filter="url(#filter1_f_1_2986)" id="Rectangle 1">
              <rect fill="var(--fill-0, #FFFDFD)" height="22.4982" width="26.3772" x="23.0529" y="24.4501" />
            </g>
            <g id="mic-01">
              <path d={svgPaths.p1df84f80} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.77925" />
              <path d={svgPaths.p25e17200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.77925" />
              <path d={svgPaths.p1f89b300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.77925" />
            </g>
            <circle cx="19.6234" cy="10.6294" fill="var(--fill-0, white)" id="Ellipse 1" r="0.817649" />
            <circle cx="41.4087" cy="61.5736" fill="var(--fill-0, white)" fillOpacity="0.46" id="Ellipse 3" r="2.04412" />
            <path d={svgPaths.p391f3b00} fill="var(--fill-0, white)" fillOpacity="0.22" id="Ellipse 2" />
          </g>
          <rect height="71.2545" rx="35.6273" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.698574" width="71.2545" x="0.349287" y="0.349287" />
        </g>
        <defs>
          <clipPath id="bgblur_1_1_2986_clip_path" transform="translate(15.8472 15.8472)">
            <rect height="71.9531" rx="35.9765" width="71.9531" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72.7965" id="filter1_f_1_2986" width="76.6755" x="-2.09625" y="-0.699022">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_2986" stdDeviation="12.5746" />
          </filter>
          <clipPath id="clip0_1_2986">
            <rect fill="white" height="71.9531" rx="35.9765" width="71.9531" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}     



function IconoirVoice() {
  return (
    <div className="relative shrink-0 size-[44.708px]" data-name="iconoir:voice">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.7082 44.7082">
        <g id="iconoir:voice">
          <path d={svgPaths.p702a680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.67" strokeWidth="1.55959" />
        </g>
      </svg>
    </div>
  );
}



function IconoirVoice1() {
  return (
    <div className="relative shrink-0 size-[44.708px]" data-name="iconoir:voice">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.7082 44.7082">
        <g id="iconoir:voice">
          <path d={svgPaths.p238a7800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.67" strokeWidth="1.55959" />
        </g>
      </svg>
    </div>
  );
}

function VoiceSelector() {
  return (
    <div className="w-full">

      <div className="bg-[#15151a]  border border-white/10 rounded-xl p-4 gap-4">
        <p className="text-[#7e8faa] pb-2 text-[12px] tracking-widest uppercase">
          Select Voice Agent Profile
        </p>
        <div className="lg:flex justify-between gap-4">
            <div className="flex lg:w-[100%] w-full items-center justify-between bg-[#1d1d23] px-4 py-2 rounded-md border border-white/10">
              <span className="text-white text-sm">
                Professional Male Preview
              </span>
              <ArrowDown />
            </div>
            <div className="lg:w-[30%] mt-3 lg:mt-0 w-full">
                <Frame67 />

            </div>
        </div>
      </div>


      <div className="flex items-center justify-center gap-6 py-4">
        {/* <span className="text-white opacity-60 text-xl">◉</span> */}
        <IconoirVoice />
        <div className="w-[85px] relative h-[85px] rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
          <Frame13 />
          <div className="absolute pointer-events-none inset-[-163.93%_-178.06%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 389.622 396.985">
              <g filter="url(#filter0_f_1_3573)" id="Ellipse 730">
                <ellipse cx="194.811" cy="198.493" fill="var(--fill-0, #CD9EFF)" rx="42.7107" ry="46.3927" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="396.985" id="filter0_f_1_3573" width="389.622" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_3573" stdDeviation="76.05" />
                </filter>
              </defs>
            </svg>
          </div> 
        </div>
        {/* <span className="text-white opacity-60 text-xl">◉</span> */}
        <IconoirVoice1 />
      </div>

      <div className="flex mt-2 justify-center">
        <div className="px-4 py-2 rounded-full bg-white/10 text-[#c8c8c8] text-sm">
          Business & Consulting
        </div>
      </div>
    </div>
  );
}

/* ================= CTA BUTTON ================= */

function Frame74() {
  return (
    <button className="w-full cursor-pointer bg-white text-[#0e041a] font-bold uppercase text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition">
      Talk to Professional
    </button>
  );
}


function PlayButton() {
  return (
    <button
      className="w-4 h-4 cursor-pointer rounded-full bg-white flex items-center justify-center "
    >
      <Play size={10} color="purple" />
    </button>
  );
}


function Frame68() {
  return (
  <button className="-translate-x-1/2 rounded-full cursor-pointer -translate-y-1/2 absolute content-stretch flex gap-[4.5px] items-center left-1/2 top-[calc(50%+0.27px)] w-[83.7px]">
    <div>
      <PlayButton />
     </div>
      <p className="font-['Cottorway_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f6f6f6] text-[13.5px] tracking-[0.405px] uppercase">Preview</p>
    </button>
  );
}

function Frame67() {
  return (
    <div className="bg-[#8c21ff] h-[39.6px] overflow-clip relative rounded-[5.4px] shrink-0 w-[108px]">
      <Frame68 />
    </div>
  );
}

/* ================= AI CARD ================= */

function Ai() {
  return (
    <div className="relative w-full max-w-[620px] bg-[rgba(3,3,3,0.57)] border border-[#353535] rounded-[20px] p-6 flex flex-col gap-6">

      {/* Glow Effect */}
      <div className="absolute pointer-events-none w-[150px] h-[150px] bg-[#CD9EFF] blur-[120px] opacity-40 rounded-full self-center" />

      <p className="text-center text-[17px] uppercase font-['Neon:Heavy',sans-serif] bg-clip-text bg-gradient-to-r from-white to-[#cd9eff] text-transparent">
        Experience InstaFlow
      </p>

      <svg
        className="w-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 996.518 24.4205"
      >
        <path
          d={svgPaths.p2a0e05c0}
          stroke="white"
          strokeOpacity="0.06"
          strokeWidth="2"
        />
      </svg>

      <VoiceSelector />

      <Frame74 />
    </div>
  );
}

/* ================= MAIN HERO ================= */

export default function HeroInstantly() {
  return (
    <section className="w-full flex flex-col items-center gap-12 mt-32 px-4">
      <Frame59 />
      <Ai />
    </section>
  );
}

