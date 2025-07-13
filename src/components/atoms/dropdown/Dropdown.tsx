import styles from './Dropdown.module.css';
import { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({
  options,
  className = '',
  onChange
}) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className={`${styles.dropdown} ${className}`}
    >
      {options.map((eachOption) => (
        <option className={styles.option} key={eachOption} value={eachOption}>
          {eachOption}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
