## 2024-05-18 - ISO Date String Sorting
**Learning:** Instantiating `new Date(string)` inside an array `.sort()` function incurs significant overhead. For arrays containing strictly formatted ISO string dates (YYYY-MM-DD), they sort chronologically just by using standard string comparison `<` and `>`.
**Action:** Always prefer string comparison over Date instantiation for sorting large lists of ISO-formatted dates in JavaScript, as it avoids object allocation overhead inside the O(N log N) loop.
