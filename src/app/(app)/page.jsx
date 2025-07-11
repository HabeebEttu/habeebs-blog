import AboutCard from "@/components/AboutCard";
import CategoriesCard from "@/components/CategoriesCard";
import ExploreTopics from "@/components/ExploreTopics";
import FeaturedPost from "@/components/featured-post";
import LatestPosts from "@/components/LatestPosts";
import PopularPosts from "@/components/PopularPosts";
import Suscribe from "@/components/Suscribe";

export default async function Home() {
  const postResponse = await fetch('http://localhost:3000/api/posts')
  let posts;
  if (postResponse.ok) {
    posts = await postResponse.json()
    console.log(posts)
  }
  const featuredPost = posts[0]
  return (
    <div className="bg-gray-900 w-full min-h-screen">
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <FeaturedPost post={featuredPost}/>
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
