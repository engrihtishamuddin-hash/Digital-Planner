## 2024-05-24 - JS Date Instantiation Bottleneck
**Learning:** Instantiating `Date` objects in JS sort comparators (`new Date(str)`) is significantly slower (up to 20x) than direct string comparison when sorting arrays of dates stored as ISO strings (`YYYY-MM-DD`).
**Action:** When sorting standard ISO date strings in the frontend, always use lexicographical string comparison rather than parsing dates.
