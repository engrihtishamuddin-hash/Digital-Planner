## 2026-10-26 - Formatters vs Inline `.toLocaleString()`
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` or using `.toLocaleString()` and `.toLocaleDateString()` implicitly inside frequent loops (like formatting currency and dates in a large transaction list) is a significant hidden performance drain in vanilla JS, as each invocation internally recreates the formatting rules object.
**Action:** When I encounter generic formatting methods within loops or frequent rendering cycles, I will explicitly extract them into a shared, globally cached `Intl.*Format` instance that can be safely reused.

## 2026-10-26 - Native Date instantiation in tight loops
**Learning:** The previous implementation used `new Date()` inside `.sort()` to convert ISO strings into comparable values, causing `O(n log n)` allocations of the heavy `Date` object every time an array was sorted, dragging performance down as transaction lists grew.
**Action:** If dates are formatted strictly as ISO strings (`YYYY-MM-DD` or full ISO), rely on direct lexicographical string comparison (`<` or `>`) for sorting logic to completely bypass object allocation overhead.
