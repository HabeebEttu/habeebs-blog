"use client";
"use client";
import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import PopularPostsCard from './PopularPostsCard';

export default function PopularPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsRes = await fetch('http://localhost:3000/api/posts');
      if (postsRes.ok) {
        const posts = await postsRes.json();
        setPosts(posts);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Card
      className={cn(
        "flex flex-col w-[414px] border-none rounded-lg m-5 ml-24 overflow-hidden p-6 bg-white dark:bg-gray-900"
      )}
    >
      <h1 className="font-bold text-lg text-black dark:text-white">Popular Posts</h1>
      {posts.map((post, index) => (
        index < 6 ? (
          <PopularPostsCard
            key={post.id}
            name={post.title}
            date={post.date}
            imageSrc={post.coverImage}
          />
        ) : null
      ))}
    </Card>
  );
}

