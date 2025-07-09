'use client'
import React, {useState, useEffect} from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LucidePenTool, Plus, Search, Settings, Users, FileText, BarChart } from 'lucide-react'
import Link from 'next/link'
import LogOut from '@/components/LogOut'
import StatCard from '@/components/StatCard'
import PostRow from '@/components/PostRow'
import Pusher from 'pusher-js';
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default function AdminPage() {
  const [posts, setPosts] = useState([]);
  const [noOfCategories, setNoOfCategories] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const postRes = await fetch('http://localhost:3000/api/posts');
      if (postRes.ok) {
        const posts = await postRes.json();
        setPosts(posts);
      }
    };

    const fetchCategories = async () => {
      const categoryResponse = await fetch('http://localhost:3000/api/categories');
      if (categoryResponse.ok) {
        const categories = await categoryResponse.json();
        setNoOfCategories(categories.length);
      }
    };
    const redirectToLogin= async()=>{
      const session = await getServerSession(authOptions);
      if (!session) {
        redirect("/admin/login");
      }
    }

    fetchPosts();
    fetchCategories();
    redirectToLogin();
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    });

    const channel = pusher.subscribe('posts-channel');

    channel.bind('post-deleted', (data) => {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== data.id));
    });

    return () => {
      pusher.unsubscribe('posts-channel');
    };
  }, []);

  const noOfPosts = posts.length;
  const stats = [
    {
      id: 1,
      title: "Total Posts",
      value: noOfPosts,
      Icon: FileText,
      textColor: "text-blue-500",
      bgColor: "bg-blue-900/50",
    },
    {
      id: 2,
      title: "Total Views",
      value: "12.5K",
      Icon: BarChart,
      textColor: "text-green-500",
      bgColor: "bg-green-900/50",
    },
    {
      id: 3,
      title: "Comments",
      value: "89",
      Icon: Users,
      textColor: "text-yellow-500",
      bgColor: "bg-yellow-900/50",
    },
    {
      id: 4,
      title: "Categories",
      value: noOfCategories,
      Icon: Settings,
      textColor: "text-orange-500",
      bgColor: "bg-orange-900/50",
    },
  ];
  
  return (
    <div className="bg-gray-900  w-full min-h-screen">
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
          <form method="POST">
            <LogOut />
          </form>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <Button className="bg-blue-700 hover:bg-blue-600">
            <Link href="/admin/post/new" className='flex '>
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            return (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                Icon={stat.Icon}
                textColor={stat.textColor}
                bgColor={stat.bgColor}
              />
            );
          })}
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
                  {
                    posts.map((post, index) => {
                      return(<PostRow post={post} key={post.slug} onDelete={async () => {
                        await fetch(`http://localhost:3000/api/posts/${post.id}`, { method: 'DELETE' });
                      }}/>)
                    })
                  }
                  
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
} 
