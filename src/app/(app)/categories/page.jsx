import CategoryCard from '@/components/CategoryCard';
import React from 'react'
import {
  FaReact,
  FaServer,
  FaPaintBrush,
  FaDocker,
  FaMobile,
  FaDatabase,
} from "react-icons/fa";

export default async function CategoriesPage() {
  const categoriesRes = await fetch('http://localhost:3000/api/categories', {
    cache: "no-store",
  })
  let categories
  if(categoriesRes.ok){
    categories = await categoriesRes.json()
    }
  const icons = [
    FaReact,
    FaServer,
    FaPaintBrush,
    FaDocker,
    FaMobile,
    FaDatabase,
  ];
  
  
  return (
    <div className="bg-gray-900">
      <div className="pt-10"></div>
      <h1 className="text-white text-center text-5xl py-10 font-bold">
        Browse Categories
      </h1>
      <h5 className="text-center w-[50vw] text-xl text-gray-500 mx-auto">
        Explore our comprehensive collection of development topics, frameworks,
        and technologies. Find exactly what you're looking for or discover
        something new to learn.
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category?.name}
            description={category.description}
            noOfPosts={category?._count.posts}
            Icon={icons[index]}
            link={`/categories/${category?.id}`}
          />
        ))}
      </div>
    </div>
  );
}
