import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the default elements on the page (header, logo, listings title, list)', async () => {

  render(<App />);

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  const zooplaLogo = screen.getByTestId('zoopla-logo');
  expect(zooplaLogo).toBeInTheDocument();

  const h2Element = await screen.findByRole('heading');
  await expect(h2Element).toHaveTextContent('Showing 0 properties for sale in');

  const listingsElement = screen.getByTestId('listings');
  expect(listingsElement).toBeInTheDocument();

});