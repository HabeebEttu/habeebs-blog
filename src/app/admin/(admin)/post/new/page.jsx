'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LucidePenTool, ArrowLeft, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useUploadThing } from "@/lib/uploadthing";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { redirect } from 'next/navigation'

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
)

export default function NewPost() {
  const [imagePreview, setImagePreview] = useState(null)
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const { startUpload } = useUploadThing("coverImageUploader");
  const [success, setSuccess] = useState(false);

  if (success){
    redirect('/admin')
  }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('An error occurred while fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      tags: "",
      featuredImage: null,
      content: "# Write your post content here",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      category: Yup.string().required("Category is required"),
      tags: Yup.string(),
      content: Yup.string().required("Content is required"),
    }),
    onSubmit: async (values) => {
      if (file) {
        const res = await startUpload([file]);
        console.log("Upload response:", res);
        if (res) {
          values.featuredImage = res[0].url;
        }
      }

      try {
        const response = await fetch("/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log("Post created successfully");
          setSuccess(true)
          
        } else {
          console.error("Failed to create post");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        
      }
    },
  });

  

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImagePreview(selectedFile.name);
    }
  }

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 border-b-[0.5px] border-b-gray-800">
        <div className="flex flex-row items-center justify-center w-fit gap-2  flex-nowrap">
          <LucidePenTool fill="blue" className="text-blue-700 rotate-180" />
          <span className="text-white text-lg">
            DevInsights <span className="text-white text-base ml-1">Admin</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-black hover:text-white hover:bg-gray-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-xl">Create New Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-white">
                  Post Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter post title"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.title}
                  </div>
                ) : null}
              </div>

              {/* Category and Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white">
                    Category
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      formik.setFieldValue("category", value)
                    }
                  >
                    <SelectTrigger
                      className={cn(
                        "bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 w-full p-2 rounded-md"
                      )}
                    >
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formik.touched.category && formik.errors.category ? (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.category}
                    </div>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-white">
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    name="tags"
                    value={formik.values.tags}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="e.g. react, javascript, design (comma separated)"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="featuredImage" className="text-white">
                  Featured Image
                </Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-gray-600 text-black hover:bg-gray-700"
                    onClick={() =>
                      document.getElementById("featuredImage").click()
                    }
                  >
                    <ImageIcon className="h-4 w-4 mr-2 text-black" /> Select
                    Image
                  </Button>
                  <span className="text-sm text-gray-400">
                    {imagePreview ? imagePreview : "No image selected"}
                  </span>
                  <input
                    id="featuredImage"
                    name="featuredImage"
                    type="file"
                    accept="image/*"
                    className="hidden text-black"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              {/* Markdown Editor */}
              <div className="space-y-2">
                <Label htmlFor="content" className="text-white">
                  Post Content
                </Label>
                <div data-color-mode="dark">
                  <MDEditor
                    id="content"
                    name="content"
                    value={formik.values.content}
                    onChange={(value) => formik.setFieldValue("content", value)}
                    height={400}
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                {formik.touched.content && formik.errors.content ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.content}
                  </div>
                ) : null}
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="border-gray-600 text-black hover:bg-gray-700"
                  onClick={() => formik.setFieldValue("status", "draft")}
                >
                  Save as Draft
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 "
                >
                  Publish Post
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

