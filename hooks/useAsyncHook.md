# useAsyncHook
A React hook for handling asynchronous operations with built-in loading and error state management.

## Usage

```tsx
import useAsyncHook from './useAsyncHook';

const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

function MyComponent() {
    const [data, error, isLoading] = useAsyncHook(fetchData);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

## API

```ts
const [result, error, isLoading] = useAsyncHook<T, E>(func: () => Promise<T>);
```

- `result`: The resolved value from the async function, or `null` if not yet resolved.
- `error`: The error thrown by the async function, or `null` if no error.
- `isLoading`: Boolean indicating if the async function is still running.

## Example

```tsx
const fetchUser = async () => {
    const res = await fetch('/api/user');
    if (!res.ok) throw new Error('Failed to fetch user');
    return res.json();
};

const [user, error, loading] = useAsyncHook(fetchUser);
```