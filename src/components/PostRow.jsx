import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import axios from 'axios';

export default function PostRow({ post, onDelete }) {
    const date = post?.createdAt;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-700/50">
      <td className="py-3 px-4 text-sm">{post?.title}</td>
      <td className="py-3 px-4 text-sm">{post?.category?.name}</td>
      <td className="py-3 px-4 text-sm">{formattedDate}</td>
      <td className="py-3 px-4 text-sm">
        <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded-full text-xs">
          {post.published ? "published" : "draft"}
        </span>
      </td>
      <td className="py-3 px-4 text-sm">
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Link href={`/admin/post/${post.slug}`}>
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
            </Link>
          </Button>
          <form action={onDelete}>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
          </form>
        </div>
      </td>
    </tr>
  );
}
