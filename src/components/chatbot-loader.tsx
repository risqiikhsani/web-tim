import React from 'react';

const ChatbotLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-blue-500 mb-2"></div>
        <div className="animate-pulse text-gray-600 text-sm font-medium">
          Thinking...
        </div>
      </div>
    </div>
  );
};

export default ChatbotLoader;