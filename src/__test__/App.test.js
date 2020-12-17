import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Home work as expected', async () => {
  render(<App />);
  const title = await screen.findByText(/Ultima busqueda/i);
  expect(title).toBeInTheDocument();
});
