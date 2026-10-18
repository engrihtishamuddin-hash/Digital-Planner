## 2024-10-24 - Cached Intl formatters
**Learning:** Re-instantiation of `Intl.NumberFormat` and `Intl.DateTimeFormat` on every function call was very slow.
**Action:** Cache these objects globally. We measured a drop from ~760ms for 10000 format calls down to ~12ms.
