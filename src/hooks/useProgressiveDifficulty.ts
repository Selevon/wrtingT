import { useState, useEffect } from 'react';

// 渐进式难度控制钩子
export function useProgressiveDifficulty() {
  // 进度级别：1-3
  const [progress, setProgress] = useState(1);
  // 当前字数限制
  const [currentWordLimit, setCurrentWordLimit] = useState(50);
  
  // 从本地存储加载进度
  useEffect(() => {
    const savedProgress = localStorage.getItem('writingPracticeProgress');
    if (savedProgress) {
      const progressNum = parseInt(savedProgress, 10);
      if (!isNaN(progressNum) && progressNum >= 1 && progressNum <= 3) {
        setProgress(progressNum);
      }
    }
  }, []);
  
  // 根据进度更新字数限制
  useEffect(() => {
    switch (progress) {
      case 1:
        setCurrentWordLimit(50);
        break;
      case 2:
        setCurrentWordLimit(100);
        break;
      case 3:
        setCurrentWordLimit(200);
        break;
      default:
        setCurrentWordLimit(50);
    }
  }, [progress]);
  
  // 增加难度级别
  const increaseDifficulty = () => {
    if (progress < 3) {
      const newProgress = progress + 1;
      setProgress(newProgress);
      // 保存进度到本地存储
      localStorage.setItem('writingPracticeProgress', newProgress.toString());
    }
  };
  
  // 重置进度
  const resetProgress = () => {
    setProgress(1);
    localStorage.setItem('writingPracticeProgress', '1');
  };
  
  return {
    progress,
    currentWordLimit,
    increaseDifficulty,
    resetProgress
  };
}