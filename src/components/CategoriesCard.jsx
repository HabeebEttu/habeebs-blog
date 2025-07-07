"use client";
import React, { useState, useEffect } from 'react'
import { Card, CardHeader } from './ui/card'
import { cn } from '@/lib/utils'
import Category from './Category'

export default function CategoriesCard() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('An error occurred while fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Card
      className={cn(
        "flex flex-col w-[414px] border-none rounded-lg m-5 ml-24 overflow-hidden p-6"
      )}
    >
      <h1 className="tetx-lg font-bold">Categories</h1>
      <div className=" flex flex-col gap-3">
        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              amount={category.posts.length}
              categoryName={category.name}
            />
          );
        })}
      </div>
    </Card>
  );
}

