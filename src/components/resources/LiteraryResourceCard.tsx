import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { LiteraryResource } from './ResourceList';
import { toast } from 'sonner';

// 文学资源卡片组件
interface LiteraryResourceCardProps {
  resource: LiteraryResource;
  className?: string;
}

export default function LiteraryResourceCard({ resource, className }: LiteraryResourceCardProps) {
  const [expanded, setExpanded] = useState(false);
  
  // 获取分类显示名称
  const getCategoryName = (category: string) => {
    switch (category) {
      case 'ancient': return '古代文学';
      case 'modern': return '现代文学';
      case 'contemporary': return '当代文学';
      case 'foreign': return '外国文学';
      default: return category;
    }
  };
  
  // 获取分类样式
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'ancient': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'modern': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'contemporary': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'foreign': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };
  
  // 处理视频链接点击
  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.info('视频功能即将上线，敬请期待！');
  };
  
  return (
    <div 
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg",
        className
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getCategoryStyle(resource.category)}`}>
            {getCategoryName(resource.category)}
          </span>
          
          {resource.videoUrl && (
            <button 
              onClick={handleVideoClick}
              className="text-blue-500 hover:text-blue-600 transition-colors"
              aria-label="观看解说视频"
            >
              <i className="fa-solid fa-play-circle"></i>
            </button>
          )}
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
          {resource.title}
        </h3>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {resource.author} · {resource.era}
        </p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">文学片段</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-2">
            "{resource.content.substring(0, 80)}..."
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
            <i className="fa-solid fa-tag mr-1"></i> {resource.theme}
          </span>
          
          <button className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center">
            {expanded ? '收起' : '查看详情'}
            <i className={`fa-solid fa-chevron-${expanded ? 'up' : 'down'} ml-1 text-xs`}></i>
          </button>
        </div>
        
        {/* 展开内容 */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 space-y-4 animate-fadeIn">
            <div>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">完整片段</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 italic bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                "{resource.content}"
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">文学赏析</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-sm">
                {resource.appreciation}
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">写作技巧</h4>
              <p className="text-xs text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/10 p-2 rounded-lg">
                <span className="font-medium">修辞手法：</span>{resource.literaryDevice}
              </p>
            </div>
          </div>)}
      </div>
    </div>
  );
}