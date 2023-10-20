import React from 'react';
import { render, screen } from '@testing-library/react';
import ChildComponent from '.';

test('renders learn react link', () => {
  render(<ChildComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
