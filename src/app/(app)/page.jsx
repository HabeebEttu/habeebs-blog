"use client";

import AboutCard from "@/components/AboutCard";
import CategoriesCard from "@/components/CategoriesCard";
import ExploreTopics from "@/components/ExploreTopics";
import FeaturedPost from "@/components/featured-post";
import LatestPosts from "@/components/LatestPosts";
import PopularPosts from "@/components/PopularPosts";
import Suscribe from "@/components/Suscribe";
import Loader from "@/components/Loader";

import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const fetchedPosts = await response.json();
      setPosts(fetchedPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const featuredPost = posts[0];

  return (
    <div className="w-full min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {loading ? (
          <Loader />
        ) : (
          <>
            <FeaturedPost post={featuredPost} />
            <LatestPosts />
            <AboutCard
              authorname={"jonathan davis"}
              role={"Founder & Lead Editor"}
              about={
                "Tech enthusiast, web developer, and writer sharing insights about modern web development and design."
              }
            />
            <Suscribe />
            <PopularPosts />
            <CategoriesCard />
          </>
        )}
      </main>
      <ExploreTopics />
    </div>
  );
}
