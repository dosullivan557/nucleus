/**
 * Regular expression for validating strong passwords.
 *
 * Requirements:
 * - At least 8 characters
 * - At least one lowercase letter
 * - At least one uppercase letter
 * - At least one digit
 * - At least one special character (!@#$%^&*)
 */
const strongPasswordRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

/**
 * Check if password is strong.
 * @param password - The password to validate.
 * @returns Returns true if the password is strong, otherwise false.
 */
function isStrongPassword(password: string): boolean {
  return strongPasswordRegex.test(password);
}

export { strongPasswordRegex, isStrongPassword };
