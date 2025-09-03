import React from 'react';
import { cn } from '@/lib/utils';

// 作家匹配组件
interface AuthorMatchProps {
  authorMatch: {
    name: string;
    reason: string;
    similarText: string;
  };
  className?: string;
}

export default function AuthorMatch({ authorMatch, className }: AuthorMatchProps) {
  // 生成作家图片URL
  const authorImageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Chinese%20writer%20${authorMatch.name}%20portrait%20ink%20painting%20style`;
  
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden",
      className
    )}>
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
          <i className="fa-solid fa-user-pen text-purple-500 mr-2"></i>
          作家风格匹配
        </h4>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* 作家信息 */}
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-200 dark:border-purple-800 mb-3">
              <img 
                src={authorImageUrl} 
                alt={authorMatch.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h5 className="text-xl font-bold text-gray-900 dark:text-white">{authorMatch.name}</h5>
            <p className="text-sm text-purple-600 dark:text-purple-400">风格相似作家</p>
          </div>
          
          {/* 匹配理由和相似片段 */}
          <div className="md:w-3/4 space-y-4">
            <div>
              <h6 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">匹配理由</h6>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {authorMatch.reason}
              </p>
            </div>
            
            <div>
              <h6 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">相似文学片段</h6>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 italic text-gray-700 dark:text-gray-300 text-sm">
                "{authorMatch.similarText}"
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 text-right">
                —— 节选自{authorMatch.name}作品
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}