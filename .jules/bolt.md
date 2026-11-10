## YYYY-MM-DD - [Optimize Intl formatters and Date sorting]
**Learning:** Repeated instantiation of Intl formatters (Intl.NumberFormat) is a significant performance bottleneck. Also, instantiating Date objects during sorting is much slower than direct string comparison for ISO dates.
**Action:** Cache explicit formatter instances globally instead of using .toLocaleString() or creating new instances in functions. Prefer direct string comparison (<, >) for sorting ISO formatted dates.
