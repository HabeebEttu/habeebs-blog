"use client";
import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import { Button } from "./ui/button";
import { ChevronDown, FilterIcon, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import ArticleCard from "./ArticleCard";

import FilterPosts from './FilterPosts';

export default function LatestPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts");
        if (response.ok) {
          const posts = await response.json();
          setPosts(posts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    });

    const channel = pusher.subscribe("posts-channel");

    channel.bind("post-created", (data) => {
      setPosts((prevPosts) => [data.post, ...prevPosts]);
    });

    return () => {
      pusher.unsubscribe("posts-channel");
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="w-[85vw] flex-col">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-xl font-bold">Latest Articles</h1>
            <h4 className="text-gray-600 text-sm capitalize">
              discover the latest insights in tech and development
            </h4>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FilterPosts setPosts={setPosts} setLoading={setLoading} />
            <Button
              variant="default"
              size="sm"
              className={cn(
                "bg-white hover:cursor-pointer text-black text-xs px-2 py-0.5 flex items-center gap-2 w-fit rounded-sm"
              )}
            >
              Most Recent
              <ChevronDown />
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 w-fit">
          {loading ? (
            <p>Loading...</p>
          ) : (
            posts.map((post) => (
              <ArticleCard
                key={post.id}
                title={post.title}
                category={post.category.name}
                date={new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                description={post.content.substring(0, 100).replace('##',' ') + "..."}
                imageSrc={post.coverImage}
                slug={post.slug}
              />
            ))
          )}
        </div>
        <div className="flex items-center w-fit justify-center h-fit">
          <Button
            size="sm"
            className={cn(
              "bg-blue-700 hover:bg-blue-800 text-white text-xs mt-10 px-4 py-0 flex items-center gap-2 w-fit my-2 rounded-sm"
            )}
          >
            Load more Articles
            <Loader color="white " />
          </Button>
        </div>
      </div>
    </div>
  );
}
