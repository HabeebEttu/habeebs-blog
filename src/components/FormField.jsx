import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export default function FormField({ label, type, placeholder }) {
  return (
    <>
      <Label className={cn("mb-[8px] text-[14px]")}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        className={cn("w-[240px] mb-[12px] text-[14px] px-[10px] py-[6px]")}
      />
    </>
  );
}
