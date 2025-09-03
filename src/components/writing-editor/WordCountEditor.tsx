import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// 带字数控制的编辑器组件
interface WordCountEditorProps {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
  className?: string;
}

export default function WordCountEditor({
  value,
  onChange,
  maxLength,
  placeholder = "请输入内容...",
  className
}: WordCountEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // 自动调整文本框高度
  useEffect(() => {
    if (textareaRef.current) {
      // 重置高度以正确计算滚动高度
      textareaRef.current.style.height = 'auto';
      // 设置新高度，最小为当前高度
      const newHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, [value]);
  
   // 处理文本变化
   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
     const inputValue = e.target.value;
     onChange(inputValue);
  };
  
  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      // 移除maxLength属性，允许输入超出限制的文本
      className={cn(
        "w-full resize-none outline-none transition-all",
        className
      )}
      spellCheck="true"
      aria-label="写作编辑器"
    />
  );
}