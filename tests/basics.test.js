import { describe, test, expect } from 'vitest';
import {
  evenOrOdd, positiveSum, doubleAll, countPositives, average, isPalindrome,
} from '../src/basics.js';

describe('evenOrOdd', () => {
  test.each([
    [2, 'Even'], [7, 'Odd'], [0, 'Even'], [-3, 'Odd'], [-4, 'Even'],
  ])('evenOrOdd(%i) -> %s', (n, expected) => {
    expect(evenOrOdd(n)).toBe(expected);
  });
});

describe('positiveSum', () => {
  test('normal', () => expect(positiveSum([1, -2, 3, 4, -5])).toBe(8));
  test('all positive', () => expect(positiveSum([1, 2, 3, 4, 5])).toBe(15));
  test('all negative', () => expect(positiveSum([-1, -2, -3])).toBe(0));
  test('empty', () => expect(positiveSum([])).toBe(0));
});

describe('doubleAll', () => {
  test('normal', () => expect(doubleAll([1, 2, 3])).toEqual([2, 4, 6]));
  test('empty', () => expect(doubleAll([])).toEqual([]));
  test('does not mutate', () => {
    const original = [1, 2, 3];
    doubleAll(original);
    expect(original).toEqual([1, 2, 3]);
  });
});

describe('countPositives', () => {
  test('normal', () => expect(countPositives([1, -2, 3, 0])).toBe(2));
  test('none', () => expect(countPositives([-1, -2])).toBe(0));
  test('empty', () => expect(countPositives([])).toBe(0));
});

describe('average', () => {
  test('normal', () => expect(average([2, 4, 6])).toBe(4));
  test('decimal', () => expect(average([1, 2])).toBeCloseTo(1.5));
  test('empty', () => expect(average([])).toBe(0));
  test('single', () => expect(average([5])).toBe(5));
});

describe('isPalindrome', () => {
  test('case insensitive', () => expect(isPalindrome('Level')).toBe(true));
  test('not palindrome', () => expect(isPalindrome('hello')).toBe(false));
  test('empty', () => expect(isPalindrome('')).toBe(true));
  test('single char', () => expect(isPalindrome('a')).toBe(true));
});
