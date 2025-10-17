import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="relative">
        {/* Main spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>

        {/* Pulsing background glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl animate-pulse"></div>

        {/* Loading text */}
        <div className="mt-6 text-center">
          <div className="text-white/60 text-sm font-medium animate-pulse">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
