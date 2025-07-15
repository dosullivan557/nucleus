import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown';
import '@testing-library/jest-dom';

describe('Dropdown', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const defaultProps: DropdownProps = {
    options,
    onChange: jest.fn()
  };

  it('renders all options', () => {
    render(<Dropdown {...defaultProps} />);
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('calls onChange with the selected value', () => {
    const onChange = jest.fn();
    render(<Dropdown options={options} onChange={onChange} />);
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: options[1] }
    });
    expect(onChange).toHaveBeenCalledWith(options[1]);
  });

  it('applies custom className', () => {
    render(<Dropdown {...defaultProps} className="custom-class" />);
    const select = screen.getByRole('combobox');
    expect(select.className).toContain('custom-class');
  });

  it('renders with empty options', () => {
    render(<Dropdown options={[]} onChange={jest.fn()} />);
    expect(screen.queryAllByRole('option')).toHaveLength(0);
  });

  it('applies option class to each option', () => {
    render(<Dropdown {...defaultProps} />);
    const optionElements = screen.getAllByRole('option');
    optionElements.forEach((option) => {
      expect(option.className).toContain('option');
    });
  });
});
