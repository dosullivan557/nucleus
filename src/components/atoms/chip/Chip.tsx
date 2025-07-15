import styles from './Chip.module.css';

export interface ChipProps {
  label: string;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ className, label }) => {
  return (
    <div className={`${styles.chip} ${className}`}>
      <span>{label}</span>
    </div>
  );
};

export default Chip;
