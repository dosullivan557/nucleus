# Avatar

An `Avatar` component that displays user initials inside a colored circle. The background color is deterministically chosen based on the user's initials, providing a visually distinct avatar for different names.

## Props

| Name   | Type     | Default | Description                                 |
|--------|----------|---------|---------------------------------------------|
| `name` | `string` | —       | Full name of the user, used to generate initials and avatar color. |

## Details

- The avatar shows one or two initials derived from the `name` prop.
- The background color is selected from a fixed palette based on the first character's Unicode code point.
- If no name is provided, a default color (`#FFC107`) is used.
- Styling is applied via a CSS module (`Avatar.module.css`), which should define the avatar shape, font, and layout.

## Example

```tsx
import Avatar from './Avatar';

function Example() {
  return (
    <>
      <Avatar name="John Doe" />
      <Avatar name="Alice" />
      <Avatar name="" />
    </>
  );
}   