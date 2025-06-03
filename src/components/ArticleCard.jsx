import React from 'react'
import { Card, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'


export default function ArticleCard({title,imageSrc,category,date,description}) {
  return (
    <Card
      className={cn(
        "flex flex-col w-[350px] overflow-hidden bg-gray-800/50 mt-7 border-0 "
      )}
    >
      <div className="relative group">
        <Image
          alt={title}
          src={imageSrc}
          width={350}
          height={256}
          className="object-top transition-transform duration-500 group-hover:cursor-pointer group-hover:scale-105 "
        />
        <div className="absolute w-fit px-2.5 py-0.5 bottom-4 left-3 text-[12px] text-white bg-blue-500 rounded-sm">
          {category}
        </div>
      </div>
      <div className=" px-6 mt-6 text-[12px] text-gray-500">{date}</div>
      <CardTitle
        className={cn(
          "px-6 my-4 text-lg text-black font-bold transition-colors duration-300  hover:text-blue-500"
        )}
      >
        {title}
      </CardTitle>
      <div className="px-6 text-xs text-gray-600 line-clamp-3 pb-3 h-[90px] overflow-hidden">
        {description}
      </div>
    </Card>
  );
}
