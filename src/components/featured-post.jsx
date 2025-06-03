import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function FeaturedPost() {
  return (
    <div className="py-[40px] px-[12px] flex items-center justify-center">
      <div className="w-[85vw] h-[370px] rounded-xl overflow-hidden px-[24px] pt-[80px] bg-gray relative group">
        <Image
          src="/blog-post.jpg"
          alt="post-image"
          fill
          className="absolute top-0 left-0 w-full h-full object-top transition-transform duration-500 group-hover:cursor-pointer group-hover:scale-105"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col px-[48px]">
          {/* Category Label */}
          <div className="bg-blue-700 rounded-md mt-[48px] px-[8px] py-[2px] w-full">
            <p className="text-white text-[12px]">Techology</p>
          </div>

          {/* Title */}
          <div className="mt-[20px] font-bold text-[28px] max-w-[600px] text-white leading-[36px]">
            <p>The Future of Web Development: Trends to Watch in 2025</p>
          </div>

          {/* Description */}
          <div className="text-[12px] w-[50%] mt-[24px] text-white leading-[18px]">
            Explore the cutting-edge technologies and methodologies shaping the
            future of web development in 2025 and beyond.
          </div>

          {/* Meta Info */}
          <div className="text-[12px] text-white pt-[12px]">
            May 20, 2025 · 8 min read
          </div>

          {/* Button */}
          <Button
            variant="default"
            size="sm"
            className={cn(
              "bg-blue-700 hover:bg-blue-800 text-white text-[12px] mt-[40px] px-[12px] py-[2px] flex items-center gap-[8px] w-fit my-[8px] rounded-sm"
            )}
          >
            Read Article <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
