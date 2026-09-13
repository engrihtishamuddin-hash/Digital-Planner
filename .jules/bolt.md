## 2024-05-24 - Sorting Date strings
**Learning:** Using `localeCompare` to sort dates represented as strict ISO strings (YYYY-MM-DD) is faster than instantiating `Date` objects, but using direct string comparison (`b.date > a.date ? 1 : b.date < a.date ? -1 : 0`) is up to 15x faster than instantiating dates, and significantly faster than `localeCompare` which applies localization rules.
**Action:** When sorting strict ISO date strings in vanilla JS, use direct string comparison instead of `Date` parsing or `localeCompare`.
