import { LucidePenTool, Pen, PenTool, PenToolIcon, Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 border-b-[0.5px] border-b-gray-800">
      <div className="flex flex-row items-center justify-center w-fit gap-2 bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-[#ee2cd4] flex-nowrap">
        <LucidePenTool fill="blue" className="text-blue-700 rotate-180" />
        <span className="text-transparent font-bold text-xl">
          DevInsights
        </span>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="relative">
          <Input
            placeholder="Search articles"
            className={cn(
              "text-[#01000548] bg-transparent border-gray-600 h-9 w-full sm:w-72 placeholder:text-xs text-xs"
            )}
          />
          <Search className="text-[#01000548] absolute top-1/2 -translate-y-1/2 right-2 h-4 w-4" />
        </div>
      </div>
    </header>
  );
}
