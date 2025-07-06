# useDebounce 

A React hook for debouncing side effects. It delays invoking a callback until after a specified delay has passed since the last time the dependencies changed.

## Usage

```tsx
import useDebounce from './useDebounce';

function Example({ value }) {
    useDebounce(
        () => {
            // This runs only after `value` has stopped changing for 500ms
            console.log('Debounced value:', value);
        },
        500,
        [value]
    );

    return <input value={value} readOnly />;
}
```

## API

```ts
useDebounce(
    callback: () => void,
    delay: number,
    dependencies: React.DependencyList
): void
```

- **callback**: Function to run after the debounce delay.
- **delay**: Time in milliseconds to wait after the last dependency change.
- **dependencies**: Array of values that trigger the debounce when changed.

## How it works

Internally, `useDebounce` uses a custom `useTimeout` hook to manage the timer. When any dependency changes, the timer resets. The callback runs only after the delay period with no further changes.

## See also

- [`useTimeout`](./useTimeout.md)
- [React Hooks documentation](https://react.dev/reference/react/hooks)