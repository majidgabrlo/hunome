import React from 'react';
import { render, screen } from '@testing-library/react';
import Field from './Field';

test('Field Component props', () => {
  render(<Field title="Name" value="Roger Waters" />);
  const valueElement = screen.getByTestId('field-value')
  const titleElement = screen.getByTestId('field-title')

  expect(valueElement.textContent).toBe('Roger Waters')
  expect(titleElement.textContent).toContain('Name')
  
});
