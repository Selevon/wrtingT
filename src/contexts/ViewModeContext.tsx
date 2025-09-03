import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 定义视图模式类型
type ViewMode = 'mobile' | 'desktop';

// 定义Context类型
interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isMobile: boolean;
  toggleViewMode: () => void;
}

// 创建Context
const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

// Context Provider组件
interface ViewModeProviderProps {
  children: ReactNode;
}

export function ViewModeProvider({ children }: ViewModeProviderProps) {
  // 检测设备类型
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // 初始化时检测设备
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });
  
  // 视图模式状态
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    // 从本地存储获取保存的视图模式，没有则根据设备类型设置
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('viewMode') as ViewMode;
      if (savedMode) return savedMode;
      return window.innerWidth < 768 ? 'mobile' : 'desktop';
    }
    return 'desktop';
  });

  // 监听窗口大小变化，更新isMobile状态
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 保存视图模式到本地存储
  useEffect(() => {
    localStorage.setItem('viewMode', viewMode);
  }, [viewMode]);

  // 切换视图模式
  const toggleViewMode = () => {
    setViewMode(prev => prev === 'mobile' ? 'desktop' : 'mobile');
  };

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode, isMobile, toggleViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

// 自定义Hook，方便组件使用Context
export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (context === undefined) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
}