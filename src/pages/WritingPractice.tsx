import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StoryCard, { Story } from '@/components/literary-story/StoryCard';
import StoryAnalysis from '@/components/literary-story/StoryAnalysis';
import ThemeGenerator from '@/components/theme-guidance/ThemeGenerator';
import GuidanceQuestions from '@/components/theme-guidance/GuidanceQuestions';
import WordCountEditor from '@/components/writing-editor/WordCountEditor';
import EvaluationCard from '@/components/evaluation/EvaluationCard';
import AuthorMatch from '@/components/evaluation/AuthorMatch';
import { useWordCount } from '@/hooks/useWordCount';
import { useProgressiveDifficulty } from '@/hooks/useProgressiveDifficulty';
import { useWorkflow } from '@/hooks/useWorkflow';
  import { literaryResources } from '@/lib/mock/literaryResources';
  import { literaryImitations } from '@/lib/mock/literaryImitations';
import { writingThemes, WritingTheme } from '@/lib/mock/writingThemes';
import { literaryStories } from '@/lib/mock/literaryStories';
import WorkflowSelector from '@/components/workflow/WorkflowSelector';
import { savePracticeRecord } from '@/lib/utils';
import { toast } from 'sonner';
import { useViewMode } from '@/contexts/ViewModeContext';

