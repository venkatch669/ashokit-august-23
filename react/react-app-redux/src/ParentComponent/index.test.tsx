import React from 'react';
import { render, screen } from '@testing-library/react';
import ParentComponent from './index';

test('renders learn react link', () => {
  render(<ParentComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
