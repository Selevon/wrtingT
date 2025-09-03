import React from 'react';
import { cn } from '@/lib/utils';

// 评价卡片组件
interface EvaluationCardProps {
  evaluation: {
    strengths: string[];
    improvements: string[];
  };
  className?: string;
}

export default function EvaluationCard({ evaluation, className }: EvaluationCardProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden",
      className
    )}>
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
        {/* 优点部分 */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
              <i className="fa-solid fa-thumbs-up"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">作品优点</h4>
          </div>
          
          <ul className="space-y-3">
            {evaluation.strengths.map((strength, index) => (
              <li key={index} className="flex">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2 flex-shrink-0"></i>
                <span className="text-gray-700 dark:text-gray-300">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* 待改进部分 */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mr-3">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">待改进点</h4>
          </div>
          
          <ul className="space-y-3">
            {evaluation.improvements.map((improvement, index) => (
              <li key={index} className="flex">
                <i className="fa-solid fa-arrow-right text-amber-500 mt-1 mr-2 flex-shrink-0"></i>
                <span className="text-gray-700 dark:text-gray-300">{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}