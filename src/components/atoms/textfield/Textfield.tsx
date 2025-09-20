import styles from './Textfield.module.css';
export interface TextfieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  type?: 'text' | 'password';
  required?: boolean;
  multiline?: boolean;
}

const Textfield: React.FC<TextfieldProps> = ({
  disabled = false,
  value = '',
  onChange,
  placeholder,
  type = 'text',
  required = false,
  multiline =false
}) => {
  const classNames = `${styles.textfield} ${required ? styles.required : ''} ${disabled ? styles.disabled : ''}`;

  if (multiline) {
    return (
      <textarea
        disabled={disabled}
        value={value}
        required={required}
        onChange={onChange}
        className={classNames}
        placeholder={placeholder}
      />
    );
  }

  return (
    <input
      type={type}
      disabled={disabled}
      value={value}
      required={required}
      onChange={onChange}
      className={classNames}
      placeholder={placeholder}
    />
  );

};
export default Textfield;
