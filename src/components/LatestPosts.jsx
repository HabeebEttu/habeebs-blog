import React from 'react'
import { Button } from './ui/button';
import { FilterIcon } from 'lucide-react';

export default function LatestPosts() {
  return (
    <div>
        <div className="flex items-center justify-around">
      <div className="flex flex-col gap-3">
        <h1 className='text-white text-xl'>Latest Articles</h1>
        <h4 className='text-ray-600 capitalize'>discover the latest insights in tech and development</h4>
              </div>
              <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="default"
                    className={cn("bg-white hover:cursor-pointer text-black text-sm px-2 py-0.5 flex items-center gap-2 w-fit")}
                  >
                      <FilterIcon/>
                    Filter
                    </Button>
              </div>
      </div>
    </div>
  );
}
