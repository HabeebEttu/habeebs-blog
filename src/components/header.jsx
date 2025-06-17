import { LucidePenTool, Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 border-b-[0.5px] border-b-gray-800 bg-gray-900">
      <div className="flex items-center space-x-2">
        <LucidePenTool className="h-6 w-6 text-primary text-blue-600" />
        <span className="text-xl font-bold text-blue-600">DevInsights</span>
      </div>

      {/* Search Section */}
      <div className="hidden md:flex items-center max-w-md flex-1 mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="w-full pl-10" />
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex space-x-4 text-blue-600">
          <Button variant="ghost">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/categories">Category</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/about">About</Link>
          </Button>
        </nav>
        <Button className={cn(" bg-white text-black")}>Subscribe</Button>
      </div>
    </header>
  );
}
