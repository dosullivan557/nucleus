# useFetch 
A custom React hook for making API calls with support for HTTP methods, headers, and request bodies.

## Usage

```tsx
import useFetch from 'path/to/useFetch';

const [data, error, loading] = useFetch(
    'https://api.example.com/data',
    'POST',
    { key: 'value' },
    { 'Content-Type': 'application/json' }
);
```

## Parameters

| Name     | Type                | Default | Description                                 |
|----------|---------------------|---------|---------------------------------------------|
| `url`    | `string`            | —       | The endpoint to fetch data from.            |
| `method` | `'GET' \| 'POST' \| 'PUT' \| 'DELETE' \| 'PATCH'` | `'GET'`  | HTTP method to use.                         |
| `body`   | `any`               | `null`  | Request body (will be JSON-stringified).    |
| `headers`| `HeadersInit`       | `{}`    | Headers to include in the request.          |

## Returns

An array: `[data, error, loading]`
- `data`: The response data from the API.
- `error`: Any error encountered during the fetch.
- `loading`: Boolean indicating if the request is in progress.

## Example

```tsx
const [user, error, loading] = useFetch(
    '/api/user/123',
    'GET',
    null,
    { Authorization: 'Bearer token' }
);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
return <div>{user.name}</div>;
```

## Notes

- The hook uses `useAsyncHook` internally to manage async state.
- The request body is automatically stringified if provided.
- Suitable for simple API calls in React components.
