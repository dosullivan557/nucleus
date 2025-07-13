# Chip

A `Chip` is a small, interactive element used to display information, make selections, or trigger actions. It is commonly used for tags, filters, or user input.

## Props

| Name         | Type                                                      | Default   | Description                                         |
|--------------|-----------------------------------------------------------|-----------|-----------------------------------------------------|
| `label`      | `string`                                                  | —         | Text displayed inside the chip.                     |
| `className`  | `string`                                                  | —         | Additional CSS classes for the chip.                |

## Example

```tsx
import { Chip } from '@dosullivan557/nucleus/atoms';
import styles from './Example.module.css';

function Example() {
    const [selected, setSelected] = React.useState(false);

    return (
        <Chip
            label="Example Chip"
            className={styles.customClass}
        />
    );
}
```