## 2026-10-03 - Optimization of Number formatting and Date sorting
**Learning:** The project relies on frequently iterating over numbers and displaying currency, and iterating over and sorting ISO date strings. It instantiated new `Intl.NumberFormat` instances each time and parsed `Date` objects on each sort comparison which is extremely slow.
**Action:** Next time, cache `Intl.NumberFormat` and use direct string comparisons (`<, >`) for sorting strict ISO date strings.
