// 环境变量配置
export const env = {
  // API 配置
  COZE_API_BASE_URL: import.meta.env.VITE_COZE_API_BASE_URL || 'https://space.coze.cn/api/coze_space',
  COZE_API_SIGN: import.meta.env.VITE_COZE_API_SIGN || '4957feaa9e34826be7abc39b1e964e91',
  
  // 应用配置
  APP_NAME: import.meta.env.VITE_APP_NAME || '含英咀华',
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',
  
  // 是否为生产环境
  IS_PRODUCTION: import.meta.env.PROD,
  IS_DEVELOPMENT: import.meta.env.DEV,
} as const;

// 验证必需的环境变量
export const validateEnv = () => {
  const requiredVars = ['VITE_COZE_API_BASE_URL', 'VITE_COZE_API_SIGN'];
  const missing = requiredVars.filter(varName => !import.meta.env[varName]);
  
  if (missing.length > 0 && env.IS_PRODUCTION) {
    console.warn('Missing environment variables:', missing);
  }
};

// 在应用启动时验证环境变量
validateEnv();
