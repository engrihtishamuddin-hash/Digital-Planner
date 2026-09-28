const n = 10000;
const data = Array.from({length: n}, () => ({date: '2023-10-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}));

console.time('Date object sort');
const sorted1 = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
console.timeEnd('Date object sort');

console.time('String comparison sort localeCompare');
const sorted3 = [...data].sort((a, b) => b.date.localeCompare(a.date));
console.timeEnd('String comparison sort localeCompare');

console.time('String comparison sort');
const sorted2 = [...data].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
console.timeEnd('String comparison sort');
