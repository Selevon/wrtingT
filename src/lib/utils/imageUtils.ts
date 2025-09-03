import { env } from '@/config/env';

/**
 * 生成 Coze API 图片URL
 * @param prompt 图片描述
 * @param imageSize 图片尺寸，默认为 landscape_16_9
 * @returns 完整的图片URL
 */
export const generateImageUrl = (prompt: string, imageSize: string = 'landscape_16_9'): string => {
  const encodedPrompt = encodeURIComponent(prompt);
  return `${env.COZE_API_BASE_URL}/gen_image?image_size=${imageSize}&prompt=${encodedPrompt}&sign=${env.COZE_API_SIGN}`;
};

/**
 * 生成背景图片URL（用于首页）
 */
export const generateBackgroundImageUrl = (): string => {
  return generateImageUrl('Ancient Chinese study with calligraphy and books warm lighting');
};
