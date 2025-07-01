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
  
  const categories = [
    {
      title: "Frontend Development",
      description:
        "Explore modern frontend technologies including React, Vue, Angular, and responsive web design principles.",
      noOfPosts: 20,
      icon: FaReact,
    },
    {
      title: "Backend Development",
      description:
        "Deep dive into server-side programming, APIs, databases, and cloud infrastructure.",
      noOfPosts: 10,
      icon: FaServer,
    },
    {
      title: "UI/UX Design",
      description:
        "Learn about user interface design, user experience principles, and design tools.",
      noOfPosts: 5,
      icon: FaPaintBrush,
    },
    {
      title: "DevOps",
      description:
        "Discover continuous integration, deployment, and modern infrastructure management.",
      noOfPosts: 8,
      icon: FaDocker,
    },
    {
      title: "Mobile Development",
      description:
        "Build native and cross-platform mobile applications using React Native and Flutter.",
      noOfPosts: 15,
      icon: FaMobile,
    },
    {
      title: "Data Science",
      description:
        "Explore data analysis, machine learning, and artificial intelligence concepts.",
      noOfPosts: 12,
      icon: FaDatabase,
    },
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
            title={category.title}
            description={category.description}
            noOfPosts={category.noOfPosts}
            Icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
}
