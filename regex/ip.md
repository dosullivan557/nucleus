# IP Address Validation Utility

This module provides regular expressions and helper functions to validate IPv4 and IPv6 addresses.

---

## Features

- Validates IPv4 addresses with standard decimal dot notation.
- Validates IPv6 addresses with full and compressed notation.
- Supports IPv6 shorthand forms like `::1` and `2001:db8::1`.
- Differentiates between IPv4 and IPv6 formats.
- Throws errors on invalid IP formats when type is requested.

---

## Importing

```ts
import { regex } from '@dosullivan557/nucleus';
const {isIpv4, isIpv6, isValidIp, getIpType } = regex

```


## Usage 


```ts
console.log(isIpv4('192.168.1.1'));       // true
console.log(isIpv6('2001:db8::1'));       // true
console.log(isValidIp('::1'));             // true
console.log(isValidIp('999.999.999.999')); // false

// Determine the IP version or throw on invalid:
try {
  console.log(getIpType('2001:db8::1'));  // 'IPv6'
  console.log(getIpType('192.168.1.1'));  // 'IPv4'
  console.log(getIpType('invalid-ip'));   // throws Error
} catch (e) {
  console.error(e.message);
}
```
