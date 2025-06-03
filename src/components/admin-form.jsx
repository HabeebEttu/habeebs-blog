'use client'
import React from 'react'
import { Input } from './ui/input';
import { useFormik } from 'formik';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import FormField from './FormField';

export default function AdminForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  })
  return (
    <form action="" className="">
      <div className="flex flex-col p-3">
        <h2 className="text-[18px]  font-bold py-2">Admin SignIn </h2>
        <h5 className="text-[12px] py-3">Sign in to manage blog</h5>
        <FormField
          label={"Email"}
          placeholder={"admin@email.com"}
          type={"email"}
        />
        <FormField
          label={"Password"}
          placeholder={"Enter your admin password"}
          type={"password"}
        />
        <Button
          variant="default"
          size="md"
          className={cn("bg-blue-700 py-2 w-full  my-3")}
        >
          {" "}
          Sign In
        </Button>
      </div>
    </form>
  );
}
