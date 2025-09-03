import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { useViewMode } from '@/contexts/ViewModeContext';

export default function Home() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { viewMode, toggleViewMode } = useViewMode();
  
  // 背景图片URL
  const backgroundImageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Ancient%20Chinese%20study%20with%20calligraphy%20and%20books%20warm%20lighting&sign=4957feaa9e34826be7abc39b1e964e91`;
  
  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 flex flex-col ${viewMode === 'mobile' ? 'max-w-md mx-auto w-full' : ''}`}>
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">含英咀华</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* 视图切换按钮 */}
            <button
              onClick={toggleViewMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={viewMode === 'mobile' ? '切换到电脑版视图' : '切换到手机版视图'}
            >
              {viewMode === 'mobile' ? <i className="fa-solid fa-desktop"></i> : <i className="fa-solid fa-mobile-screen-button"></i>}
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
            >
              {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </button>
          </div>
        </div>
      </header>

       <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)]">
        {/* 主标题 */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          文思写作练习
        </h1>
        
        {/* 按钮区域 */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <button
            onClick={() => navigate('/practice')}
            className="flex-1 px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center"
          >
            <i className="fa-solid fa-pen-to-square mr-2"></i> 开始写作练习
          </button>
          
          <button
            onClick={() => navigate('/my-works')}
            className="flex-1 px-8 py-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center"
          >
            <i className="fa-solid fa-book mr-2"></i> 我的练习作品
          </button>
        </div>
        
        {/* 装饰图片 */}
        <div className="mt-16 w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={backgroundImageUrl} 
            alt="文思写作练习" 
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
           <p>含英咀华写作练习智能体 &copy; {new Date().getFullYear()}</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-500 transition-colors">关于我们</a>
            <a href="#" className="hover:text-blue-500 transition-colors">使用帮助</a>
            <a href="#" className="hover:text-blue-500 transition-colors">隐私政策</a>
          </div>
        </div>
      </footer>
    </div>
  );
}