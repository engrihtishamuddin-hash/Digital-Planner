const n = 10000;
const dates = Array.from({length: n}, () => {
    const d = new Date();
    d.setDate(d.getDate() - Math.floor(Math.random() * 1000));
    return { date: d.toISOString().split('T')[0] };
});

const dates1 = [...dates];
const dates2 = [...dates];

console.time('Date instantiation');
dates1.sort((a, b) => new Date(b.date) - new Date(a.date));
console.timeEnd('Date instantiation');

console.time('String comparison');
dates2.sort((a, b) => a.date > b.date ? -1 : (a.date < b.date ? 1 : 0));
console.timeEnd('String comparison');

// verification
let ok = true;
for(let i=0; i<n; i++){
    if(dates1[i].date !== dates2[i].date) {
        ok = false; break;
    }
}
console.log('Results match:', ok);
