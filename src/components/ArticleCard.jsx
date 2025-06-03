import React from "react";
import { Card, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ArticleCard({
  title,
  imageSrc,
  category,
  date,
  description,
}) {
  return (
    <Card
      className={cn(
        "flex flex-col w-[350px] overflow-hidden bg-gray-800/50 mt-[28px] border-0"
      )}
    >
      <div className="relative group">
        <Image
          alt={title}
          src={imageSrc}
          width={350}
          height={256}
          className="object-top transition-transform duration-500 group-hover:cursor-pointer group-hover:scale-105"
        />
        <div className="absolute w-fit px-[10px] py-[2px] bottom-[16px] left-[12px] text-[12px] text-white bg-blue-500 rounded-sm">
          {category}
        </div>
      </div>

      <div className="px-[24px] mt-[24px] text-[12px] text-gray-400">
        {date}
      </div>

      <CardTitle
        className={cn(
          "px-[24px] my-[16px] text-[18px] font-bold text-black dark:text-white transition-colors duration-300 hover:text-blue-500"
        )}
      >
        {title}
      </CardTitle>

      <div className="px-[24px] text-[13px] text-gray-500 dark:text-gray-400 line-clamp-3 pb-[12px] h-[90px] overflow-hidden">
        {description}
      </div>
    </Card>
  );
}
