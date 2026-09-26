## 2024-06-25 - Object Instantiation inside Sort Loop Bottleneck
**Learning:** Native `Array.prototype.sort()` is $O(N \log N)$ and will instantiate many objects if constructors like `new Date()` are used inside the comparator callback. This is a common but expensive anti-pattern.
**Action:** When working with ISO-formatted date strings (like `YYYY-MM-DD` or `YYYY-MM-DDTHH:mm:ss.sssZ`), sort them directly via string comparison `a < b ? -1 : a > b ? 1 : 0` rather than converting to Date objects first to vastly improve rendering/sorting times.
