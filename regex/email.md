# Email Validation Utility

This module provides a regular expression and a helper function to validate email addresses against common formatting rules, including domain label restrictions.

---

## Features

- Validates typical email formats (local-part@domain).
- Ensures domain labels do **not** start or end with a hyphen.
- Requires the domain to have at least one dot (`.`).
- Case-insensitive matching.
- Covers most common valid email addresses (not full RFC 5322 compliance).
--- 
## Importing
```js
import { regex } from '@dosullivan557/nucleus';
const { emailRegex, isValidEmail } = regex;
```

## Usage

If you want to use our wrapper function for simplicity:
```js
const email = "email@domain.com";

console.log(isValidEmail(email)); // true
```

Alternatively, you can use the regular expression directly:
```js 
const email = "email@domain.com";

console.log(emailRegex.test(email)); // true

``