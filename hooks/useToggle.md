# useToggle 

A React hook for toggling a boolean value.

## Usage

```tsx
import useToggle from './useToggle';

function Example() {
    const [isOn, toggleIsOn] = useToggle();

    return (
        <div>
            <p>Status: {isOn ? 'On' : 'Off'}</p>
            <button onClick={toggleIsOn}>Toggle</button>
        </div>
    );
}
```

## API

```ts
const [value, toggle] = useToggle(defaultValue?: boolean);
```

- `defaultValue` (optional): The initial boolean value. Defaults to `false`.
- `value`: The current boolean state.
- `toggle`: A function to toggle the state.

## Example

```tsx
const [open, toggleOpen] = useToggle(true);

// open === true
toggleOpen();
// open === false
```