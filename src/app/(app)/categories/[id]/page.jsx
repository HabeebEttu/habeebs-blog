import ArticleCard from "@/components/ArticleCard";
import { db } from "@/app/db";

async function getCategory(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
    const category = await res.json()
    
  return category;
}

export default async function CategoryPage({ params }) {
    const {id} = await params
    console.log("Category ID:", id);
  const category = await getCategory(id);
    console.log("Fetched Category:", category);
    if (!category) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-lg text-gray-700">The category you are looking for does not exist.</p>
      </div>
    );
  }

  const posts = category.posts || [];
    
  return (
    <div className="bg-gray-900 w-full">
      <div className="container mx-auto p-4  ">
        <h1 className="text-3xl font-bold mb-4">Category: {category.name}</h1>
        {category.description && (
          <p className="text-lg text-gray-700 mb-6">{category?.description}</p>
        )}

        <h2 className="text-2xl font-semibold mb-4">Posts in this Category:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <ArticleCard
                key={post?.slug}
                category={category?.name}
                date={new Date(post?.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                title={post?.title}
                slug={post?.slug}
                description={post?.conten}
                imageSrc={post?.coverImage}
              />
            ))
          ) : (
            <p>No posts found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}