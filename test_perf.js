console.time('fmtMoney unoptimized');
for(let i=0; i<10000; i++) {
  Number(1234.56).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
console.timeEnd('fmtMoney unoptimized');

const decimalFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
console.time('fmtMoney optimized');
for(let i=0; i<10000; i++) {
  decimalFormatter.format(1234.56);
}
console.timeEnd('fmtMoney optimized');


const dates = [];
for(let i=0; i<10000; i++) {
  const y = 2020 + Math.floor(Math.random() * 5);
  const m = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const d = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  dates.push({ date: `${y}-${m}-${d}` });
}

console.time('sort unoptimized');
const sorted1 = [...dates].sort((a, b) => new Date(b.date) - new Date(a.date));
console.timeEnd('sort unoptimized');

console.time('sort optimized');
const sorted2 = [...dates].sort((a, b) => a.date > b.date ? -1 : (a.date < b.date ? 1 : 0));
console.timeEnd('sort optimized');
