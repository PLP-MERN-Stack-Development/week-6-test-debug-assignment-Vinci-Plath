// client/src/tests/integration/sample.integration.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// Example component that fetches data
function FetchComponent() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  return <div>{data ? data.message : 'Loading...'}</div>;
}

describe('FetchComponent Integration', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ message: 'Hello from API' }) })
    );
  });
  afterAll(() => {
    global.fetch.mockRestore();
  });
  it('renders data from API', async () => {
    render(<FetchComponent />);
    await waitFor(() => expect(screen.getByText('Hello from API')).toBeInTheDocument());
  });
}); 