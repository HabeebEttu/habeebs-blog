import React from 'react'
import { Button } from './ui/button';
import { ChevronDown, FilterIcon, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import ArticleCard from './ArticleCard';

const articles = [
  {
    title: "Building Scalable APIs with GraphQL and TypeScript",
    description:
      "A comprehensive guide to creating robust and scalable APIs using GraphQL with TypeScript for type safety.",
    category: "Backend",
    imageSrc: "/post-article2.jpeg",
    date: "May 18, 2025",
  },
  {
    title: "The Complete Guide to CSS Grid Layout in 2025",
    description:
      "Master the powerful CSS Grid Layout system with practical examples and best practices for modern web design.",
    category: "Frontend",
    imageSrc: "/post-article.jpeg",
    date: "May 12, 2025",
  },
  {
    title: "The Complete Guide to CSS Grid Layout in 2025",
    description:
      "Master the powerful CSS Grid Layout system with practical examples and best practices for modern web design.",
    category: "Frontend",
    imageSrc: "/post-article.jpeg",
    date: "May 12, 2025",
  },
  {
    title: "The Complete Guide to CSS Grid Layout in 2025",
    description:
      "Master the powerful CSS Grid Layout system with practical examples and best practices for modern web design.",
    category: "Frontend",
    imageSrc: "/post-article.jpeg",
    date: "May 12, 2025",
  },
  {
    title: "The Complete Guide to CSS Grid Layout in 2025",
    description:
      "Master the powerful CSS Grid Layout system with practical examples and best practices for modern web design.",
    category: "Frontend",
    imageSrc: "/post-article.jpeg",
    date: "May 12, 2025",
  },
  {
    title: "The Complete Guide to CSS Grid Layout in 2025",
    description:
      "Master the powerful CSS Grid Layout system with practical examples and best practices for modern web design.",
    category: "Frontend",
    imageSrc: "/post-article.jpeg",
    date: "May 12, 2025",
  },
];

export default function LatestPosts() {
  return (
    <div className="flex justify-center  w-full">
      <div className="w-[85vw] flex-col">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-xl font-bold">Latest Articles</h1>
            <h4 className="text-gray-600 text-sm capitalize">
              discover the latest insights in tech and development
            </h4>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="default"
              size="sm"
              className={cn(
                "bg-white hover:cursor-pointer text-black text-xs px-2 py-0.5 flex items-center gap-2 w-fit rounded-sm"
              )}
            >
              <FilterIcon className="text-[10px]" fill="black" />
              Filter
            </Button>
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
          {articles.map((article, index) => {
            return (
              <ArticleCard
                key={index}
                title={article.title}
                category={article.category}
                date={article.date}
                description={article.description}
                imageSrc={article.imageSrc}
              />
            );
          })}
        </div>
        <div className="flex items-center w-fit justify-center h-fit">
          <Button
            size="sm"
            className={cn(
              "bg-blue-700 hover:bg-blue-800 text-white text-xs mt-10 px-4 py-0 flex items-center gap-2 w-fit my-2 rounded-sm"
            )}
          >
            Load more Articles<Loader color='white '/>
          </Button>
        </div>
      </div>
    </div>
  );
}
