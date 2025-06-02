import { LucidePenTool, Pen, PenTool, PenToolIcon, Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';

export default function Header() {
  return (
    <div className="flex items-center justify-between h-11 mx-14 py-7 border-b-[0.5px] border-b-gray-800">
      <div className="flex flex-row items-center justify-center w-fit gap-2 bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-[#ee2cd4] flex-nowrap">
        <LucidePenTool fill="blue" className="text-blue-700 rotate-180" />
        <span className="text-transparent font-bold text-xl  ">
          DevInsights
        </span>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="relative">
          <Input
            placeholder="Search articles"
            className={cn(
              "text-[#01000548] bg-white h-7 w-72 placeholder:text-sm"
            )}
          />
          <Search className="text-[#01000548] absolute top-1 right-2" />
        </div>
      </div>
    </div>
  );
}
