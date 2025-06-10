import React from 'react'
import ExploreCard from './ExploreCard'

const topics = [
  {
    topic: "UI/UX Design",
    imgSrc: "/explore-1.jpeg",
  },
  {
    topic: "UI/UX Design",
    imgSrc: "/explore-1.jpeg",
  },
  {
    topic: "UI/UX Design",
    imgSrc: "/explore-1.jpeg",
  },
  {
    topic: "UI/UX Design",
    imgSrc: "/explore-1.jpeg",
  },
  {
    topic: "UI/UX Design",
    imgSrc: "/explore-1.jpeg",
  },
  {
    topic: "UI/UX Design",
    imgSrc: "/explore-1.jpeg",
  },
  {
    topic: "UI/UX Design",
    imgSrc: "/explore-1.jpeg",
  },
];
export default function ExploreTopics() {

  return (
    <div className="flex flex-col p-6 bg-gray-800 min-h-[20rem] w-full py-12">
      <h1 className="text-center font-bold text-3xl text-white mt-3">
        Explore Topics
      </h1>
      <div className="mt-8 mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-7">
        {
          topics.map((topic, index) => {
            return index < 4 && (
              <ExploreCard key={index} topic={topic.topic} imgSrc={topic.imgSrc} />
            );
          })
        }
      </div>
    </div>
  );
}
