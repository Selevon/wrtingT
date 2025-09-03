import React from 'react';
import { cn } from '@/lib/utils';

// 定义故事数据类型
export interface Story {
  id: number;
  author: string;
  title: string;
  era: string;
  imageUrl: string;
  brief: string;
  fullText: string;
  content: string;
  theme: {
    title: string;
    requirement: string;
    literaryDevice: string;
    suggestion: string;
  };
}

// 故事卡片组件
interface StoryCardProps {
  story: Story;
  className?: string;
}

export default function StoryCard({ story, className }: StoryCardProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",
      className
    )}>
      <div className="relative h-60 w-full">
        <img 
          src={story.imageUrl} 
          alt={`${story.author} - ${story.title}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="p-6 text-white">
            <div className="text-sm font-medium bg-blue-600/90 px-3 py-1 rounded-full inline-block mb-2">
              每日文学故事
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">{story.title}</h2>
            <p className="text-gray-200 flex items-center">
              <i className="fa-solid fa-pen-fancy mr-2"></i>
              {story.author} · {story.era}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
         <div className="prose dark:prose-invert max-w-none mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {story.content}
            </p>
         </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center mr-4">
            <i className="fa-solid fa-book mr-1"></i> 经典重现
          </span>
          <span className="flex items-center">
            <i className="fa-solid fa-lightbulb mr-1"></i> 启发灵感
          </span>
        </div>
      </div>
    </div>
  );
}