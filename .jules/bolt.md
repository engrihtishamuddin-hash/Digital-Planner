## 2024-05-18 - Intl Formatter Instantiation Bottleneck
**Learning:** Repeatedly instantiating `Intl.DateTimeFormat` and `Intl.NumberFormat` inside rendering loops (like formatting table rows) causes significant overhead. Our benchmark showed a ~120x slowdown (1.68s vs 13.8ms for 10,000 iterations).
**Action:** Always cache `Intl` formatters globally rather than instantiating them on every function call.
