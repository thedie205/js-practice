import { describe, test, expect } from 'vitest';
import {
  power, maxOf, joinWith, makeMultiplier, createCounter, sumOfOddSquares,
} from '../src/functions.js';

describe('power', () => {
  test('default exponent is 2', () => expect(power(3)).toBe(9));
  test('explicit exponent', () => expect(power(2, 5)).toBe(32));
  test('exponent 0', () => expect(power(5, 0)).toBe(1));
});

describe('maxOf', () => {
  test('normal', () => expect(maxOf(3, 9, 2)).toBe(9));
  test('negatives', () => expect(maxOf(-5, -2, -9)).toBe(-2));
  test('no args', () => expect(maxOf()).toBeNull());
});

describe('joinWith', () => {
  test('normal', () => expect(joinWith('-', 'a', 'b', 'c')).toBe('a-b-c'));
  test('single word', () => expect(joinWith('-', 'a')).toBe('a'));
  test('no words', () => expect(joinWith('-')).toBe(''));
});

describe('makeMultiplier', () => {
  test('double and triple', () => {
    const double = makeMultiplier(2);
    const triple = makeMultiplier(3);
    expect(double(5)).toBe(10);
    expect(triple(5)).toBe(15);
  });
});

describe('createCounter', () => {
  test('starts at 0 by default', () => {
    expect(createCounter().getValue()).toBe(0);
  });
  test('increment and decrement', () => {
    const c = createCounter(10);
    c.increment();
    c.increment();
    c.decrement();
    expect(c.getValue()).toBe(11);
  });
  test('counters are independent', () => {
    const a = createCounter();
    const b = createCounter();
    a.increment();
    expect(b.getValue()).toBe(0);
  });
});

describe('sumOfOddSquares', () => {
  test('1..10', () => {
    expect(sumOfOddSquares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(165);
  });
  test('empty', () => expect(sumOfOddSquares([])).toBe(0));
  test('only evens', () => expect(sumOfOddSquares([2, 4])).toBe(0));
});
