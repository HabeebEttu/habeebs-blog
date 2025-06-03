import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function AboutCard({authorname,role,about}) {
  return (
    <Card
      className={cn(
        "flex flex-col w-[414px] border-none rounded-lg m-5 ml-24 overflow-hidden"
      )}
    >
      <CardHeader className=" h-[128px] bg-gradient-to-r from-blue-500 to-purple-600 relative ">
        <Image
          alt="owner-image"
          src={"/author.jpg"}
          width={88}
          height={88}
          className="rounded-full border-white border-4 absolute -bottom-10 z-40"
        />
      </CardHeader>
      <CardContent className={cn('flex flex-col')}>
        <h1>{authorname}</h1>
        <p>{role}</p>
        <p>{ about}</p>
      </CardContent>
    </Card>
  );
}
