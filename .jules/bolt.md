## 2024-05-18 - YYYY-MM-DD Date Sorting Bottleneck
**Learning:** Instantiating `Date` objects inside a sort comparator in JavaScript introduces significant garbage collection and CPU overhead when dealing with large arrays of ISO formatted strings (YYYY-MM-DD). Because this format inherently allows lexical string sorting, parsing into `Date` is entirely redundant.
**Action:** When dates are known to strictly follow `YYYY-MM-DD` (or ISO 8601 subset) formats, use direct string comparison (`a < b`) instead of `new Date()`, saving performance without sacrificing accuracy.
