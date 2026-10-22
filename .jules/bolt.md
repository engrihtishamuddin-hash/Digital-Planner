
## 2024-05-24 - [Avoid re-instantiating Intl formatters and Date objects]
**Learning:** Instantiating `Intl.DateTimeFormat` or `Intl.NumberFormat` inside format functions like `formatMonth` or `formatCurrency` repeatedly (especially within render loops) is a significant performance bottleneck. Similarly, instantiating `new Date()` purely for sorting strict ISO date strings is an expensive overhead compared to basic string comparison.
**Action:** Extract formatters to global constants so they are instantiated only once, and replace `new Date()` sorting with direct lexicographical string comparisons (`<`, `>`) when handling strictly formatted ISO dates like `YYYY-MM-DD`.
