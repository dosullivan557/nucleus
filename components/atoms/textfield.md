# Textfield 
A `Textfield` is a basic input component that allows users to enter and edit text. It supports labels, placeholders, and various input types, making it suitable for forms and data entry interfaces.
## Props

| Name        | Type                                                      | Default   | Description                                      |
|-------------|-----------------------------------------------------------|-----------|--------------------------------------------------|
| `label`     | `string`                                                  | —         | Optional label for the textfield.                |
| `placeholder` | `string`                                                | —         | Placeholder text for the input.                  |
| `value`     | `string`                                                  | —         | Current value of the input.                      |
| `disabled`  | `boolean`                                                 | `false`   | Disables the input if set to `true`.             |
| `onChange`  | `(e: React.ChangeEvent<HTMLInputElement>) => void`        | —         | Callback fired when the input value changes.     |
| `className` | `string`                                                  | —         | Additional CSS classes for the input.            |
| `type`      | `'text'` \| `'password'`                                  | `'text'`  | Type of the input field.                         |

## Example

```tsx
import { Textfield } from '@dosullivan557/nucleus/atoms';

function Example() {
    const [value, setValue] = React.useState('');

    return (
        <Textfield
            label="Username"
            placeholder="Enter your username"
            value={value}
            onChange={e => setValue(e.target.value)}
            type="text"
        />
    );
}
```