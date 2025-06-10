import Image from 'next/image'
import React from 'react'

export default function PopularPostsCard({name,imageSrc,date}) {
  return (
      <div className='flex items-center gap-4 mb-3'>
          <Image alt={name} src={imageSrc} width={80} height={80} className='w-20 h-20 object-cover rounded-md ' />
          <div className="flex flex-col ">
              <h1 className='font-semibold '>{name}</h1>
              <p className='text-gray-700 text-sm'>{date}</p>
          </div>
      </div>
  )
}
