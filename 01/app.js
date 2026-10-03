
/* rozwiązanie z pętlą for */

const x = parseInt(prompt("Podaj liczbę!"));

if (x < 1 || x > 9 || Number.isNaN(x)) {
    console.log("Liczba poza zakresem 1-9!");
} else {

    for (let i = 1; i <= 9; i++) {
        console.log(`${x} x ${i} = ${x * i}`)
    }
}


/* rozwiązanie z pętlą while  */

const a = parseInt(prompt("Podaj podstawę!"));
const n = parseInt(prompt("Podaj wykładnik!"));

if (a < 1 || a > 9 || Number.isNaN(a) || n < 1 || n > 9 || Number.isNaN(n)) {
    console.log("Podstawa lub wykładnik poza zakresem 1-9!");
} else {

    let j = 1;
    let result = "";

    while (j <= n) {
        result += `${a} * `;
        j++;
    }

    console.log(result.slice(0, -2) + `= ${a ** n}`);
}