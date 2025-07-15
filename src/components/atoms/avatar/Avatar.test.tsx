import Avatar from './Avatar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders initials for full name', () => {
  const { getByText } = render(<Avatar name="Jane Doe" />);
  expect(getByText('JD')).toBeInTheDocument();
});

test('renders single initial for single name', () => {
  const { getByText } = render(<Avatar name="Plato" />);
  expect(getByText('P')).toBeInTheDocument();
});

test('applies background color based on name', () => {
  const { getByText } = render(<Avatar name="Alice Smith" />);
  const avatar = getByText('AS');
  expect(avatar).toHaveStyle('background-color: #FFC107'); // 'A' charCodeAt(0) % 5 === 0
});