// 定义写作练习页面组件
export default function WritingPractice() {
  // 用于跟踪展开状态的对象
  const [expandedItems, setExpandedItems] = useState({});
  const navigate = useNavigate();
  // 安全初始化主题和故事，防止数组为空导致的错误
  const [selectedTheme, setSelectedTheme] = useState<WritingTheme>(writingThemes.length > 0 ? writingThemes[0] : {
    id: 0,
    title: "默认主题",
    description: "请检查主题数据是否加载",
    category: "ancient",
    suggestions: ["请检查主题数据"],
    storyId: 0
  });
  const [selectedStory, setSelectedStory] = useState<Story>(literaryStories.length > 0 ? literaryStories[0] : {
    id: 0,
    author: "默认作者",
    title: "默认故事",
    era: "未知年代",
    imageUrl: "",
    brief: "请检查故事数据是否加载",
    text: "",
    content: "请检查故事数据是否加载",
    theme: {
      title: "默认主题",
      literaryDevice: "请检查故事数据"
    }
  });
  const [userWriting, setUserWriting] = useState('');
  const [evaluation, setEvaluation] = useState(null);
  const [isLoadingResources, setIsLoadingResources] = useState(false);
  const [selectedWordLimit, setSelectedWordLimit] = useState(200); // 默认选择200字
  const [showWordLimitSelection, setShowWordLimitSelection] = useState(false); // 控制是否显示字数选择
  const { progress, increaseDifficulty } = useProgressiveDifficulty();
  const { wordCount, charCount, updateWordCount } = useWordCount();
  const { 
    workflows, 
    selectedWorkflow, 
    currentStepIndex,
    getCurrentStep,
    isLoading: isLoadingWorkflow,
    nextStep,
    prevStep,
    goToStep,
    isStepCompleted
  } = useWorkflow();
  const currentStep = getCurrentStep();
  const { viewMode, toggleViewMode } = useViewMode();

  // 根据主题的storyId查找匹配的故事
  const getStoryForTheme = (theme: WritingTheme): Story => {
    // 1. 检查故事数据是否存在
    if (literaryStories.length === 0) {
      console.error("故事数据为空，请检查literaryStories.ts文件");
      return {
        id: 0,
        author: "默认作者",
        title: "默认故事",
        era: "未知年代",
        imageUrl: "",
        brief: "故事数据未加载",
        text: "",
        content: "故事数据未加载，请检查应用配置",
        theme: {
          title: "默认主题",
          literaryDevice: "N/A"
        }
      };
    }
    
    // 2. 根据主题中指定的storyId查找精确匹配的故事
    const exactMatch = literaryStories.find(story => story.id === theme.storyId);
    
    if (exactMatch) {
      return exactMatch;
    }
    
    // 3. 如果未找到匹配（可能storyId无效），使用第一个故事作为回退
    console.warn(`未找到ID为${theme.storyId}的故事，使用第一个故事作为回退`);
    return literaryStories[0];
  };

  // 每日自动选择一个不重复的写作主题和对应的文学故事
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // 获取今天的日期（YYYY-MM-DD）
    const lastSelectionDate = localStorage.getItem('lastThemeSelectionDate');
    const usedThemeIds = JSON.parse(localStorage.getItem('usedThemeIds') || '[]');
    
    // 如果不是今天选择的，或者所有主题都已使用过，则重新选择
    if (lastSelectionDate !== today || usedThemeIds.length >= writingThemes.length) {
      // 过滤出未使用的主题
      const unusedThemes = writingThemes.filter(theme => !usedThemeIds.includes(theme.id));
      
      // 如果所有主题都已使用，则重置已使用列表
      const availableThemes = unusedThemes.length > 0 ? unusedThemes : writingThemes;
      const newUsedThemeIds = unusedThemes.length > 0 ? [...usedThemeIds] : [];
      
      // 随机选择一个主题
      const randomIndex = Math.floor(Math.random() * availableThemes.length);
      const selected = availableThemes[randomIndex];
      
      // 更新已使用主题ID列表
      if (!newUsedThemeIds.includes(selected.id)) {
        newUsedThemeIds.push(selected.id);
      }
      
      // 保存到localStorage
      localStorage.setItem('lastThemeSelectionDate', today);
      localStorage.setItem('usedThemeIds', JSON.stringify(newUsedThemeIds));
      localStorage.setItem('selectedThemeId', JSON.stringify(selected.id));
      
      // 设置选中的主题和匹配的故事
      setSelectedTheme(selected);
      const matchedStory = getStoryForTheme(selected);
      setSelectedStory(matchedStory);
    } else {
      // 如果今天已经选择过主题，使用之前选择的主题
      const selectedThemeId = JSON.parse(localStorage.getItem('selectedThemeId') || 'null');
      if (selectedThemeId) {
        const selected = writingThemes.find(theme => theme.id === selectedThemeId) || writingThemes[0];
        setSelectedTheme(selected);
        
        // 为主题匹配相应的故事
        const matchedStory = getStoryForTheme(selected);
        setSelectedStory(matchedStory);
      }
    }
  }, []);

  // 随机选择一个不同的主题
  const getRandomDifferentTheme = (currentTheme: WritingTheme): WritingTheme => {
    if (writingThemes.length <= 1) return currentTheme;
    
    let newTheme;
    do {
      const randomIndex = Math.floor(Math.random() * writingThemes.length);
      newTheme = writingThemes[randomIndex];
    } while (newTheme.id === currentTheme.id);
    
    return newTheme;
  };
  
  // 更换写作主题
  const handleChangeTheme = () => {
    setIsLoadingResources(true);
    
    // 模拟加载延迟
    setTimeout(() => {
      const newTheme = getRandomDifferentTheme(selectedTheme);
      setSelectedTheme(newTheme);
      
      // 为新主题匹配相应的故事
      const matchedStory = getStoryForTheme(newTheme);
      setSelectedStory(matchedStory);
      
      setUserWriting('');
      updateWordCount('');
      
      // 如果当前不在主题步骤，切换到主题步骤
      if (currentStep !== 'theme') {
        goToStep('theme');
      }
      
      // 保存新选择的主题ID
      localStorage.setItem('selectedThemeId', JSON.stringify(newTheme.id));
      
      setIsLoadingResources(false);
      toast.success('已为您更换新的写作主题和配套故事');
    }, 800);
  };
  
  // 处理写作内容变化
  const handleWritingChange = (text) => {
    setUserWriting(text);
    updateWordCount(text);
  };

  // 提交写作内容
  const handleSubmitWriting = () => {
     if (wordCount < selectedWordLimit * 0.7) {
      toast.warning(`字数不足，至少需要${Math.floor(selectedWordLimit * 0.7)}字`);
      return;
     }
     
     if (wordCount > selectedWordLimit) {
      toast.warning(`字数超出限制${wordCount - selectedWordLimit}字，请精简至${selectedWordLimit}字以内`);
      return;
    }
    
    // 提交后进入名家仿写环节
    goToStep('imitation');
  };

  // 筛选与当前主题相关的文学资源
  // 模拟在线搜集相关文学片段
  const fetchLiteraryResources = (theme) => {
    return new Promise((resolve) => {
      // 模拟网络请求延迟
      setTimeout(() => {
        // 更高级的主题匹配逻辑，支持多关键词和语义扩展
        const themeWords = theme.toLowerCase().split(/\s+/).filter(word => word.length > 0);
        
        // 主题扩展：为常见主题添加相关关键词
        const themeExpansions = {
          "离别": ["送别", "分别", "送行", "告别", "离情"],
          "友情": ["朋友", "友谊", "知己", "挚友", "友情"],
          "爱情": ["爱恋", "情感", "相思", "深情", "爱慕"],
          "童年": ["儿时", "回忆", "少年", "往事", "成长"],
          "故乡": ["家乡", "故土", "家园", "乡愁", "故里"]
        };
        
        // 获取扩展关键词
        
        let expandedKeywords = [...themeWords];
        themeWords.forEach(word => {
          if (themeExpansions[word]) {
            expandedKeywords = [...expandedKeywords, ...themeExpansions[word]];
          }
        });
        
        // 筛选资源
        const matchedResources = literaryResources.filter(resource => {
          const resourceText = `${resource.title.toLowerCase()} ${resource.theme.toLowerCase()} ${resource.content.toLowerCase()}`;
          return expandedKeywords.some(keyword => resourceText.includes(keyword));
        });
        
        // 随机排序并限制数量，模拟搜索结果的多样性
        const shuffled = matchedResources.sort(() => 0.5 - Math.random());
        resolve(shuffled.slice(0, 10));
      }, 800);
    });
  };

  // 获取与当前主题相关的文学资源
  useEffect(() => {
    if (selectedStory && selectedStory.theme && selectedStory.theme.title) {
      setIsLoadingResources(true);
      
      fetchLiteraryResources(selectedStory.theme.title)
        .then(resources => {
          setFilteredResources(resources);
          setIsLoadingResources(false);
        })
        .catch(() => {
          // 出错时使用默认资源
          setFilteredResources(literaryResources.slice(0, 5));
          setIsLoadingResources(false);
        });
    }
  }, [selectedStory]);

  // 初始状态
  const [filteredResources, setFilteredResources] = useState([]);

  // 如果没有匹配的资源，使用默认资源
  const displayResources = filteredResources.length > 0 ? filteredResources : literaryResources.slice(0, 5);

  // 开始新练习
  const startNewPractice = () => {
    // 重置写作状态
    setUserWriting('');
    setEvaluation(null);
    updateWordCount('');
    
    // 重新选择主题
    const today = new Date().toISOString().split('T')[0];
    const lastSelectionDate = localStorage.getItem('lastThemeSelectionDate');
    const usedThemeIds = JSON.parse(localStorage.getItem('usedThemeIds') || '[]');
    
    const unusedThemes = writingThemes.filter(theme => !usedThemeIds.includes(theme.id));
    const availableThemes = unusedThemes.length > 0 ? unusedThemes : writingThemes;
    const newUsedThemeIds = unusedThemes.length > 0 ? [...usedThemeIds] : [];
    
    const randomIndex = Math.floor(Math.random() * availableThemes.length);
    const selected = availableThemes[randomIndex];
    
    if (!newUsedThemeIds.includes(selected.id)) {
      newUsedThemeIds.push(selected.id);
    }
    
    localStorage.setItem('lastThemeSelectionDate', today);
    localStorage.setItem('usedThemeIds', JSON.stringify(newUsedThemeIds));
    localStorage.setItem('selectedThemeId', JSON.stringify(selected.id));
    
    setSelectedTheme(selected);
    const matchedStory = getStoryForTheme(selected);
    setSelectedStory(matchedStory);
    
    // 重置到工作流第一步
    goToStep(selectedWorkflow.steps[0].id);
  };
    
  // 生成评价
  const generateEvaluation = () => {
    // 模拟评价过程
    toast.info('正在生成您的个性化评价...');
    setTimeout(() => {
      // 这里应该是API调用，现在使用模拟数据
      setEvaluation({
        strengths: [
          "情感表达真挚，能够引起读者共鸣",
          "细节描写生动，场景感强",
          "语言简洁有力，符合字数限制要求"
        ],
        improvements: [
          "部分句子结构可以更加多变",
          "可以增加一些感官描写，让场景更立体",
          "结尾可以更有回味空间"
        ],
        authorMatch: {
          name: "朱自清",
          reason: "您的文字风格细腻、情感真挚，请善于从日常生活中发现诗意，与朱自清的写作风格相似",
          similarText: "月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。"
        }
      });
      goToStep('evaluation');
      // 完成练习后增加难度
      increaseDifficulty();
    }, 2000);
  };

  // 导航到资源库
  const navigateToResources = () => {
    navigate('/resources');
  };

  // 开始新的练习 (重命名以避免重复声明)
  const startNewPracticeSession = () => {
    goToStep('story');
    setUserWriting('');
    setEvaluation(null);
    updateWordCount('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      {/* 顶部导航 */}
       <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
                <button 
                  onClick={() => navigate('/')}
                  className="mr-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md flex items-center transition-all duration-300 transform hover:-translate-y-0.5"
                  aria-label="返回主页"
                >
                  <i className="fa-solid fa-home mr-2"></i>
                  返回主页
                </button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">含英咀华</h1>
          </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={navigateToResources}
                  className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors hidden sm:inline-block"
                >
                  文学资源库
                </button>
                <button 
                  onClick={navigateToResources}
                  className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors sm:hidden"
                  aria-label="文学资源库"
                >
                  <i className="fa-solid fa-book"></i>
                </button>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  练习进度: {progress}/3 级
                </div>
                {/* 视图切换按钮 */}
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

        <main className={`container mx-auto px-4 py-8 ${viewMode === 'mobile' ? 'max-w-md mx-auto w-full' : ''}`}>
          {/* 工作流选择器 */}
          <WorkflowSelector />
          
          {/* 进度指示器 */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-2">
              <h2 className="text-2xl font-bold">每日写作练习</h2>
              <div className="flex items-center space-x-3">
                 <button
                  onClick={handleChangeTheme}
                  disabled={isLoadingResources}
                  className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center flex-1 sm:flex-none justify-center"
                >
                  {isLoadingResources ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin mr-1.5"></i> 加载中...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-refresh mr-1.5"></i> 更换主题
                    </>
                  )}
                </button>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 whitespace-nowrap">
                  {currentStep ? `${currentStepIndex + 1}. ${currentStep.name}` : '加载中...'}
                </span>
              </div>
            </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ 
                width: selectedWorkflow.steps.length > 0 
                  ? `${(currentStepIndex / (selectedWorkflow.steps.length - 1)) * 100}%` 
                  : '0%'
              }}>
            </div>
          </div>
        </div>

        {/* 文学故事引入模块 */}
        {currentStep?.id === 'story' && (
          <div className="space-y-6 animate-fadeIn">
            <StoryCard story={selectedStory} />
            <StoryAnalysis story={selectedStory} />
            
            <div className="flex justify-end">
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  aria-label="继续到下一步"
                >
                  继续到下一步 <i className="fa-solid fa-arrow-right ml-2"></i> 
                  <span className="ml-2 text-xs opacity-80">
                    {selectedWorkflow.steps[currentStepIndex + 1]?.name || '下一步'}
                  </span>
                </button>
             </div>
           </div>
         )}
         
         {/* 保存练习记录 */}
         {currentStep?.id === 'evaluation' && evaluation && (
           <div className="hidden">
             {(() => {
               // 获取当前主题的名家仿写片段
               const themeImitations = literaryImitations
                 .filter(imitation => imitation.themeId === selectedTheme.id)
                 .slice(0, 3);
               
               // 创建练习记录
               const newRecord = {
                 id: Date.now().toString(),
                 date: new Date().toISOString().split('T')[0],
                 theme: selectedTheme.title,
                 userWriting,
                 evaluation,
                 imitations: themeImitations,
                 timestamp: Date.now()
               };
               
               // 保存记录到本地存储
               savePracticeRecord(newRecord);
               return null;
             })()}
           </div>
         )}

        {/* 主题生成与引导模块 */}
        {currentStep?.id === 'theme' && (
          <div className="space-y-6 animate-fadeIn">
              <ThemeGenerator 
                story={selectedStory} 
                theme={{
                  title: selectedTheme.title,
                  requirement: selectedTheme.description,
                  suggestions: selectedTheme.suggestions
                }} 
              />
             
             <GuidanceQuestions 
               story={{author: "文思写作", title: "文学灵感"}} 
               theme={{
                 title: selectedTheme.title
               }} 
             />
            
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
              >
                <i className="fa-solid fa-arrow-left mr-2"></i> 返回
              </button>
              
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
               >
                 开始写作练习 <i className="fa-solid fa-pen-to-square ml-2"></i>
               </button>
             </div>
             
             {/* 字数限制选择弹窗 */}
             {showWordLimitSelection && (
               <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                 <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md">
                   <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                     <h3 className="text-xl font-bold text-gray-900 dark:text-white">选择字数限制</h3>
                     <p className="text-gray-600 dark:text-gray-300 mt-1">
                       请选择适合您的写作字数限制
                     </p>
                   </div>
                 </div>
               </div>
             )}
           </div>
        )}

        {/* 写作与字数控制模块 */}
        {currentStep?.id === 'writing' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                 <i className="fa-solid fa-pencil-alt text-blue-500 mr-2"></i>
                 今日写作主题: {selectedTheme.title}
               </h3>
               
               <p className="text-gray-600 dark:text-gray-300 mb-6">
                 {selectedTheme.description}
              </p>
              
              <div className="mb-4 relative">
                {/* 字数超出提示 */}
                {wordCount > selectedWordLimit && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg font-medium">
                     字数超出: {wordCount - selectedWordLimit}字
                  </div>
                )}
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                   当前字数限制: <span className="text-blue-600 dark:text-blue-400 font-bold">{selectedWordLimit}字</span>
                 </span>
                 <span className={`text-sm font-medium ${
                    wordCount > selectedWordLimit ? 'text-red-500' : 
                     wordCount < selectedWordLimit * 0.7 ? 'text-amber-500' : 'text-green-500'
                   }`}>
                     {wordCount}/{selectedWordLimit} 字
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                       wordCount > selectedWordLimit ? 'bg-red-500' : 
                       wordCount < selectedWordLimit * 0.7 ? 'bg-amber-500' : 'bg-green-500'
                     }`}
                     style={{ width: `${Math.min(100, (wordCount / selectedWordLimit) * 100)}%` }}
                   ></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  提示: 中文字符算1字，英文单词算1字，超出限制仍可输入但需精简
                </p>
              </div>
              
              <WordCountEditor
                value={userWriting}
                onChange={handleWritingChange}
                 maxLength={selectedWordLimit}
                 placeholder="请在此输入您的写作内容..."
                className="min-h-[200px] w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 italic">
                提示: 尽量表达真实情感，注重细节描写，让文字更具感染力。
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
              >
                <i className="fa-solid fa-arrow-left mr-2"></i> 返回
              </button>
              
              <button
                onClick={handleSubmitWriting}
                disabled={!userWriting.trim()}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                提交作品 <i className="fa-solid fa-check ml-2"></i>
              </button>
            </div>
          </div>
        )}
        
        {/* 名家仿写环节 */}
        {currentStep?.id === 'imitation' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">名家仿写</h3>
              <p className="text-gray-600 dark:text-gray-300">
                 以下是与今日主题"{selectedTheme.title}"相关的文学片段，供您学习模仿
               </p>
            </div>
            
             {/* 显示文学资源卡片或无内容提示 */}
               {isLoadingResources ? (
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                   {[...Array(3)].map((_, index) => (
                     <div key={`skeleton-${index}`} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 animate-pulse">
                       <div className="p-5 space-y-4">
                         <div className="flex justify-between items-start">
                           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-24"></div>
                         </div>
                         <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                         <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                         <div className="space-y-2">
                           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                         </div>
                         <div className="space-y-2">
                           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               ) : (
                 <div className="grid grid-cols-1 gap-6">
                   {(() => {
                     // 获取当前主题的仿写片段，确保至少有3个
                     const themeImitations = literaryImitations
                       .filter(imitation => imitation.themeId === selectedTheme.id);
                       
                     // 如果当前主题的仿写片段不足3个，从其他主题补充一些通用片段
                     const allImitations = [...themeImitations];
                     if (allImitations.length < 3) {
                       const additionalImitations = literaryImitations
                         .filter(imitation => imitation.themeId !== selectedTheme.id)
                          .sort((a, b) => a.id - b.id) // 按ID稳定排序
                          .slice(0, 3 - allImitations.length);
                          
                       allImitations.push(...additionalImitations);
                     }
                     
                     return allImitations.map(imitation => (
                        <div key={imitation.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                         <div className="p-5">
                           {/* 体裁标签 */}
                           <div className="flex justify-center mb-4">
                             <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                               imitation.era.includes('唐') || imitation.era.includes('宋') || imitation.era.includes('明') || imitation.era.includes('清') || imitation.era.includes('战国') || imitation.era.includes('西汉')
                                 ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' 
                                 : imitation.era.includes('现代') || imitation.era.includes('当代')
                                   ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                   : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                             }`}>
                               {imitation.genre}
                             </span>
                           </div>
                           
                           {/* 书名 - 居中放大 */}
                           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                             {imitation.source}
                           </h3>
                           
                           {/* 作者和年代 - 居中放大 */}
                           <p className="text-base text-gray-500 dark:text-gray-400 mb-6 text-center">
                             {imitation.author} · {imitation.era}
                           </p>
                           
                           {/* 文学片段 */}
                           <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                             <p className="text-base text-gray-700 dark:text-gray-300 italic">
                               "{imitation.content}"
                             </p>
                           </div>
                           
                           {/* 赏析部分 - 隐藏卡片 */}
                           <div className="mb-4">
                              <button 
                               onClick={(e) => {
                                 e.stopPropagation();
                                 setExpandedItems(prev => ({
                                   ...prev,
                                   [`appreciation_${imitation.id}`]: !prev[`appreciation_${imitation.id}`]
                                 }));
                               }}
                               className="w-full bg-gray-50 dark:bg-gray-700 p-5 rounded-lg mb-3 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
                             >
                               <h4 className="text-2xl font-bold text-gray-700 dark:text-gray-300">赏析</h4>
                               <i className={`fa-solid fa-chevron-down ml-3 transition-transform ${expandedItems[`appreciation_${imitation.id}`] ? 'rotate-180' : ''}`}></i>
                             </button>
                             
                             {expandedItems[`appreciation_${imitation.id}`] && (
                               <div className="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
                                 <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                   {imitation.appreciation}
                                 </p>
                               </div>
                             )}
                           </div>
                           
                           {/* 主题关联部分 - 隐藏卡片 */}
                           <div>
                              <button 
                               onClick={(e) => {
                                 e.stopPropagation();
                                 setExpandedItems(prev => ({
                                   ...prev,
                                   [`theme_${imitation.id}`]: !prev[`theme_${imitation.id}`]
                                 }));
                               }}
                               className="w-full bg-gray-50 dark:bg-gray-700 p-5 rounded-lg mb-3 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
                             >
                               <h4 className="text-2xl font-bold text-gray-700 dark:text-gray-300">主题关联</h4>
                               <i className={`fa-solid fa-chevron-down ml-3 transition-transform ${expandedItems[`theme_${imitation.id}`] ? 'rotate-180' : ''}`}></i>
                             </button>
                             
                             {expandedItems[`theme_${imitation.id}`] && (
                               <div className="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
                                 <p className="text-base text-blue-700 dark:text-blue-300 leading-relaxed">
                                   {imitation.themeRelevance}
                                 </p>
                               </div>
                             )}
                           </div>
                         </div>
                       </div>
                     ));
                   })()}
                 </div>
               )}
            
            <div className="flex justify-end">
              <button
                onClick={() => {
                  // 生成评价并进入评价环节
                  generateEvaluation();
                  nextStep();
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              > 
                完成学习，查看评价 <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        )}
        
        
        {/* 作品评价与反馈模块 */}
        {currentStep?.id === 'evaluation' && evaluation && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">您的写作评价</h3>
              <p className="text-gray-600 dark:text-gray-300">
                基于您的写作内容，我们为您提供以下个性化反馈
              </p>
            </div>
            
            <EvaluationCard evaluation={evaluation} />
            
            <AuthorMatch authorMatch={evaluation.authorMatch} />
            
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center">
                <i className="fa-solid fa-lightbulb mr-2"></i>写作建议
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-green-700 dark:text-green-400">
                 <li>尝试阅读更多与"{selectedTheme.title}"主题相关的文学作品，丰富写作灵感</li>
                 <li>下次写作可以尝试从不同角度切入主题，展现更多元化的思考</li>
                <li>保持每日写作习惯，您的进步非常明显！</li>
              </ul>
            </div>
            
            <div className="flex justify-center space-x-4 pt-4">
               <button
                 onClick={() => {
                   // 生成评价并进入评价环节
                   generateEvaluation();
                   nextStep();
                 }}
                 className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
               >
                开始新练习 <i className="fa-solid fa-refresh ml-2"></i>
              </button>
              
              <button
                onClick={navigateToResources}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                探索文学资源库 <i className="fa-solid fa-book-open ml-2"></i>
              </button>
            </div>
          </div>
        )}
        
        {/* 资源调研模块 */}
        {currentStep?.id === 'resources' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">文学资源调研</h3>
              <p className="text-gray-600 dark:text-gray-300">
                 以下是与今日主题"{selectedTheme.title}"相关的文学资源，帮助您深入了解主题背景
               </p>
            </div>
            
            {/* 显示文学资源卡片或无内容提示 */}
            {isLoadingResources ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(4)].map((_, index) => (
                  <div key={`skeleton-${index}`} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 animate-pulse">
                    <div className="p-5 space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-24"></div>
                        <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      </div>
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : displayResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayResources.map(resource => (resource.id && (
                  <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-5">                     
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {resource.author} · {resource.era}
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                          {resource.content}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-medium">文学主题:</span> {resource.theme}
                      </div>
                    </div>
                  </div>
                )))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <i className="fa-solid fa-book-open text-4xl text-gray-300 dark:text-gray-600 mb-4"></i>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">暂无相关文学资源</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">我们正在添加更多相关内容</p>
              </div>
            )}
            
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
              >
                <i className="fa-solid fa-arrow-left mr-2"></i> 返回
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                开始写作 <i className="fa-solid fa-pen-to-square ml-2"></i>
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
           <p>含英咀华写作练习智能体 &copy; {new Date().getFullYear()} | 基于Coze平台构建</p>
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