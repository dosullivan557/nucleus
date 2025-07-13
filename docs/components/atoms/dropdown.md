# Dropdown

A `Dropdown` is a select input used to choose one option from a list. It supports either a predefined array of options or a dynamic list of countries with emoji flags.

## Props

| Name        | Type                      | Default | Description                                                                          |
| ----------- | ------------------------- | ------- | ------------------------------------------------------------------------------------ |
| `options`   | `string[]`                | —       | Array of string options to display. Required if `type` is not provided.              |
| `type`      | `DropdownType`            | —       | Specifies a preset dropdown, e.g., `country`. Required if `options` is not provided. |
| `className` | `string`                  | `''`    | Additional CSS classes for the dropdown element.                                     |
| `onChange`  | `(value: string) => void` | —       | Callback triggered when the selected option changes.                                 |

> **Note:** At least one of `options` or `type` must be provided. This is enforced at the type level with `StrictDropdownProps`.

## Example

### Custom fields 
```tsx
import { Dropdown, DropdownType } from "@dosullivan557/nucleus/atoms";
import styles from "./Example.module.css";

function Example() {
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <Dropdown
      options={["Option 1", "Option 2", "Option 3"]}
      className={styles.customDropdown}
      onChange={handleSelect}
    />
  );
}
```

### Predefined Content ( country )
```tsx
import { Dropdown, DropdownType } from "@dosullivan557/nucleus/atoms";
import styles from "./Example.module.css";

function Example() {
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <Dropdown
      type={DropdownType.country}
      className={styles.customDropdown}
      onChange={handleSelect}
    />
  );
}
```

## Dropdown types

This is a list of predefined options that can be used.

| Name      | Description                                                                               |
| --------- | ----------------------------------------------------------------------------------------- |
| `country` | `Predefiend list of countries to be used. This will have the country flag emoji and name` |
