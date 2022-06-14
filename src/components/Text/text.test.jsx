import { render, screen } from '@testing-library/react';
import { Text } from './index';

test('renders text in component', () => {
  render(<Text text="learn react" />);
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
