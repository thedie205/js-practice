// ===== دوال (#057 إلى #078) =====

export function power(base, exp = 2) {
  let result = 1;

  for (let i = 0; i < exp; i += 1) {
    result *= base;
  }

  return result;
}

export function maxOf(...nums) {
  let max = null;

  for (let i = 0; i < nums.length; i += 1) {
    if (max === null || nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

export function joinWith(separator, ...words) {
  let result = '';

  for (let i = 0; i < words.length; i += 1) {
    result += words[i];

    if (i < words.length - 1) {
      result += separator;
    }
  }

  return result;
}

export function makeMultiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

export function createCounter(start = 0) {
  let value = start;

  return {
    increment: () => { value += 1; },
    decrement: () => { value -= 1; },
    getValue: () => value,
  };
}

export function sumOfOddSquares(nums) {
  return nums
    .filter(num => num % 2 !== 0)
    .map(num => num * num)
    .reduce((sum, square) => sum + square, 0);
}