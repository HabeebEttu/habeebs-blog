import { darkenHex } from '@/app/utils/util';
import { LucideGlobe } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
const colors = [
  "#3B82F6", // blue-500
  "#22C55E", // green-500
  "#EF4444", // red-500
  "#EAB308", // yellow-500
  "#A855F7", // purple-500
  "#EC4899", // pink-500
  "#6366F1", // indigo-500
  "#14B8A6",
];
 

export default function CategoryCard({ title, description, noOfPosts ,Icon,link}) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    const secondColor = darkenHex(color)
  return (
    <div className="bg-gray-950/70 w-72 h-fit p-4 flex flex-col flex-wrap rounded-md min-h-60 min-w-72  m-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between w-full ">
        <div
          className={`p-2 rounded-md  bg-gray-800 flex items-center justify-center`}
        >
          <Icon fill={`${color}`} color={`${secondColor}`} size={22} />
        </div>
        <span className="text-xs text-muted-foreground bg-gray-700 px-1 rounded-md ml-1">
          {noOfPosts} posts
        </span>
      </div>
      <div className="text-white capitalize text-lg text-left my-5">
        <Link href={link}>{title}</Link>
      </div>
      <div className="text-gray-600 text-sm text-left text-wrap">
        {description}
      </div>
      <div className="flex flex-wrap items-center justify-start"></div>
    </div>
  );
}
