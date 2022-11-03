<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
=======
import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
>>>>>>> origin/main
import App from './App';

test('renders learn react link', () => {
  render(<App />);
<<<<<<< HEAD
  const linkElement = screen.getByText(/learn react/i);
=======
  const linkElement = screen.getByText(/learn chakra/i);
>>>>>>> origin/main
  expect(linkElement).toBeInTheDocument();
});
