import { RomanNumerals } from './helpers';

describe('Test RomanNumerals helper', () => {
  it('RomanNumerals.toRoman should convert integer 5 to roman V', () =>
    expect(RomanNumerals.toRoman(5)).toEqual("V"));
  it('RomanNumerals.toRoman should return false if the integer is more then 3999', () =>
    expect(RomanNumerals.toRoman(4000)).toEqual(false));

  it('RomanNumerals.fromRoman should convert roman number V to integer 5', () =>
    expect(RomanNumerals.fromRoman("V")).toEqual(5));
  it('RomanNumerals.fromRoman should return false if provided roman number is not a valid one', () =>
    expect(RomanNumerals.fromRoman("This is not a valid roman number")).toEqual(false));
  it('RomanNumerals.fromRoman should return false for invalid numbers', () =>
    expect(RomanNumerals.fromRoman("VMMM")).toEqual(false));

  it('RomanNumerals.fromRoman should convert roman number MMV to 2005 integer', () =>
    expect(RomanNumerals.fromRoman("MMV")).toEqual(2005));
  it('RomanNumerals.toRoman should convert integer 2005 to roman number MMV', () =>
    expect(RomanNumerals.toRoman(2005)).toEqual("MMV"));
});
