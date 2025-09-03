import React from 'react';
import { cn } from '@/lib/utils';

// 主题生成器组件
interface ThemeGeneratorProps {
  story: {
    author: string;
    title: string;
  };
  theme: {
    title: string;
    requirement: string;
  };
  className?: string;
}

export default function ThemeGenerator({ story, theme, className }: ThemeGeneratorProps) {
  return (
    <div className={cn(
      "bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white",
      className
    )}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4 text-sm font-medium">
          今日写作主题
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {theme.title}
        </h3>
        
         <p className="text-blue-100 mb-6 leading-relaxed">
从{story.author}《{story.title}》中获得灵感："{story.content.substring(0, 100)}..."我们邀请您探索"{theme.title}"这个与日常生活息息相关的主题，通过个人经历的分享，发掘平凡生活中的不凡感悟。
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
          <h4 className="font-semibold text-lg mb-3 flex items-center">
            <i className="fa-solid fa-list-check mr-2"></i> 写作建议
          </h4>
          <ul className="text-blue-50 text-sm leading-relaxed space-y-2">
            {theme.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start">
                <i className="fa-solid fa-check-circle mt-1 mr-2"></i>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}