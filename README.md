
# JS Practice (Vitest)

## التثبيت (مرة وحدة)
1. نصّب Node.js (نسخة LTS) من nodejs.org
2. افتح الـ terminal داخل هذا المجلد:
   npm install

## التشغيل
   npm test          # وضع watch: يعيد الاختبارات كل ما تحفظ ملف
   npm run test:run  # تشغيل مرة وحدة

## طريقة الشغل
1. افتح ملف من src/ (مثل src/basics.js) وستجد دوال فاضية فيها TODO.
2. اكتب الحل. الاختبارات بمجلد tests/ تحكم عليه تلقائياً.
3. الأخضر = نجح، الأحمر = فشل (يوريك المتوقع مقابل الفعلي).
4. لا تعدّل ملفات tests/ لتنجح، عدّل حلك.
5. بعد ما تنجح، أعد كتابة الحل بطريقة ثانية (for ثم filter/map/reduce) وتأكد إنها تبقى خضراء.

## التركيز على ملف واحد
   npx vitest basics
   npx vitest strings

## الملفات
src/basics.js      evenOrOdd, positiveSum, doubleAll, countPositives, average, isPalindrome
src/strings.js     reverseWords, countVowels, longestWord, capitalize, sumDigits
src/arrays.js      removeDuplicates, removeAll, chunk, stats, secondMax, rotateRight
src/functions.js   power, maxOf, joinWith, makeMultiplier, createCounter, sumOfOddSquares
