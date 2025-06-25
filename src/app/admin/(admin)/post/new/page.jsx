'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LucidePenTool, ArrowLeft, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
)

export default function NewPost() {
  const [imagePreview, setImagePreview] = useState(null)
  
  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      tags: '',
      featuredImage: null,
      content: '# Write your post content here'
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      category: Yup.string().required('Category is required'),
      tags: Yup.string(),
      content: Yup.string().required('Content is required')
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values)
    },
  })

  // Handle markdown editor changes
  const handleContentChange = (value) => {
    formik.setFieldValue('content', value)
  }

  // Handle file upload
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      formik.setFieldValue('featuredImage', file)
      setImagePreview(file.name)
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
            <Button variant="outline" size="sm" className="border-gray-600 text-black hover:text-white hover:bg-gray-800">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-xl">Create New Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-white">Post Title</Label>
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
                  <div className="text-red-500 text-sm mt-1">{formik.errors.title}</div>
                ) : null}
              </div>

              {/* Category and Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white">Category</Label>
                  <Input 
                    id="category" 
                    name="category"
                    value={formik.values.category} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    placeholder="e.g. Frontend, Backend, UI/UX" 
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {formik.touched.category && formik.errors.category ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.category}</div>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-white">Tags</Label>
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

              {/* Featured Image */}
              <div className="space-y-2">
                <Label htmlFor="featuredImage" className="text-white">Featured Image</Label>
                <div className="flex items-center gap-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="border-gray-600 text-white hover:bg-gray-700"
                    onClick={() => document.getElementById('featuredImage').click()}
                  >
                    <ImageIcon className="h-4 w-4 mr-2" /> Upload Image
                  </Button>
                  <span className="text-sm text-gray-400">
                    {imagePreview ? imagePreview : 'No image selected'}
                  </span>
                  <input 
                    id="featuredImage" 
                    name="featuredImage"
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              {/* Markdown Editor */}
              <div className="space-y-2">
                <Label htmlFor="content" className="text-white">Post Content</Label>
                <div data-color-mode="dark">
                  <MDEditor
                    id="content"
                    name="content"
                    value={formik.values.content}
                    onChange={handleContentChange}
                    height={400}
                    preview="edit"
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                {formik.touched.content && formik.errors.content ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.content}</div>
                ) : null}
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="border-gray-600 text-white hover:bg-gray-700"
                  onClick={() => formik.setFieldValue('status', 'draft')}
                >
                  Save as Draft
                </Button>
                <Button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-600"
                >
                  Publish Post
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
