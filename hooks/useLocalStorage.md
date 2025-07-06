# useLocalStorage 

A React hook for synchronizing state with `localStorage`.

## Usage

```tsx
import useLocalStorage from './useLocalStorage';

function Counter() {
    const [count, setCount] = useLocalStorage<number>('counter', 0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

## API

```ts
const [value, setValue] = useLocalStorage<T>(key: string, initialValue: T);
```

- **key**: The `localStorage` key to use.
- **initialValue**: The initial value if nothing is stored.
- **value**: The current value from `localStorage`.
- **setValue**: Function to update the value (and persist it).

## Notes

- Handles JSON serialization/deserialization.
- Falls back to `initialValue` if `localStorage` is unavailable or data is invalid.
- Updates `localStorage` whenever the value changes.
- Safe for SSR (returns `initialValue` on the server).