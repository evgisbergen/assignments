/* WHILE LOOP
let colors = ['yellow', 'blue', 'red', 'orange'];
var i = 0;
while (i < 4)
    console.log(colors[i++]);
*/

/* FOR LOOP
let colors = ['yellow', 'blue', 'red', 'orange'];
for (i = 0; i <= colors.length; i++) {
    console.log(colors[i]);
}
*/

// ARRAY forEACH METHOD //
let colors = ['yellow', 'blue', 'red', 'orange'];
colors.forEach(element => console.log(element));

/*vragen
1. 4
2. 2
3. minder foutgevoelig. forEach is makkelijker leesbaar omdat je verwijzingen meteeen aangegeven waar het over gaat
4. via de for in manier
*/
const object = { a: 1, b: 2, c: 3, d: 4, E: 5 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}
