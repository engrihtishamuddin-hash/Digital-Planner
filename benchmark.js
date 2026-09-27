const n = 10000;
const expenseData = [];
for (let i = 0; i < n; i++) {
  const year = 2020 + Math.floor(Math.random() * 5);
  const month = String(1 + Math.floor(Math.random() * 12)).padStart(2, '0');
  const day = String(1 + Math.floor(Math.random() * 28)).padStart(2, '0');
  expenseData.push({ date: `${year}-${month}-${day}` });
}

console.time('Date object sort');
const sorted1 = [...expenseData].sort((a, b) => new Date(b.date) - new Date(a.date));
console.timeEnd('Date object sort');

console.time('String comparison sort');
const sorted2 = [...expenseData].sort((a, b) => (a.date < b.date ? 1 : (a.date > b.date ? -1 : 0)));
console.timeEnd('String comparison sort');
