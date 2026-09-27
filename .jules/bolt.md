## 2024-09-27 - Fast Date Sorting in JS
**Learning:** Instantiating `Date` objects inside array `.sort()` loops creates massive overhead. ISO date strings (YYYY-MM-DD) natively support string comparison which gives exactly the same sorting order.
**Action:** When sorting arrays by ISO date formats in JavaScript, always use string comparison instead of `new Date(a) - new Date(b)`.
