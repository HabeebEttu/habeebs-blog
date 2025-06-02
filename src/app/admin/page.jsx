import AdminForm from '@/components/admin-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { NavigationMenu } from '@/components/ui/navigation-menu'
import Link from 'next/link';
import React, { useActionState } from 'react'

export default function Admin() {
  // const [state,dispatch,isPending] = useActionState()
  return (
    <div className='flex items-center justify-center'>
      
      <Card className='flex items-center w-[50vw] px-12 justify-center mx-auto'>
     <AdminForm/>
      </Card>
    </div>
  );
}
