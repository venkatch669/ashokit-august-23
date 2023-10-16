import React from 'react';
import { render, screen } from '@testing-library/react';
import NameComponent from '.';

test('renders learn react link', () => {
  render(<NameComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
