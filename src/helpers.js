import { ROMAN_INTEGER_MAP } from './constants';

export const RomanNumerals = {
  fromRoman: romanNumber => {
    let	str = romanNumber.toUpperCase(),
      validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
      token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
      num = 0, m;

    //  If provided roman number is not valid, then don't do anything
    if (!(str && validator.test(str))) return false;

    //  If provided roman number is valid, then do the calculation...
    while (m = token.exec(str))
      num += ROMAN_INTEGER_MAP[m[0]];
    return num;
  },
  toRoman: value => {
    let roman = '';

    //  If provided integer is not in between 0 - 3999, then don't do anything
    if(value > 3999) return false;

    //  If provided integer is in between 0 - 3999, then do the calculation...
    while (value > 0) {
      for (let r in ROMAN_INTEGER_MAP) {
        if (ROMAN_INTEGER_MAP[r] <= value) {
          roman += r;
          value -= ROMAN_INTEGER_MAP[r];
          break;
        }
      }
    }
    return roman;
  }
};
