import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { FaArrowRight } from 'react-icons/fa';

export default function ExploreCard({imgSrc,topic}) {
  return (
    <div className="relative overflow-hidden rounded-lg w-full sm:w-[294px] h-[256px]">
      <Image
        src={imgSrc}
        alt={topic}
        width={294}
        height={256}
        className="absolute top-0 left-0 w-full h-full object-cover backdrop-brightness-0 z-10 "
      />
      <div className="absolute top-0 left-0 w-full h-[256px] z-30">
        <div className="ml-5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mt-20 "></div>
          <div className="text-white text-lg font-bold mt-3">{topic}</div>
          <Button variant="ghost" size='md' className={cn("text-white capitalize backdrop-blur-lg !px-5 rounded-sm !py-2 !border-[#7a7a7a] !border-[0.01px] hover:bg-white/40 hover:text-black flex gap-3")}>
            Explore<FaArrowRight className="text-base text-white" />
          </Button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-[256px] bg-gradient-to-b from-transparent to-black/70 z-20"></div>
    </div>
  );
}
