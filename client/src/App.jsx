// client/src/App.jsx
import React, { useState } from 'react';
import Button from './components/Button';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <ErrorBoundary>
      <div>
        <h1>Welcome to the MERN Testing App</h1>
        <Button onClick={() => setClicked(true)}>Click me</Button>
        {clicked && <p data-testid="clicked-msg">Button was clicked!</p>}
      </div>
    </ErrorBoundary>
  );
};

export default App; 