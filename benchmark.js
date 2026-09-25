const n = 10000;
const expenseData = [];
for(let i = 0; i < n; i++) {
  const y = 2020 + Math.floor(Math.random() * 10);
  const m = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const d = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  expenseData.push({ date: `${y}-${m}-${d}` });
}

console.time('Date instantiation');
[...expenseData].sort((a, b) => new Date(b.date) - new Date(a.date));
console.timeEnd('Date instantiation');

console.time('String comparison');
[...expenseData].sort((a, b) => (a.date < b.date ? 1 : (a.date > b.date ? -1 : 0)));
console.timeEnd('String comparison');
