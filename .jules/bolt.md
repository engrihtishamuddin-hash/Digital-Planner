## 2024-05-15 - Overhead of Intl Formatters
**Learning:** Repeated instantiation of Intl formatters or implicit instantiation via .toLocaleString() creates a significant performance bottleneck in vanilla JS rendering loops.
**Action:** Always cache explicit Intl formatters globally.
