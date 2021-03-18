// Operatory arytmetyczne

var x = 2;

console.log(7 + x); //dodawanie
console.log(4 - x); // odejmowanie
console.log(5 * x); // mnożenie
console.log(8 / x); // dzielenie
console.log(1 % x); // reszta z dzielenia
 

console.log("5f" + 2); // operator KONKANACJI " + " odnosi sie do Stringów , łączy dwa łańcuchy znaków, ale tylko wtedy jeśli napotka Stringi

console.log("5" * 2); // w tym przypadku liczba " 5" zostaje przekonwertowana ze znaku na liczbę i dochodzi do pomnożenia :)
console.log("4" * "7"); // również dochodzi do przekonwertowania

console.log("ABC" * 3); // błąd "NaN" czyli 'not a number', czyli to nie jest wartość liczbowa, nie można tak mnożyć

console.log((2 + 2) * 2); // zagnieżdżone działania

console.log("x = " + x);

// zwiększanie wartości 'x'
x = x + 5;

console.log("x = " + x);

// Skrócone Operatory Arytmetyczne

x += 8; // czyli dodaj i przypisz do tego co było po lewej stronie
x -= 9; // odejmuje od zmiennej'x' to co postawimy po prawej stronie
x *= 3; //  cyfre w zmiennej mnoży przez tą z prawej strony
x /= 4; //
x %= 2; //
console.log("x = " + x);

// Operator Dodawania i Odejmowania

x += 1; // zwiększy wartość o '1'
console.log("x = " + x);

x++; // zwiększenie wartości o jeden - czyli INKREMENTACJA
console.log("x = " + x);

x--; //zmniejszanie DEKREMENTACJA
console.log("x = " + x);

var y = x++ +2;
console.log("y = " + y);


