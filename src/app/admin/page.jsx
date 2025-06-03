import AdminForm from '@/components/admin-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { NavigationMenu } from '@/components/ui/navigation-menu'
import Link from 'next/link';
import React from 'react'

export default function Admin() {
  
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh] '>
      
      <Card className='flex items-center w-[30vw] px-12 justify-center mx-auto rounded-sm'>
     <AdminForm/>
      </Card>
    </div>
  );
}
