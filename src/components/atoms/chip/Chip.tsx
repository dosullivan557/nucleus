import styles from './Chip.module.css';
import { ChipProps } from './Chip.types';
const Chip: React.FC<ChipProps> = ({ className, label }) => {
  return (
    <div className={`${styles.chip} ${className}`}>
      <span>{label}</span>
    </div>
  );
};

export default Chip;
