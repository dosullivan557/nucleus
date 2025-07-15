import { isIpv4, isIpv6, isValidIp, getIpType } from './ip';

describe('IP Validation Utilities', () => {
  describe('isIpv4', () => {
    it('should return true for valid IPv4 addresses', () => {
      expect(isIpv4('192.168.1.1')).toBe(true);
      expect(isIpv4('0.0.0.0')).toBe(true);
      expect(isIpv4('255.255.255.255')).toBe(true);
    });

    it('should return false for invalid IPv4 addresses', () => {
      expect(isIpv4('256.256.256.256')).toBe(false);
      expect(isIpv4('192.168.1')).toBe(false);
      expect(isIpv4('abc.def.ghi.jkl')).toBe(false);
    });
  });

  describe('isIpv6', () => {
    it('should return true for valid IPv6 addresses', () => {
      expect(isIpv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true);
      expect(isIpv6('::1')).toBe(true);
      expect(isIpv6('2001:db8::1')).toBe(true);
    });

    it('should return false for invalid IPv6 addresses', () => {
      expect(isIpv6('2001:::1')).toBe(false); // too many colons
      expect(isIpv6('gibberish')).toBe(false);
      expect(isIpv6('12345::abcd')).toBe(false); // segment too long
    });
  });

  describe('isValidIp', () => {
    it('should return true for valid IPv4 and IPv6 addresses', () => {
      expect(isValidIp('8.8.8.8')).toBe(true);
      expect(isValidIp('::1')).toBe(true);
    });

    it('should return false for invalid addresses', () => {
      expect(isValidIp('999.999.999.999')).toBe(false);
      expect(isValidIp('this-is-not-an-ip')).toBe(false);
    });
  });

  describe('getIpType', () => {
    it('should return "IPv4" for valid IPv4 addresses', () => {
      expect(getIpType('10.0.0.1')).toBe('IPv4');
    });

    it('should return "IPv6" for valid IPv6 addresses', () => {
      expect(getIpType('fe80::1ff:fe23:4567:890a')).toBe('IPv6');
    });

    it('should throw an error for invalid IPs', () => {
      expect(() => getIpType('invalid-ip')).toThrow(
        'Invalid IP address format'
      );
    });
  });
});
