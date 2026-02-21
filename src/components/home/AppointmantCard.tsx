import svgPaths from "@/imports/svg-qar94wno65";

function QuoteIcon({
  variant = "a",
  className = "h-[63px] w-[63px]",
}: {
  variant?: "a" | "b";
  className?: string;
}) {
  return (
    <div className={`opacity-32 overflow-clip ${className}`}>
      <svg className="block size-full" fill="none" viewBox="0 0 54 41" preserveAspectRatio="none">
        <g>
          {variant === "a" ? (
            <>
              <path clipRule="evenodd" d={svgPaths.p38943980} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p25484480} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p3303a000} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p354bd500} fill="var(--fill-0, white)" />
            </>
          ) : (
            <>
              <path clipRule="evenodd" d={svgPaths.p38c9e600} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p3b7b3100} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p17510100} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p376b3480} fill="var(--fill-0, white)" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div>

        <div
          className="bg-clip-text flex  lg:pl-10 bg-gradient-to-r from-white to-[#e9d5ff] font-['Grift:Bold',sans-serif] uppercase  text-[20px] sm:text-[34px] md:text-[40.723px] lg:leading-[56.889px]"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          <QuoteIcon variant="a" className="h-[43px] mr-1 -mt-2 w-[43px]" />
          <div>
            <p className="mb-0 font-bold">{`Your Calendar fills itself. Every call `}</p>
            <p className="font-bold">answered. Every appointment confirmed.</p>
           
          </div>
               <QuoteIcon variant="b" className="h-[43px] ml-1 mt-20 w-[43px]" />

        </div>
       <button className="bg-white lg:ml-20 cursor-pointer mt-6 text-[#0e041a] text-[13.5px] tracking-[0.135px] uppercase font-['Grift:Bold',sans-serif] rounded-[120px] px-6 py-3">
          Book More Appointments
         </button>
    </div>
  );
}

function CTA() {
  return (
    <div className="grid ">
      <div className="bg-white rounded-[120px] px-6 py-3">
        <p className="font-['Grift:Bold',sans-serif] text-[#0e041a] text-[13.5px] tracking-[0.135px] uppercase">
          Book More Appointments
        </p>
      </div>
    </div>
  );
}

export function AppointmantCard() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
        <div className="bg-gradient-to-b from-[#6339bf] to-[#6828ae] rounded-[40px] py-8 sm:py-10 md:py-24">
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8">
            <div className="grid grid-cols-[auto_1fr_auto]  gap-4 sm:gap-6 md:gap-8 w-full">
              <div className="justify-self-start">
                {/* <QuoteIcon variant="a" className="h-[43px] w-[43px]" /> */}
              </div>
              <Heading />
              <div className="justify-self-end rotate-180">
                {/* <QuoteIcon variant="b" className="h-[43px] w-[43px]" /> */}
              </div>
            </div>
            {/* <CTA /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
