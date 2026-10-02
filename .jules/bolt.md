## 2024-05-30 - Date Sorting
**Learning:** Dates in this project are stored and formatted as strict ISO strings (YYYY-MM-DD). For sorting, direct string comparison (`<`, `>`) is preferred and significantly faster than instantiating Date objects or using `localeCompare`.
**Action:** Use direct string comparison for sorting date strings.
