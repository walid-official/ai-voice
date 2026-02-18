import React from "react";

function Frame152() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-1/2 top-[calc(50%-0.23px)]">
      <p className="font-['Grift:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c8c8c8] text-[14.291px] text-center uppercase">SEAMLESS CONNECTIONS</p>
    </div>
  );
}

function Frame151() {
  return (
    <div className="backdrop-blur-[1.905px] bg-[rgba(255,255,255,0.07)] h-[34px] relative rounded-[24.771px] shrink-0 w-[206px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame152 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.953px] border-[rgba(255,255,255,0.26)] border-solid inset-0 pointer-events-none rounded-[24.771px]" />
    </div>
  );
}

function Group53() {
  return (
    <div className="font-['Grift:Extra_Bold',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[46.555px] not-italic place-items-start relative shrink-0 text-center uppercase whitespace-pre-wrap">
      <p className="bg-clip-text bg-gradient-to-b col-1 from-[23.469%] from-white ml-0 mt-[47px] relative row-1 text-[40px] to-[#bababa] to-[77.551%] w-[505px]" style={{ WebkitTextFillColor: "transparent" }}>
        Fit Your Workflow
      </p>
      <p className="bg-clip-text bg-gradient-to-b col-1 from-[23.469%] from-white ml-0 mt-0 relative row-1 text-[40.75px] to-[#bababa] to-[77.551%] w-[505px]" style={{ WebkitTextFillColor: "transparent" }}>{`Integrations That `}</p>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-[522px]">
      <Frame151 />
      <Group53 />
    </div>
  );
}

export function Frame149() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[calc(25%+87px)] top-[4262px] w-[569px]">
      <Frame150 />
      <p className="font-['Grift:Medium',sans-serif] h-[78px] leading-[26px] not-italic relative shrink-0 text-[18px] text-center text-white w-full whitespace-pre-wrap">Connect Instaflow with your existing tools for payments, scheduling, CRM, and social platforms. If there’s an open API, we’ll build and manage the integration for you.</p>
    </div>
  );
}
