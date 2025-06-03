import FeaturedPost from "@/components/featured-post";
import Header from "@/components/header";
import LatestPosts from "@/components/LatestPosts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 w-full h-full">
      <Header />
      {/* <div className="w-full h-[0.1px] border-b-0 bg-[#494949]"></div> */}
      
      <FeaturedPost />
      <LatestPosts />
    </div>
  );
}
