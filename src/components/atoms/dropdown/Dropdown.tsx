import styles from "./Dropdown.module.css";
import { DropdownProps, DropdownType } from "./Dropdown.types";
import { countries, getEmojiFlag } from "countries-list";
import type { TContinentCode, TCountryCode } from "countries-list";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  className = "",
  onChange,
  type,
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
            <option className={styles.option} key={countryCode} value={eachOption}>
              {eachOption}
            </option>
          );
        });
    }
  };
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className={`${styles.dropdown} ${className}`}
    >
      {buildOptions()}
    </select>
  );
};

export default Dropdown;
