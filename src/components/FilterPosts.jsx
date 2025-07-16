'use client';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '@/lib/utils';
import { FilterIcon } from 'lucide-react';

export default function FilterPosts({ setPosts, setLoading }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('http://localhost:3000/api/categories');
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleFilter = async (category) => {
    setLoading(true);
    setSelectedCategory(category);
    try {
      const res = await fetch(`http://localhost:3000/api/posts?category=${category.id}`);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error filtering posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearFilter = async () => {
    setLoading(true);
    setSelectedCategory(null);
    try {
      const res = await fetch(`http://localhost:3000/api/posts`);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error clearing filter:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className={cn(
            'bg-white hover:cursor-pointer text-black text-xs px-2 py-0.5 flex items-center gap-2 w-fit rounded-sm'
          )}
        >
          <FilterIcon className="text-[10px]" fill="black" />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Filter by Category</h4>
            <p className="text-sm text-muted-foreground">
              Select a category to filter the posts.
            </p>
          </div>
          <div className="grid gap-2">
            <Button
              variant={!selectedCategory ? 'solid' : 'ghost'}
              onClick={handleClearFilter}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory?.id === category.id ? 'solid' : 'ghost'}
                onClick={() => handleFilter(category)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
