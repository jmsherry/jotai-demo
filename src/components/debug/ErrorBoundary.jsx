import React from "react";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function ErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      // onReset={() => setExplode(false)}
      // resetKeys={[explode]}
    >
      {children}
    </ErrorBoundary>
  );
}

export default ErrorBoundary;