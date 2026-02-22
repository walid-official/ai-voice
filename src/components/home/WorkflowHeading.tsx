import React from "react";
import leftSvg from "@/assets/left.svg";
import rightSvg from "@/assets/right.svg";

function Badge() {
  return (
   <div className="flex items-center justify-center gap-3">
            <img src={leftSvg} alt="" className="h-[30px] w-[80px] md:w-[100px] lg:w-[135px]" />
            <p className="text-white uppercase tracking-[2px] text-[16px]">
              SEAMLESS CONNECTIONS
            </p>
            <img src={rightSvg} alt="" className="h-[30px] w-[80px] md:w-[100px] lg:w-[135px]" />
          </div>
  );
}

function Heading() {
  return (
    <div className="text-center uppercase w-full max-w-[505px]">
      <p
        className="bg-clip-text font-bold bg-gradient-to-b from-white to-[#bababa] text-[40px] leading-[46.555px]"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        Integrations That
      </p>
      <p
        className="bg-clip-text font-bold bg-gradient-to-b from-white to-[#bababa] text-[40.75px] leading-[46.555px]"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        Fit Your Workflow
      </p>
    </div>
  );
}

export function WorkflowHeading() {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-7xl mx-auto px-4 lg:px-0 py-12 md:py-16 md:pt-28 text-center">
      <div className="flex flex-col items-center gap-4 w-full">
        <Badge />
        <Heading />
      </div>

      <p className="font-['Grift:Medium',sans-serif] text-[18px] leading-[26px] text-white max-w-[569px]">
        Connect Instaflow with your existing tools for payments, scheduling,
        CRM, and social platforms. If there’s an open API, we’ll build and
        manage the integration for you.
      </p>
    </div>
  );
}
