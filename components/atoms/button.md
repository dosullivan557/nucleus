# Button

The `Button` component is a reusable UI element for user clicks.

## Props

| Name       | Type                              | Required | Default     | Description                                 |
|------------|-----------------------------------|----------|-------------|---------------------------------------------|
| `children` | `React.ReactNode`                 | Yes      | —           | Content inside the button                   |
| `onClick`  | `() => void`                      | No       | —           | Click event handler                         |
| `className`| `string`                          | No       | —           | Additional CSS classes                      |
| `disabled` | `boolean`                         | No       | `false`     | Disables the button                         |
| `variant`  | `'primary'` \| `'secondary'`      | No       | `'primary'` | Visual style of the button                  |

## Example

```tsx
import { Button } from '@dosullivan557/nucleus/atoms';

<Button
    variant="primary"
    onClick={() => alert('Clicked!')}
>
    Click Me
</Button>
```