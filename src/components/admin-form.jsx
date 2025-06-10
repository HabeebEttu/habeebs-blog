'use client'
import React from 'react'
import { Input } from './ui/input';
import { useFormik } from 'formik';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import FormField from './FormField';
import * as Yup from "yup";

export default function AdminForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <FormField
          label="Email"
          placeholder="admin@email.com"
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={"!w-full"}
          error={formik.touched.email && formik.errors.email}
        />
        <FormField
          label="Password"
          placeholder="Enter your password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={"!w-full"}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
        />
      </div>

      <Button
        type="submit"
        className={cn(
          "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium",
          "transition-colors duration-200 py-2.5 rounded-lg",
          "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}
