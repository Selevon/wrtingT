import React from 'react';
import LiteraryResourceCard from './LiteraryResourceCard';
import { cn } from '@/lib/utils';
import { LiteraryResource } from '@/lib/mock/literaryResources';

// 资源列表组件
interface ResourceListProps {
  resources: LiteraryResource[];
  className?: string;
}

export default function ResourceList({ resources, className }: ResourceListProps) {
  if (resources.length === 0) {
    return (
      <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
        <i className="fa-solid fa-book-open text-4xl text-gray-300 dark:text-gray-600 mb-4"></i>
        <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">暂无资源</h3>
        <p className="text-gray-500 dark:text-gray-400">选择其他分类查看更多文学资源</p>
      </div>
    );
  }
  
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 gap-6",
      className
    )}>
      {resources.map(resource => (
        <LiteraryResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}