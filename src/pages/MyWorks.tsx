import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPracticeRecords, groupRecordsByDate, PracticeRecord } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { useViewMode } from '@/contexts/ViewModeContext';

export default function MyWorks() {
  const { viewMode, toggleViewMode } = useViewMode();
  const navigate = useNavigate();
  const [records, setRecords] = useState<PracticeRecord[]>([]);
  const [groupedRecords, setGroupedRecords] = useState<{ [key: string]: PracticeRecord[] }>({});
  const [sortedDates, setSortedDates] = useState<string[]>([]);
  
  useEffect(() => {
    // 从本地存储获取练习记录
    const practiceRecords = getPracticeRecords();
    
    // 按时间戳降序排序
    const sortedRecords = practiceRecords.sort((a, b) => b.timestamp - a.timestamp);
    setRecords(sortedRecords);
    
    // 按日期分组
    const grouped = groupRecordsByDate(sortedRecords);
    setGroupedRecords(grouped);
    
    // 获取排序的日期数组（从新到旧）
    const dates = Object.keys(grouped).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
    setSortedDates(dates);
  }, []);
  
  // 格式化日期显示
  const formatDateDisplay = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };
  
  // 处理记录点击
  const handleRecordClick = (recordId: string) => {
    navigate(`/works/${recordId}`);
  };
  
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
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">我的练习作品</h1>
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
        {records.length === 0 ? (
          // 无练习记录状态
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <i className="fa-solid fa-book-open text-5xl text-gray-300 dark:text-gray-600 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">暂无练习记录</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
              您还没有完成任何写作练习，开始您的第一次写作练习，记录将保存在这里
            </p>
            <button
              onClick={() => navigate('/practice')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              开始写作练习 <i className="fa-solid fa-pen-to-square ml-2"></i>
            </button>
          </div>
        ) : (
          // 有练习记录状态
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">练习记录</h2>
              <p className="text-gray-600 dark:text-gray-300">
                共 {records.length} 篇练习作品，按日期倒序排列
              </p>
            </div>
            
            {/* 按日期分组显示记录 */}
            {sortedDates.map(date => (
              <div key={date} className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {formatDateDisplay(date)}
                  </h3>
                </div>
                
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {groupedRecords[date].map(record => (
                    <div 
                      key={record.id}
                      onClick={() => handleRecordClick(record.id)}
                      className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {record.theme}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(record.timestamp).toLocaleTimeString('zh-CN', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                        <i className="fa-solid fa-chevron-right text-gray-400 dark:text-gray-500 mt-1"></i>
                      </div>
                      
                      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        {record.userWriting}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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