import React from 'react'
import { Card, CardHeader } from './ui/card'
import { cn } from '@/lib/utils'
import Category from './Category'


const categories = [
  {
    id: 1,
    name: "frontend development",
    amount: 14,
  },
  {
    id: 2,
    name: "backend development",
    amount: 18,
  },
  {
    id: 3,
    name: "AI / ML",
    amount: 20,
  },
  {
    id: 4,
    name: "UI/UX",
    amount: 10,
  },
  {
    id: 5,
    name: "DevOps",
    amount: 23,
  },
  {
    id: 6,
    name: "career development",
    amount: 14,
  },
  
];
export default function CategoriesCard() {
  return (
    <Card
      className={cn(
        "flex flex-col w-[414px] border-none rounded-lg m-5 ml-24 overflow-hidden p-6"
      )}
    >
      <h1 className="tetx-lg font-bold">Categories</h1>
      <div className=" flex flex-col gap-3">
        {categories.map((category, _) => {
          return (
            <Category
              key={category.id}
              amount={category.amount}
              categoryName={category.name}
            />
          );
        })}
      </div>
    </Card>
  );
}
