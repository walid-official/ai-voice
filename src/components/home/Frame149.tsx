import React from "react";

function Badge() {
  return (
    <div className="backdrop-blur-[1.9px] bg-white/10 border border-white/30 h-[34px] rounded-full w-full max-w-[206px] flex items-center justify-center">
      <p className="font-['Grift:Bold',sans-serif] text-[#c8c8c8] text-[14.291px] text-center uppercase">
        SEAMLESS CONNECTIONS
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="text-center uppercase w-full max-w-[505px]">
      <p
        className="bg-clip-text bg-gradient-to-b from-white to-[#bababa] text-[40px] leading-[46.555px]"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        Integrations That
      </p>
      <p
        className="bg-clip-text bg-gradient-to-b from-white to-[#bababa] text-[40.75px] leading-[46.555px]"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        Fit Your Workflow
      </p>
    </div>
  );
}

export function Frame149() {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[569px] mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
      <div className="flex flex-col items-center gap-4 w-full max-w-[522px]">
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
