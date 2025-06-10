import React from 'react'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'
import PopularPostsCard from './PopularPostsCard';
const posts = [
  {
    id: 1,
    name: "Understanding Web Accessibility in 2025",
    date: "April 28, 2025",
    imageSrc: "/popular-post.jpg",
  },
  {
    id: 2,
    name: "Understanding Web Accessibility in 2025",
    date: "April 28, 2025",
    imageSrc: "/popular-post.jpg",
  },
  {
    id: 3,
    name: "Understanding Web Accessibility in 2025",
    date: "April 28, 2025",
    imageSrc: "/popular-post.jpg",
  },
  {
    id: 4,
    name: "Understanding Web Accessibility in 2025",
    date: "April 28, 2025",
    imageSrc: "/popular-post.jpg",
  },

];
export default function PopularPosts() {
  return (
    <Card
      className={cn(
        "flex flex-col w-[414px] border-none rounded-lg m-5 ml-24 overflow-hidden p-6"
      )}
    >
      <h1 className="font-bold text-lg">Popular Posts</h1>
      {posts.map((post, index) => (
        <PopularPostsCard
          key={post.id}
          name={post.name}
          date={post.date}
          imageSrc={post.imageSrc}
        />
      ))}
    </Card>
  );
}
