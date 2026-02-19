function Frame172() {
  return (
    <p className="font-['Grift:Bold',sans-serif] text-[#c8c8c8] text-[14.291px] text-center uppercase">
      Our Trusted Clients
    </p>
  );
}

function Frame171() {
  return (
    <div className="backdrop-blur-[1.905px] bg-[rgba(255,255,255,0.07)] h-[34px] rounded-[24.771px] w-[178px] border border-[rgba(255,255,255,0.26)] flex items-center justify-center">
      <Frame172 />
    </div>
  );
}

function Group60() {
  return (
    <div className="flex flex-col items-center text-center gap-0">
      <p
        className="font-['Grift:Extra_Bold',sans-serif] text-[40.75px] uppercase bg-clip-text bg-gradient-to-b from-white to-[#bababa]"
        style={{ WebkitTextFillColor: 'transparent', lineHeight: '1.15' }}
      >
        Success Stories
      </p>
      <p
        className="font-['Grift:Extra_Bold',sans-serif] text-[40.75px] uppercase bg-clip-text bg-gradient-to-b from-white to-[#bababa]"
        style={{ WebkitTextFillColor: 'transparent', lineHeight: '1.15' }}
      >
        Our Clients & Their
      </p>
    </div>
  );
}

export function Frame170() {
  return (
    <div className="flex flex-col items-center justify-center gap-[16px] w-full">
      <Frame171 />
      <Group60 />
    </div>
  );
}
