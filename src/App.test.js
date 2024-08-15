import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // getByText- it will search for test learn react in App.js if found test passes otherwise failed
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test takes 2 arguments
// 1. description of the test.
// 2.Anonymous function
