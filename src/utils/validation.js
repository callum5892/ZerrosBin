export const validatePaste = (content) => {
  if (!content || typeof content !== 'string') {
    throw new Error('Content is required and must be a string');
  }
  
  if (content.length > 100000) { // 100KB limit
    throw new Error('Content exceeds maximum length');
  }
  
  return content.trim();
};