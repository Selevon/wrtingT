import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPracticeRecordById, PracticeRecord } from '@/lib/utils';
import AuthorMatch from '@/components/evaluation/AuthorMatch';
import EvaluationCard from '@/components/evaluation/EvaluationCard';
import { useViewMode } from '@/contexts/ViewModeContext';

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [record, setRecord] = useState<PracticeRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const { viewMode, toggleViewMode } = useViewMode();
  
  useEffect(() => {
    if (!id) {
      navigate('/my-works');
      return;
    }
    
    // 获取指定ID的练习记录
    const practiceRecord = getPracticeRecordById(id);
    
    if (practiceRecord) {
      setRecord(practiceRecord);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  }, [id, navigate]);
  
  // 切换展开/折叠状态
  const toggleExpand = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <i className="fa-solid fa-spinner fa-spin text-4xl text-blue-500 mb-4"></i>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">加载中...</h2>
        </div>
      </div>
    );
  }
  
  if (error || !record) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
        <div className="text-center max-w-md">
          <i className="fa-solid fa-exclamation-circle text-4xl text-red-500 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">练习记录不存在</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            无法找到指定的练习记录，可能已被删除或链接无效
          </p>
          <button
            onClick={() => navigate('/my-works')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            返回我的作品 <i className="fa-solid fa-arrow-left ml-2"></i>
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
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
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">练习详情</h1>
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

       <main className={`container mx-auto px-4 py-8 max-w-4xl ${viewMode === 'mobile' ? 'max-w-md mx-auto w-full' : ''}`}>
        {record && (
          <div className="space-y-8">
            {/* 作品基本信息 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {record.theme}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    完成于 {new Date(record.date).toLocaleDateString('zh-CN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    {record.userWriting.length} 字符
                  </span>
                </div>
              </div>
              
              {/* 用户作品内容 */}
              <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">我的作品</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {record.userWriting}
                </p>
              </div>
            </div>
            
            {/* 系统评价 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                  <i className="fa-solid fa-comment-dots text-blue-500 mr-2"></i> 系统评价
                </h3>
              </div>
              
              <div className="p-6">
                <EvaluationCard evaluation={record.evaluation} />
                
                <div className="mt-6">
                  <AuthorMatch authorMatch={record.evaluation.authorMatch} />
                </div>
              </div>
            </div>
            
            {/* 名家仿写 */}
            <div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">名家仿写</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  与"{record.theme}"主题相关的文学片段
                </p>
              </div>
              
              <div className="space-y-8">
                {record.imitations.map((imitation, index) => (
                  <div key={imitation.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="p-6">
                      {/* 体裁标签 */}
                      <div className="flex justify-center mb-4">
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                          imitation.era.includes('唐') || imitation.era.includes('宋') || imitation.era.includes('明') || imitation.era.includes('清') 
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' 
                            : imitation.era.includes('现代') || imitation.era.includes('当代')
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                        }`}>
                          {imitation.genre}
                        </span>
                      </div>
                      
                      {/* 书名 */}
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                        {imitation.source}
                      </h4>
                      
                      {/* 作者和年代 */}
                      <p className="text-base text-gray-500 dark:text-gray-400 mb-6 text-center">
                        {imitation.author} · {imitation.era}
                      </p>
                      
                      {/* 文学片段 */}
                      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-base text-gray-700 dark:text-gray-300 italic">
                          "{imitation.content}"
                        </p>
                      </div>
                      
                      {/* 赏析部分 - 可折叠 */}
                      <div className="mb-4">
                        <button 
                          onClick={() => toggleExpand(`appreciation_${imitation.id}`)}
                          className="w-full bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300">赏析</h4>
                          <i className={`fa-solid fa-chevron-down ml-3 transition-transform ${expandedItems[`appreciation_${imitation.id}`] ? 'rotate-180' : ''}`}></i>
                        </button>
                        
                        {expandedItems[`appreciation_${imitation.id}`] && (
                          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                              {imitation.appreciation}
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {/* 主题关联部分 - 可折叠 */}
                      <div>
                        <button 
                          onClick={() => toggleExpand(`theme_${imitation.id}`)}
                          className="w-full bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300">主题关联</h4>
                          <i className={`fa-solid fa-chevron-down ml-3 transition-transform ${expandedItems[`theme_${imitation.id}`] ? 'rotate-180' : ''}`}></i>
                        </button>
                        
                        {expandedItems[`theme_${imitation.id}`] && (
                          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <p className="text-base text-blue-700 dark:text-blue-300 leading-relaxed">
                              {imitation.themeRelevance}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
           <p>含英咀华写作练习智能体 &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}