/**
 * Loading Spinner Component
 * Used for lazy-loaded route transitions
 */

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-primary/10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

