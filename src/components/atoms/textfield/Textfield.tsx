import styles from './Textfield.module.css';
export interface TextfieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: 'text' | 'password';
}

const Textfield: React.FC<TextfieldProps> = ({
  disabled = false,
  value = '',
  onChange,
  placeholder,
  type = 'text'
}) => {
  return (
    <input
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className={`${styles.textfield} ${disabled && styles.disabled}`}
      placeholder={placeholder}
    />
  );
};
export default Textfield;
