import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { LiteraryImitation } from './mock/literaryImitations';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 练习记录数据模型
export interface PracticeRecord {
  id: string;
  date: string;
  theme: string;
  userWriting: string;
  evaluation: {
    strengths: string[];
    improvements: string[];
    authorMatch: {
      name: string;
      reason: string;
      similarText: string;
    }
  };
  imitations: LiteraryImitation[];
  timestamp: number;
}

// 保存练习记录到本地存储
export function savePracticeRecord(record: PracticeRecord): void {
  try {
    const existingRecords = getPracticeRecords();
    const updatedRecords = [...existingRecords, record];
    localStorage.setItem('practiceRecords', JSON.stringify(updatedRecords));
  } catch (error) {
    console.error('Failed to save practice record:', error);
  }
}

// 从本地存储获取所有练习记录
export function getPracticeRecords(): PracticeRecord[] {
  try {
    const records = localStorage.getItem('practiceRecords');
    return records ? JSON.parse(records) : [];
  } catch (error) {
    console.error('Failed to get practice records:', error);
    return [];
  }
}

// 从本地存储获取特定练习记录
export function getPracticeRecordById(id: string): PracticeRecord | null {
  try {
    const records = getPracticeRecords();
    return records.find(record => record.id === id) || null;
  } catch (error) {
    console.error(`Failed to get practice record with id ${id}:`, error);
    return null;
  }
}

// 格式化日期为YYYY-MM-DD
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// 按日期分组练习记录
export function groupRecordsByDate(records: PracticeRecord[]): { [key: string]: PracticeRecord[] } {
  return records.reduce((groups, record) => {
    const date = record.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(record);
    return groups;
  }, {} as { [key: string]: PracticeRecord[] });
}
