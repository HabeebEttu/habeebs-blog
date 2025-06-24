'use client'
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LogOut() {
 

  const handleSignOut = async () => {
      try {
        
      await signOut({ redirect: true, callbackUrl: '/admin/login' });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="border-gray-600 text-black hover:text-white hover:bg-gray-800"
      onClick={handleSignOut}
    >
      Logout
    </Button>
  )
}
