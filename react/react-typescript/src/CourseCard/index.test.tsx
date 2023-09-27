import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseCard from '.';

test('renders learn react link', () => {
  render(<CourseCard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
