import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('Search from could be use', async () => {
  render(<App />);
  const form = screen.getByRole('form')
  
  fireEvent.change(screen.getByRole("textbox"), {target:  {value: "Matrix"}})
  fireEvent.submit(form)

  const title = await screen.findByText('Matrix')

  expect(title).toBeVisible()
});
