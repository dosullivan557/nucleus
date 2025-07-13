# Password Validation Utility

This module provides a regular expression and a helper function to validate whether a password is strong based on commonly accepted strength rules.

---

## Features

- Enforces a **minimum length** of 8 characters.
- Requires at least:
  - One **uppercase** letter
  - One **lowercase** letter
  - One **digit**
  - One **special character** from `!@#$%^&*`
- ASCII-safe (no Unicode-specific rules)
- Suitable for most standard web and app password policies

---

## Importing

```js
import { regex } from "@dosullivan557/nucleus";
const { strongPasswordRegex, isStrongPassword } = regex;
```
