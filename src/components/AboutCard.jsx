import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import Image from 'next/image'
import Link from 'next/link';
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa6'
import {} from 'react-icons/ai'

export default function AboutCard({authorname,role,about}) {
  return (
    <Card
      className={
        "flex flex-col w-full max-w-md border-none rounded-lg ml-24 my-5 overflow-hidden"
      }
    >
      <CardHeader className=" h-[128px] bg-gradient-to-r from-blue-500 to-purple-600 relative ">
        <Image
          alt="owner-image"
          src={"/author.jpg"}
          width={88}
          height={88}
          className="rounded-full  border-white border-4 absolute -bottom-10 z-40"
        />
      </CardHeader>
      <CardContent className={"flex flex-col"}>
        <h1 className="mt-14 capitalize text-lg font-semibold">{authorname}</h1>
        <p className="mt-1 text-sm text-gray-500 font-thin">{role}</p>
        <p className="text-gray-500 mt-3">{about}</p>
        <div className="flex flex-row items-center justify-between w-28 mt-6">
          <Link href={"https://x.com/EttuHabeeb"} target="blank">
            <FaTwitter fill='rgb(29,78,216)'/>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ettu-habeeb-966b09329/"}
            target="blank"
          >
            <FaLinkedin fill='rgb(29,78,216)'/>
          </Link>
          <Link href={"https://github.com/HabeebEttu"} target="blank">
            <FaGithub />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
