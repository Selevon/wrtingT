import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Workflow } from '@/lib/mock/workflows';
import { useWorkflow } from '@/hooks/useWorkflow';
import { toast } from 'sonner';

// 工作流选择器组件
export default function WorkflowSelector() {
  const { workflows, selectedWorkflow, selectWorkflow, isLoading } = useWorkflow();
  const [showModal, setShowModal] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-4">
        <i className="fa-solid fa-spinner fa-spin text-blue-500 mr-2"></i>
        <span className="text-gray-600 dark:text-gray-400">加载工作流...</span>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          <i className="fa-solid fa-sitemap text-blue-500 mr-2"></i>
          写作工作流
        </h3>
        <button
          onClick={() => setShowModal(true)}
          className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
        >
          选择工作流
        </button>
      </div>

      {/* 当前工作流显示 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white">{selectedWorkflow.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{selectedWorkflow.description}</p>
          </div>
          {selectedWorkflow.isCustom && (
            <span className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
              自定义
            </span>
          )}
        </div>
        
        {/* 工作流步骤指示器 */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {selectedWorkflow.steps.map((step, index) => (
            
            <div key={step.id} className="flex items-center">              
              <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-2 text-xs font-medium">
                {index + 1}
              </div>
              <span className="text-gray-700 dark:text-gray-300">{step.name}</span>
              {index < selectedWorkflow.steps.length - 1 && (
                <i className="fa-solid fa-angle-right text-gray-400 mx-1"></i>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 工作流选择模态框 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">选择工作流</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <i className="fa-solid fa-times"></i>
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                选择适合您的写作流程，或创建自定义工作流
              </p>
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  内置工作流
                </h4>
                {workflows
                  .filter(wf => !wf.isCustom)
                  .map(workflow => (
                    <div 
                      key={workflow.id}
                      onClick={() => {
                        selectWorkflow(workflow.id);
                        setShowModal(false);
                        toast.success(`已选择工作流: ${workflow.name}`);
                      }}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedWorkflow.id === workflow.id 
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 border border-transparent'
                      }`}
                    >
                      <div className="font-medium text-gray-900 dark:text-white mb-1">{workflow.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{workflow.description}</div>
                    </div>
                  ))}
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  自定义工作流
                </h4>
                {workflows
                  .filter(wf => wf.isCustom)
                  .map(workflow => (
                    <div 
                      key={workflow.id}
                      onClick={() => {
                        selectWorkflow(workflow.id);
                        setShowModal(false);
                        toast.success(`已选择工作流: ${workflow.name}`);
                      }}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedWorkflow.id === workflow.id 
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 border border-transparent'
                      }`}
                    >
                      <div className="font-medium text-gray-900 dark:text-white mb-1">{workflow.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{workflow.description}</div>
                    </div>
                  ))}
                
                {/* 创建新工作流按钮 */}
                <button
                  onClick={() => {
                    toast.info('自定义工作流创建功能即将上线，敬请期待！');
                    setShowModal(false);
                  }}
                  className="mt-3 w-full py-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <i className="fa-solid fa-plus mr-1"></i> 创建新工作流
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}