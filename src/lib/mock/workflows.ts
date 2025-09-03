import { ResourceCategory } from './literaryResources';

// 定义工作流步骤类型
export type WorkflowStep = {
  id: string;
  name: string;
  description: string;
  required: boolean;
};

// 定义工作流类型
export interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  isCustom: boolean;
  createdAt: string;
}

// 内置工作流
export const builtInWorkflows: Workflow[] = [
  {
    id: 'classic',
    name: '经典写作流程',
    description: '故事引入→主题分析→自由写作→名家仿写→评价反馈',
    steps: [
      { id: 'story', name: '文学故事', description: '阅读精选文学故事获取灵感', required: true },
      { id: 'theme', name: '主题分析', description: '理解写作主题和要求', required: true },
      { id: 'writing', name: '自由写作', description: '根据主题进行创作', required: true },
      { id: 'imitation', name: '名家仿写', description: '学习模仿文学片段', required: false },
      { id: 'evaluation', name: '评价反馈', description: '获取写作评价和建议', required: true }
    ],
    isCustom: false,
    createdAt: '2025-01-01'
  },
  {
    id: 'quick',
    name: '快速写作',
    description: '主题分析→快速写作→简要评价',
    steps: [
      { id: 'theme', name: '主题分析', description: '理解写作主题和要求', required: true },
      { id: 'writing', name: '快速写作', description: '在限定时间内完成创作', required: true },
      { id: 'evaluation', name: '简要评价', description: '获取核心评价和建议', required: true }
    ],
    isCustom: false,
    createdAt: '2025-01-01'
  },
  {
    id: 'research',
    name: '研究式写作',
    description: '主题分析→资源调研→写作→评价',
    steps: [
      { id: 'theme', name: '主题分析', description: '深入理解写作主题', required: true },
      { id: 'resources', name: '资源调研', description: '查找相关文学资源', required: true },
      { id: 'writing', name: '创作', description: '基于研究进行写作', required: true },
      { id: 'evaluation', name: '专业评价', description: '获取详细的写作评价', required: true }
    ],
    isCustom: false,
    createdAt: '2025-01-01'
  }
];

// 获取用户自定义工作流
export const getUserWorkflows = (): Workflow[] => {
  const savedWorkflows = localStorage.getItem('customWorkflows');
  if (savedWorkflows) {
    try {
      return JSON.parse(savedWorkflows);
    } catch (error) {
      console.error('Failed to parse custom workflows', error);
      return [];
    }
  }
  return [];
};

// 保存用户自定义工作流
export const saveUserWorkflow = (workflow: Workflow): void => {
  const existing = getUserWorkflows();
  const updated = existing.filter(w => w.id !== workflow.id);
  updated.push({
    ...workflow,
    isCustom: true,
    createdAt: new Date().toISOString()
  });
  localStorage.setItem('customWorkflows', JSON.stringify(updated));
};

// 获取所有可用工作流
export const getAllWorkflows = (): Workflow[] => {
  return [...builtInWorkflows, ...getUserWorkflows()];
};

// 获取当前选中的工作流
export const getSelectedWorkflow = (): Workflow => {
  const selectedId = localStorage.getItem('selectedWorkflowId');
  const allWorkflows = getAllWorkflows();
  
  if (selectedId) {
    const selected = allWorkflows.find(w => w.id === selectedId);
    if (selected) return selected;
  }
  
  // 默认返回经典工作流
  return builtInWorkflows[0];
};

// 设置选中的工作流
export const setSelectedWorkflow = (workflowId: string): void => {
  localStorage.setItem('selectedWorkflowId', workflowId);
  
  // 重置当前写作进度，因为工作流变更
  localStorage.removeItem('writingProgress');
};
  