import React from 'react';
import { render, screen } from '@testing-library/react';
import TrainingCard from '.';

test('renders learn react link', () => {
  render(<TrainingCard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
