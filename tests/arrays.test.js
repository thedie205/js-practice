import { describe, test, expect } from 'vitest';
import {
  removeDuplicates, removeAll, chunk, stats, secondMax, rotateRight,
} from '../src/arrays.js';

describe('removeDuplicates', () => {
  test('normal', () => expect(removeDuplicates([1, 2, 2, 3, 1])).toEqual([1, 2, 3]));
  test('empty', () => expect(removeDuplicates([])).toEqual([]));
  test('does not mutate', () => {
    const original = [1, 1, 2];
    removeDuplicates(original);
    expect(original).toEqual([1, 1, 2]);
  });
});

describe('removeAll', () => {
  test('consecutive duplicates', () => {
    const arr = [1, 1, 2, 1, 3, 1];
    removeAll(arr, 1);
    expect(arr).toEqual([2, 3]);
  });
  test('value not found', () => {
    const arr = ['a', 'b'];
    removeAll(arr, 'z');
    expect(arr).toEqual(['a', 'b']);
  });
  test('empty', () => {
    const arr = [];
    removeAll(arr, 1);
    expect(arr).toEqual([]);
  });
});

describe('chunk', () => {
  test('normal', () => expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]));
  test('size bigger than length', () => expect(chunk([7, 8, 9], 5)).toEqual([[7, 8, 9]]));
  test('empty', () => expect(chunk([], 2)).toEqual([]));
  test('size 0 throws', () => {
    expect(() => chunk([1, 2], 0)).toThrow('Size must be greater than 0');
  });
  test('negative size throws', () => {
    expect(() => chunk([1, 2], -1)).toThrow();
  });
  test('two calls are independent', () => {
    chunk([1, 2, 3], 1);
    expect(chunk([7, 8, 9], 3)).toEqual([[7, 8, 9]]);
  });
});

describe('stats', () => {
  test('normal', () => {
    expect(stats([4, 9, 2, 7, 1, 9])).toEqual({
      min: 1, max: 9, sum: 32, average: 5.33, evenCount: 2,
    });
  });
  test('single', () => {
    expect(stats([5])).toEqual({ min: 5, max: 5, sum: 5, average: 5, evenCount: 0 });
  });
  test('empty returns null', () => expect(stats([])).toBeNull());
});

describe('secondMax', () => {
  test('with duplicates of max', () => expect(secondMax([10, 5, 20, 20, 8])).toBe(10));
  test('all equal', () => expect(secondMax([5, 5, 5])).toBeNull());
  test('single', () => expect(secondMax([3])).toBeNull());
  test('does not mutate', () => {
    const original = [3, 1, 2];
    secondMax(original);
    expect(original).toEqual([3, 1, 2]);
  });
});

describe('rotateRight', () => {
  test('normal', () => expect(rotateRight([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]));
  test('k bigger than length', () => expect(rotateRight([1, 2, 3], 4)).toEqual([3, 1, 2]));
  test('k = 0', () => expect(rotateRight([1, 2, 3], 0)).toEqual([1, 2, 3]));
  test('empty', () => expect(rotateRight([], 3)).toEqual([]));
  test('does not mutate', () => {
    const original = [1, 2, 3];
    rotateRight(original, 1);
    expect(original).toEqual([1, 2, 3]);
  });
});
