import AboutCard from "@/components/AboutCard";
import CategoriesCard from "@/components/CategoriesCard";
import ExploreTopics from "@/components/ExploreTopics";
import FeaturedPost from "@/components/featured-post";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import LatestPosts from "@/components/LatestPosts";
import PopularPosts from "@/components/PopularPosts";
import PopularPostsCard from "@/components/PopularPostsCard";
import Suscribe from "@/components/Suscribe";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 w-full min-h-screen">
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <FeaturedPost />
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
      </main>
      <ExploreTopics />
      
    </div>
  );
}
