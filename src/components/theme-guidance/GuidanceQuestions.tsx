import React from 'react';
import { cn } from '@/lib/utils';

// 引导问题组件
interface GuidanceQuestionsProps {
  theme: {
    title: string;
  };
  className?: string;
}

export default function GuidanceQuestions({ story, theme, className }: GuidanceQuestionsProps) {
  // 根据主题动态生成引导性问题
  const guidanceQuestions = [
    `回想一下，您是否有过与${theme.title.toLowerCase()}相关的经历？当时的情景是怎样的？`,
    `在那个场景中，您注意到了哪些细节？这些细节带给您什么感受？`,
    `如果要描述这个场景，您会从哪些方面入手？为什么选择这些方面？`,
    `这个经历对您有什么特殊意义，或者让您对生活有了什么新的认识？`
  ];

  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700",
      className
    )}>
      <h3 className="text-xl font-bold mb-5 text-gray-800 dark:text-white flex items-center">
        <i className="fa-solid fa-question-circle text-amber-500 mr-2"></i>
        思考引导
      </h3>
      
      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
         <p className="text-amber-800 dark:text-amber-300 italic">
          "生活中的每个小场景都蕴含着丰富的情感和思考，请您通过个人经历，探索{theme.title}这一主题背后的情感与思考。"
        </p>
      </div>
      
      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
        在开始写作前，不妨思考以下问题：
      </h4>
      
      <ul className="space-y-3">
        {guidanceQuestions.map((question, index) => (
          <li key={index} className="flex">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 mt-0.5">
              {index + 1}
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {question}
            </p>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
          <i className="fa-solid fa-lightbulb text-amber-500 mr-2"></i>
          写作小贴士
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          尝试从具体的细节描写入手，比如环境氛围、人物动作、心理活动等，让您的故事更加生动形象。注重情感的真实表达，即使是微小的情绪波动，也能引起读者的共鸣。
        </p>
      </div>
    </div>
  );
}