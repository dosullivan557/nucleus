import { isStrongPassword } from "./password";

describe("Password Strength Validation", () => {
  const testCases = [
    { password: "Abcdef1!", expected: true },
    { password: "abcdef1!", expected: false }, // missing capital letters
    { password: "ABCDEF1!", expected: false }, // missing lowercase
    { password: "Abcdefgh!", expected: false }, // missing numbers
    { password: "Abcdef12", expected: false }, // missing special letters
    { password: "Ab1!", expected: false }, // too short
    { password: "A1b!A1b!A1b!", expected: true }, // strong password
  ];

  testCases.forEach(({ password, expected }, index) => {
    it(`Test #${index + 1}: "${password}" should be ${expected ? "valid" : "invalid"}`, () => {
      expect(isStrongPassword(password)).toBe(expected);
    });
  });
});
