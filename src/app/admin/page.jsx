import { Button } from '@/components/ui/button';
import { NavigationMenu } from '@/components/ui/navigation-menu'
import Link from 'next/link';
import React from 'react'

export default function Admin() {
  return (
    <div>
      <NavigationMenu>
        <nav className="hidden md:flex gap-4">
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/services">
            <Button variant="ghost">Services</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
        </nav>
      </NavigationMenu>
      <form action="" className='flex flex-col items-center justify-start'>

      </form>
    </div>
  );
}
