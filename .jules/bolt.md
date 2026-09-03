## 2024-05-18 - Caching Intl.NumberFormat and Date Parsing Optimization
**Learning:** Instantiating `Intl.NumberFormat` and calling `toLocaleString()` is highly expensive and blocking inside rendering loops. Also, sorting dates stored as strings (YYYY-MM-DD) via direct comparison avoids costly `new Date()` allocations.
**Action:** When working on lists that require string formatted amounts or dates, always cache `Intl.NumberFormat` in a closure or upper scope and sort date formats using direct string comparison instead of `new Date()`.
