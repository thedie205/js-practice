// ===== المجموعة 1: أساسيات (8 kyu) =====
// اكتب الحل داخل كل دالة. لا تغيّر أسماء الدوال ولا كلمة export.
// قبل كل حلقة اكتب تعليق: أول قيمة؟ آخر قيمة؟ الخطوة؟

export function evenOrOdd(n) {
  // 'Even' للزوجي و 'Odd' للفردي (انتبه للسالب والصفر)
  // TODO
  return n % 2 === 0 ? 'Even' : 'Odd';
}

export function positiveSum(arr) {
  // مجموع الأرقام الموجبة فقط، والفاضية ترجع 0
  // TODO
  let sum = 0;
  if (!arr || arr.length === 0) {
    return 0;
  }
  arr.filter(num => num > 0).forEach(num => sum += num);
  return sum;
}

export function doubleAll(arr) {
  // مصفوفة جديدة كل رقم مضروب بـ 2 (بدون تعديل الأصلية)
  // TODO
  if (!arr || arr.length === 0) {
    return [];
  }
  return arr.map(num => num * 2);
}

export function countPositives(arr) {
  // كم رقم موجب (الصفر مو موجب)
  // TODO
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.filter(num => num > 0).length;
}

export function average(arr) {
  // المتوسط، و 0 للمصفوفة الفاضية
  // TODO
  let avg = 0;
  if(!arr || arr.length === 0) {
    return 0;
  }
  avg = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  return avg;
}

export function isPalindrome(str) {
  // true إذا النص يقرأ نفسه من الطرفين، بدون حساسية للحالة
  // TODO
  let normalizedStr = str.toLowerCase();
  let reversedStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reversedStr;
}
