// ===== نصوص (8 إلى 7 kyu) =====

export function reverseWords(str) {
  // كل كلمة تنعكس بمكانها، وترتيب الكلمات ما يتغير
  // 'I love JS' -> 'I evol SJ'
  // TODO
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

export function countVowels(str) {
  // عدد a e i o u بدون حساسية للحالة
  // TODO
  return str.toLowerCase().match(/[aeiou]/g)?.length || 0;
}

export function longestWord(str) {
  // أطول كلمة بالجملة، وإذا تعادلت ترجع الأولى
  // TODO
  return str.split(' ').sort((a, b) => b.length - a.length)[0] || '';
}

export function capitalize(str) {
  // أول حرف من كل كلمة كبير والباقي صغير
  // 'hELLO wORLD' -> 'Hello World'
  // TODO
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function sumDigits(n) {
  // مجموع خانات الرقم، والسالب يُعامل كموجب
  // TODO
  return Math.abs(n).toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
