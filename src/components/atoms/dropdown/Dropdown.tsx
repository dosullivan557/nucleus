import styles from './Dropdown.module.css';
import { countries, getEmojiFlag } from 'countries-list';
import type { TCountryCode } from 'countries-list';
import { v4 as uuid } from 'uuid';

export interface DropdownProps {
  options?: string[];
  type?: DropdownType;
  className?: string;
  label?: string;
  onChange: (value: string) => void;
}

// Add a type-level check to ensure at least one of 'options' or 'type' is provided
type RequireOptionsOrType<
  T extends { options?: string[]; type?: DropdownType }
> =
  | (T & { options: string[]; type?: never })
  | (T & { options?: never; type: DropdownType });

export type StrictDropdownProps = RequireOptionsOrType<DropdownProps>;

export enum DropdownType {
  country = 'country'
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  className = '',
  onChange,
  type,
  label
}) => {
  const buildOptions = () => {
    if (options) {
      return options.map((eachOption) => (
        <option className={styles.option} key={eachOption} value={eachOption}>
          {eachOption}
        </option>
      ));
    }
    if (!type) {
      return null;
    }
    switch (type) {
      case DropdownType.country:
        return Object.keys(countries).map((countryCode) => {
          const code = countryCode as TCountryCode;
          const country = countries[code];
          const eachOption = `${getEmojiFlag(code)} ${country.name}`;
          return (
            <option
              className={styles.option}
              key={countryCode}
              value={eachOption}
            >
              {eachOption}
            </option>
          );
        });
    }
  };
  const labelText =
    label ||
    (type === DropdownType.country ? 'Select Country' : 'Select Option');
  const selectId = `dropdown-${type || 'custom'}-${uuid()}`; // Unique ID for accessibility

  return (
    <>
      <label className={styles.label} htmlFor={selectId}>
        {labelText}
      </label>
      <select
        id={selectId}
        onChange={(e) => onChange(e.target.value)}
        className={`${styles.dropdown} ${className}`}
      >
        {buildOptions()}
      </select>
    </>
  );
};

export default Dropdown;
