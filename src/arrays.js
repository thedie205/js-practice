// ===== مصفوفات (من التمارين السابقة) =====

export function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

export function removeAll(arr, value) {
  // تحذف كل ظهور للقيمة وتعدّل المصفوفة نفسها (ترجع نفس المصفوفة)
  // TODO
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
    removeAll(arr, value);
  }
  return arr;
}

export function chunk(arr, size) {
  // chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
  // إذا size <= 0 ارمِ Error('Size must be greater than 0')
  // TODO
  if (size <= 0) {
    throw new Error('Size must be greater than 0');
  }
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;

}

export function stats(arr) {
  if (arr.length === 0) {
    return null;
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let evenCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];

    if (arr[i] % 2 === 0) {
      evenCount++;
    }
  }

  const average = parseFloat((sum / arr.length).toFixed(2));

  return { min, max, sum, average, evenCount };
}

export function secondMax(arr) {
  // ثاني أكبر رقم مختلف، و null إذا ما في ثاني
  // [10, 5, 20, 20, 8] -> 10
  // TODO
  if (arr.length < 2) {
    return null;
  }
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax === -Infinity ? null : secondMax;
}

export function rotateRight(arr, k) {
  // نسخة جديدة مدوّرة k خطوة لليمين (k ممكن تكون أكبر من الطول)
  // [1,2,3,4,5], 2 -> [4,5,1,2,3]
  // TODO
  if (arr.length === 0) {
    return [];
  }
  const n = arr.length;
  k = k % n;
  return arr.slice(n - k).concat(arr.slice(0, n - k));
}
