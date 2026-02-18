import React from "react";
import svgPaths from "@/imports/svg-qar94wno65";

function Frame110() {
  return (
    <p className="font-['Grift:Bold',sans-serif] 
                  text-[#c8c8c8] 
                  text-[14.291px] 
                  uppercase 
                  text-center whitespace-nowrap">
      Smart Growth Solutions
    </p>
  );
}

function Frame109() {
  return (
    <div className="relative
                    flex items-center justify-center
                    backdrop-blur-[1.905px] 
                    bg-white/10
                    h-[34px] 
                    w-[220px] 
                    px-5
                    rounded-full">

      <Frame110 />

      <div
        aria-hidden="true"
        className="absolute inset-0 
                   border border-white/30 
                   pointer-events-none 
                   rounded-full"
      />
    </div>
  );
}


function Group51() {
  return (
    <div className="font-['Grift:Extra_Bold',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[46.555px] not-italic place-items-start relative shrink-0 text-[42.755px] uppercase">
      <p className="bg-clip-text bg-gradient-to-b col-1 from-[23.469%] from-white ml-0 mt-[47px] relative row-1 text-center to-[#bababa] to-[77.551%]" style={{ WebkitTextFillColor: "transparent" }}>
        for Wellness
      </p>
      <p className="bg-clip-text bg-gradient-to-b col-1 from-[23.469%] from-white ml-0 mt-0 relative row-1 to-[#bababa] to-[77.551%] w-[391px] whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent" }}>{`Smarter Growth `}</p>
    </div>
  );
}

export function Frame108() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[120px] top-[2405px] w-[438px]">
      <Frame109 />
      <Group51 />
    </div>
  );
}
