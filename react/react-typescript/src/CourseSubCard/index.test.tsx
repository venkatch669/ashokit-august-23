import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseSubCard from '.';

test('renders learn react link', () => {
  render(<CourseSubCard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
