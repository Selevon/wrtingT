import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResourceList from '@/components/resources/ResourceList';
import { literaryResources, ResourceCategory } from '@/lib/mock/literaryResources';
import { useViewMode } from '@/contexts/ViewModeContext';

// 文学资源库页面
export default function LiteraryResources() {
  const { viewMode, toggleViewMode } = useViewMode();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'all'>('all');
  
  // 筛选资源
  const filteredResources = activeCategory === 'all' 
    ? literaryResources 
    : literaryResources.filter(resource => resource.category === activeCategory);
  
  // 所有可用分类
  const categories = ['all', ...Array.from(new Set(literaryResources.map(r => r.category)))] as (ResourceCategory | 'all')[];
  
  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 ${viewMode === 'mobile' ? 'max-w-md mx-auto w-full' : ''}`}>
      {/* 顶部导航 */}
       <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
           <div className="flex items-center">
             <button 
               onClick={() => navigate('/')}
               className="mr-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md flex items-center transition-all duration-300 transform hover:-translate-y-0.5"
             >
               <i className="fa-solid fa-home mr-2"></i>
               返回主页
             </button>
             <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">文学资源库</h1>
           </div>
           <div>
             <button
               onClick={toggleViewMode}
               className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
               aria-label={viewMode === 'mobile' ? '切换到电脑版视图' : '切换到手机版视图'}
             >
               {viewMode === 'mobile' ? <i className="fa-solid fa-desktop"></i> : <i className="fa-solid fa-mobile-screen-button"></i>}
             </button>
           </div>
         </div>
       </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">探索文学世界</h2>
          <p className="text-gray-600 dark:text-gray-300">
            精选不同时代、不同流派的文学作品片段，助您拓展写作视野，提升文学素养
          </p>
        </div>
        
        {/* 分类筛选 */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category === 'all' ? '全部资源' : 
                 category === 'ancient' ? '古代文学' :
                 category === 'modern' ? '现代文学' :
                 category === 'contemporary' ? '当代文学' :
                 category === 'foreign' ? '外国文学' : category}
              </button>
            ))}
          </div>
        </div>
        
        {/* 资源列表 */}
        <ResourceList resources={filteredResources} />
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
           <p>文学资源库 &copy; {new Date().getFullYear()} | 含英咀华写作练习智能体</p>
        </div>
      </footer>
    </div>
    
  );
}