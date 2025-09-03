import { useState, useEffect } from 'react';

// 返回文本真实长度(考虑中文和英文)
const getRealTextLength = (text: string) => {
  // 匹配中文字符、中文标点、英文单词和标点
  const matches = text.match(/[\u4e00-\u9fa5]|[^\x00-\xff]|[\w']+/g);
  return matches ? matches.length : 0;
};

// 字数统计钩子(同时提供字符数和真实字数统计) 
export function useWordCount(initialText: string = '') {
  const [text, setText] = useState(initialText);
  const [wordCount, setWordCount] = useState(0); // 实际字数统计(中文按字符，英文按单词)
  const [charCount, setCharCount] = useState(0); // 字符数统计(包含所有字符)
  
 // 更新字数统计
  useEffect(() => {
    // 计算字符数（包括空格和标点符号）
    const newCharCount = text.length;
    
    // 计算实际字数（中文每个字符算1字，英文按空格分割单词算1字）
    const newWordCount = getRealTextLength(text);
    
    setCharCount(newCharCount);
    setWordCount(newWordCount);
 }, [text]);
  
  // 更新文本内容
  const updateWordCount = (newText: string) => {
    setText(newText);
  };
  
 return {
    wordCount,      // 根据语言智能统计的字数
    charCount,      // 原始字符数统计
    updateWordCount // 更新文本的方法
  };
}