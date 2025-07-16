"use client";
import { Menu, Moon, Search, Sun } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet.jsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Category" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 border-b-[0.5px]">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold ">DevInsights</span>
        </Link>
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
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Button variant="ghost" asChild key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Theme Switcher */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Button className={cn("hidden md:flex")}>Subscribe</Button>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
              <Button>Subscribe</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
