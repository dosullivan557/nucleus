import { isValidEmail } from './email';

describe('Email Validation', () => {
  const testCases = [
    { email: '', expected: false },
    { email: 'plainaddress', expected: false },
    { email: '@missingusername.com', expected: false },
    { email: 'username@.com', expected: false },
    { email: 'username@domain', expected: false },
    { email: 'username@domain.', expected: false },
    { email: 'username@domain.c', expected: false },
    { email: 'username@domain.com', expected: true },
    { email: 'user.name@domain.com', expected: true },
    { email: 'user_name@domain.com', expected: true },
    { email: 'username@sub.domain.com', expected: true },
    { email: 'username+tag@domain.com', expected: true },
    { email: 'username@domain.co.uk', expected: true },
    { email: 'username@domain..com', expected: false },
    { email: 'username@-domain.com', expected: false },
    { email: 'username@domain-.com', expected: false },
    { email: 'username@domain.com.', expected: false },
    { email: 'username@.domain.com', expected: false },
    { email: 'user name@domain.com', expected: false },
    { email: 'username@domain.com ', expected: false }
  ];

  testCases.forEach(({ email, expected }) => {
    it(`should validate "${email}" as ${expected}`, () => {
      expect(isValidEmail(email)).toBe(expected);
    });
  });
});
