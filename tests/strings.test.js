import { describe, test, expect } from 'vitest';
import {
  reverseWords, countVowels, longestWord, capitalize, sumDigits,
} from '../src/strings.js';

describe('reverseWords', () => {
  test('two words', () => expect(reverseWords('hello world')).toBe('olleh dlrow'));
  test('three words', () => expect(reverseWords('I love JS')).toBe('I evol SJ'));
  test('one word', () => expect(reverseWords('a')).toBe('a'));
  test('empty', () => expect(reverseWords('')).toBe(''));
});

describe('countVowels', () => {
  test.each([
    ['hello', 2], ['JavaScript', 3], ['xyz', 0], ['', 0], ['AEIOU', 5],
  ])('countVowels(%j) -> %i', (s, expected) => {
    expect(countVowels(s)).toBe(expected);
  });
});

describe('longestWord', () => {
  test('normal', () => expect(longestWord('I love JavaScript')).toBe('JavaScript'));
  test('tie returns first', () => expect(longestWord('a bb cc')).toBe('bb'));
  test('single word', () => expect(longestWord('hello')).toBe('hello'));
});

describe('capitalize', () => {
  test('mixed case', () => expect(capitalize('hELLO wORLD')).toBe('Hello World'));
  test('empty', () => expect(capitalize('')).toBe(''));
  test('one word', () => expect(capitalize('javascript')).toBe('Javascript'));
});

describe('sumDigits', () => {
  test('positive', () => expect(sumDigits(1234)).toBe(10));
  test('negative', () => expect(sumDigits(-99)).toBe(18));
  test('zero', () => expect(sumDigits(0)).toBe(0));
});
