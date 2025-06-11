import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export default function FormField({ label, type, placeholder ,className}) {
  return (
    <>
      <Label className={cn(" text-[14px] text-white")}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        className={cn(`w-[240px] text-[14px] px-[10px] py-[6px] text-white ${className}`)}
      />
    </>
  );
}
