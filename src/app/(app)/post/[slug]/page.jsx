
"use client";
import React, { useState, useEffect } from "react";
import { useRouter }from "next/navigation";
import axios from "axios";
import { remark } from "remark";
import html from "remark-html";
import Loader from '@/components/Loader'

export default function PostPage({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const router = useRouter();
  const { slug } = params;

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`/api/posts/${slug}`);
          setPost(response.data);
          const processedContent = await remark().use(html).process(response.data.content);
          setContent(processedContent.toString());
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return <div className = 'w-full flex items-center justify-center bg-gray-90 h-14 '>
      <Loader/>
    </div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-400 mb-8">
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <span className="mx-4">•</span>
            <span>{post.category.name}</span>
          </div>
          <img src={post.coverImage} alt={post.title} className="w-full h-auto rounded-lg mb-8" />
          <div className="prose prose-invert prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}
