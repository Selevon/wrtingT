import React from 'react';
import { cn } from '@/lib/utils';

// 故事分析组件
interface StoryAnalysisProps {
  story: {
    content: string;
    theme: {
      literaryDevice: string;
    };
  };
  className?: string;
}

export default function StoryAnalysis({ story, className }: StoryAnalysisProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700",
      className
    )}>
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
        <i className="fa-solid fa-search-plus text-blue-500 mr-2"></i>
        文学深度分析
      </h3>
      
      <div className="prose dark:prose-invert max-w-none mb-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {story.content}
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
            <i className="fa-solid fa-history mr-2"></i> 创作背景
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-400">
            作品创作于作者人生的重要转折点，反映了当时的社会环境与个人心境的交融，体现了文学家对时代的深刻洞察。
          </p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
          <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2 flex items-center">
            <i className="fa-solid fa-heart mr-2"></i> 情感内核
          </h4>
          <p className="text-sm text-purple-700 dark:text-purple-400">
            作品蕴含着对人生的深刻思考，通过细腻的情感描写，展现了作者对生活的热爱与对人性的关怀，引发读者共鸣。
          </p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
          <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center">
            <i className="fa-solid fa-pen-ruler mr-2"></i> 文学手法
          </h4>
          <p className="text-sm text-green-700 dark:text-green-400">
            作品巧妙运用了{story.theme.literaryDevice}的写作技巧，语言凝练而富有张力，通过生动的意象构建和细腻的心理描写，展现了高超的文学造诣。
          </p>
        </div>
      </div>
    </div>
  );
}