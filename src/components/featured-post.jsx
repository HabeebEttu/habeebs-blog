import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function FeaturedPost() {
  return (
    <div className="py-10 px-3 flex items-center justify-center">
      <div className="w-[85vw] h-[370px] rounded-xl overflow-hidden px-6 pt-20 bg-gray relative group">
        <Image
          src={"/netflix-bg.jpg"}
          alt="post-image"
          fill
          className="absolute top-0 left-0 w-full h-full object-top transition-transform duration-500 group-hover:cursor-pointer group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col px-12">
          <div className="bg-blue-700 rounded-md mt-12 px-2 py-0.5">
            <p className="text-white text-xs">Techology</p>
          </div>
          <div className="mt-5 font-bold text-3xl max-w-[600px] text-white">
            <p>The Future of Web Development: Trends to Watch in 2025</p>
          </div>
          <div className=" text-xs w-[50%] mt-6 text-white">
            Explore the cutting-edge technologies and methodologies shaping the
            future of web development in 2025 and beyond.
          </div>
          <div className="text-xs text-white pt-3 ">May 20, 2025 · 8 min read</div>
          
            <Button
              variant="default"
              className={cn("bg-blue-700 hover:bg-blue-800 text-white text-sm mt-10 px-2 py-0.5 flex items-center gap-2 w-fit my-2")}
            >
              Read Article <ArrowRight size={16} />
            </Button>
          
        </div>
      </div>
    </div>
  );
}
