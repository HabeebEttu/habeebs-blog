"use client";
import React, { useState, useEffect } from "react";
import { useRouter }from "next/navigation";
import axios from "axios";
import { remark } from "remark";
import html from "remark-html";
import Loader from "@/components/Loader";

export default function PostPage({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commenterName, setCommenterName] = useState("");
  const [isSubmitting,setIsSubmitting] = useState(false)
  const router = useRouter();
  const { slug } = params;

  useEffect(() => {
    if (slug) {
      const fetchPostAndComments = async () => {
        try {
          const postResponse = await axios.get(`/api/posts/${slug}`);
          setPost(postResponse.data);
          const processedContent = await remark().use(html).process(postResponse.data.content);
          setContent(processedContent.toString());

          const commentsResponse = await axios.get(`/api/posts/${postResponse.data.id}/comments`);
          setComments(commentsResponse.data);
        } catch (error) {
          console.error("Error fetching post or comments:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPostAndComments();
    }
  }, [slug]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      alert("Comment cannot be empty.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/comments", {
        content: newComment,
        postId: post.id,
        authorName: commenterName.trim() || "Anonymous", // Pass the name if provided
      });
      setComments((prevComments) => [response.data, ...prevComments]);
      setNewComment("");
      setCommenterName("");
      setIsSubmitting(false)// Clear the name field after submission
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to submit comment.");
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <Loader />;
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

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <form onSubmit={handleSubmitComment} className="mb-8">
              <input
                type="text"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                placeholder="Your Name (optional)"
                value={commenterName}
                onChange={(e) => setCommenterName(e.target.value)}
              />
              <textarea
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Write your comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isSubmitting?'Submitting...':"Submit Comment"}
              </button>
            </form>

            <div className="space-y-6">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-800 p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      <p className="font-semibold text-blue-400">{comment.author.name || "Anonymous"}</p>
                      <span className="text-gray-500 text-sm ml-2">{new Date(comment.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-gray-300">{comment.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No comments yet. Be the first to comment!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
