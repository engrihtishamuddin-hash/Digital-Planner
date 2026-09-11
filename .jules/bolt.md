## 2026-09-11 - [Optimize Expense Sorting]
**Learning:** Instantiating Date objects repeatedly inside a sort comparator is a common, unnecessary bottleneck when dealing with ISO 8601 formatted date strings.
**Action:** Use localeCompare for string comparison when dates are strictly in ISO string format (YYYY-MM-DD) for a quick optimization with zero risk.
