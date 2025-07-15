import styles from './Button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  variant = 'primary'
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.defaultButtonStyles} ${styles[`buttonVariant_${variant}`]} ${disabled ? styles.isDisabled : ''} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
