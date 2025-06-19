import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LucidePenTool, Plus, Search, Settings, Users, FileText, BarChart } from 'lucide-react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const cookieStore = cookies();
  const token = await cookieStore.get("token");

  if (!token) {
    redirect("/admin/login");
  }
  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 border-b-[0.5px] border-b-gray-800">
        <div className="flex flex-row items-center justify-center w-fit gap-2 bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-[#ee2cd4] flex-nowrap">
          <LucidePenTool fill="blue" className="text-blue-700 rotate-180" />
          <span className="text-transparent font-bold text-xl">
            DevInsights <span className="text-white text-base ml-1">Admin</span>
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="relative">
            <Input
              placeholder="Search articles"
              className="text-[#01000548] text-white bg-transparent border-gray-600 h-9 w-full sm:w-72 placeholder:text-xs text-xs"
            />
            <Search className="text-[#01000548] absolute top-1/2 -translate-y-1/2 right-2 h-4 w-4" />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-black hover:text-white hover:bg-gray-800"
          >
            Logout
          </Button>
        </div>
      </header>

      {/* Admin Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <Button className="bg-blue-700 hover:bg-blue-600">
            <Link href="/admin/post/new">
              <Plus className="h-4 w-4 mr-2" />
            </Link>
            New Post
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Total Posts</p>
                  <h3 className="text-2xl font-bold mt-1">24</h3>
                </div>
                <div className="bg-blue-700/20 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Total Views</p>
                  <h3 className="text-2xl font-bold mt-1">12.5K</h3>
                </div>
                <div className="bg-purple-700/20 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Comments</p>
                  <h3 className="text-2xl font-bold mt-1">89</h3>
                </div>
                <div className="bg-green-700/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Categories</p>
                  <h3 className="text-2xl font-bold mt-1">8</h3>
                </div>
                <div className="bg-pink-700/20 p-3 rounded-full">
                  <Settings className="h-6 w-6 text-pink-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts Table */}
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-xl">Recent Posts</CardTitle>
            <CardDescription className="text-gray-400">
              Manage your blog posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                      Title
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                      Category
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample row 1 */}
                  <tr className="border-b border-gray-700 hover:bg-gray-700/50">
                    <td className="py-3 px-4 text-sm">
                      Building Scalable APIs with GraphQL
                    </td>
                    <td className="py-3 px-4 text-sm">Backend</td>
                    <td className="py-3 px-4 text-sm">May 18, 2023</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded-full text-xs">
                        Published
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-500"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-red-500"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </Button>
                      </div>
                    </td>
                  </tr>
                  {/* Sample row 2 */}
                  <tr className="border-b border-gray-700 hover:bg-gray-700/50">
                    <td className="py-3 px-4 text-sm">
                      Modern CSS Techniques for Responsive Design
                    </td>
                    <td className="py-3 px-4 text-sm">Frontend</td>
                    <td className="py-3 px-4 text-sm">May 12, 2023</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-900/30 text-yellow-500 rounded-full text-xs">
                        Draft
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-500"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-red-500"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
