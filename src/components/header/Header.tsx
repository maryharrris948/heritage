'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full relative border flex gap-2 flex-col bg-[#14509B] text-white p-[15px] pt-[5px]">
      <span className="text-[9px]">
        <span className="text-base">FDIC:</span> FDIC-Insured - Backed by the full faith and credit of the U.S. Government
      </span>
      <Image src="https://i.imgur.com/rTyIS2q.png" width={230} height={28} className="w-[147px]" alt="logo" />
    </div>
  );
}
