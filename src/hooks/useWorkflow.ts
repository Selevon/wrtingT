import { useState, useEffect } from 'react';
import { 
  Workflow, 
  getAllWorkflows, 
  getSelectedWorkflow, 
  setSelectedWorkflow,
  saveUserWorkflow,
  WorkflowStep
} from '@/lib/mock/workflows';

// 自定义工作流钩子
export function useWorkflow() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [selectedWorkflow, setSelectedWorkflowState] = useState<Workflow>(getSelectedWorkflow());
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // 加载工作流数据
  useEffect(() => {
    try {      
      const allWorkflows = getAllWorkflows();
      setWorkflows(allWorkflows);
      
      const savedWorkflow = getSelectedWorkflow();
      setSelectedWorkflowState(savedWorkflow);
      
      // 尝试从本地存储加载写作进度
      const savedProgress = localStorage.getItem('writingProgress');
      if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        setCurrentStepIndex(progress.stepIndex || 0);
      }
    } catch (error) {
      console.error('Failed to load workflows:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 保存当前进度到本地存储
  useEffect(() => {
    if (selectedWorkflow) {
      localStorage.setItem('writingProgress', JSON.stringify({
        workflowId: selectedWorkflow.id,
        stepIndex: currentStepIndex
      }));
    }
  }, [selectedWorkflow.id, currentStepIndex]);

  // 选择工作流
  const selectWorkflow = (workflowId: string) => {
    const workflow = workflows.find(w => w.id === workflowId);
    if (workflow) {
      setSelectedWorkflowState(workflow);
      setSelectedWorkflow(workflowId);
      setCurrentStepIndex(0); // 重置到第一步
    }
  };

  // 创建新工作流
  const createWorkflow = (workflow: Omit<Workflow, 'isCustom' | 'createdAt'>) => {
    saveUserWorkflow(workflow as Workflow);
    // 重新加载工作流列表
    setWorkflows(getAllWorkflows());
  };

  // 获取当前步骤
  const getCurrentStep = () => {
    if (isLoading || !selectedWorkflow || !selectedWorkflow.steps.length) return null;
    return selectedWorkflow.steps[currentStepIndex];
  };

  // 进入下一步
  const nextStep = () => {
    if (currentStepIndex < selectedWorkflow.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      return true;
    }
    return false; // 已经是最后一步
  };

  // 返回上一步
  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      return true;
    }
    return false; // 已经是第一步
  };

  // 跳转到指定步骤
  const goToStep = (stepId: string) => {
    const index = selectedWorkflow.steps.findIndex(step => step.id === stepId);
    if (index >= 0) {
      setCurrentStepIndex(index);
    }
  };

  // 检查步骤是否完成
  const isStepCompleted = (stepIndex: number) => {
    // 在实际应用中，这里会检查该步骤的完成状态
    // 简化实现：假设只有当前步骤和之前的步骤是完成的
    return stepIndex < currentStepIndex;
  };

  return {
    workflows,
    selectedWorkflow,
    currentStepIndex,
    getCurrentStep,
    isLoading,
    selectWorkflow,
    createWorkflow,
    nextStep,
    prevStep,
    goToStep,
    isStepCompleted
  };
}