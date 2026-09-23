## 2024-10-24 - Fast ISO Date Sorting
**Learning:** In contexts where dates are guaranteed to be valid ISO strings (YYYY-MM-DD), instantiating `Date` objects inside array sort comparators causes massive unnecessary overhead.
**Action:** Always prefer direct string comparison `(a < b ? -1 : a > b ? 1 : 0)` over `new Date(a) - new Date(b)` when handling valid ISO strings.
