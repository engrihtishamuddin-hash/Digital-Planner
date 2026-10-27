## 2026-10-27 - Formatters and Date Sort
**Learning:** Instantiating `Intl` formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) on every call or map iteration causes performance overhead. Furthermore, sorting ISO string dates using `new Date()` is slower than direct string comparison (`a.date < b.date`).
**Action:** Always cache `Intl` instances at the module scope when used repeatedly (e.g., table rendering or helper functions), and prefer lexicographical string comparisons for YYYY-MM-DD string sorting.
