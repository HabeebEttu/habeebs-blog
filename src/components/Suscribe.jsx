import React from 'react'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { SendIcon } from 'lucide-react'
import { FaTelegram, FaTelegramPlane } from 'react-icons/fa'

export default function Suscribe() {
  return (
    <Card
      className={cn(
        "flex flex-col w-[414px] border-none rounded-lg m-5 ml-24 overflow-hidden p-6"
      )}
    >
      <h1 className=" capitalize text-lg font-semibold">
        Suscribe to newsletter <br /> <br />
      </h1>
      <p className='font-thin text-gray-600'>Get all our resources delivered directly to your inbox</p>
      <Input type="email" placeholder="Enter your email" className={cn('py-2')} />
      <Button className={cn('bg-blue-700 mt-2')}>
        Subscribe <FaTelegramPlane fill='white'/>
      </Button>
    </Card>
  );
}
