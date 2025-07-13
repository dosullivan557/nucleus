const emailRegex =
  /^[a-z0-9._%+-]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i;
/**
 * Validates an email address using a regular expression.
 * Note: This covers common patterns, not full RFC compliance.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, otherwise false.
 */
const isValidEmail = (email: string): boolean => emailRegex.test(email);

export { isValidEmail, emailRegex };
