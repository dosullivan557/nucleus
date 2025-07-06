# useTimeout 

A React hook for managing timeouts declaratively.

## Usage

```tsx
import useTimeout from './useTimeout';

function Example() {
    const { reset, clear } = useTimeout(() => {
        alert('Timeout triggered!');
    }, 2000);

    return (
        <div>
            <button onClick={reset}>Reset Timeout</button>
            <button onClick={clear}>Clear Timeout</button>
        </div>
    );
}
```

## API

### `useTimeout(callback, delay)`

- **callback**: `() => void`  
    Function to execute after the timeout.

- **delay**: `number`  
    Timeout duration in milliseconds.

#### Returns

- **reset**: `() => void`  
    Resets and restarts the timeout.

- **clear**: `() => void`  
    Clears the timeout.

## Details

- The timeout is automatically set on mount and cleaned up on unmount.
- The latest callback is always used.
- Useful for debouncing or delaying actions in React components.