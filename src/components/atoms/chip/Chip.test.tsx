import Chip from './Chip';

import { render } from '@testing-library/react';

test('renders Chip with label', () => {
  const { getByText } = render(<Chip label="Test Chip" />);
  expect(getByText('Test Chip')).toBeInTheDocument();
});