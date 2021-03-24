// Funkcje


var result = document.getElementById("result");
	
add(4);
add(3, 2);
add(5, 7, 8);
function add(a, b)
{
	//sprawdzanie jaki typ ma argument 'b', czy nie jest 'undefined'
	if(typeof(b) === "undefined")
		{
			b = 1;
		}
	//result.innerHTML += a + " + " + b + " = " + (a + b) + "<br>";
	
	// dodawanie trzeciego argumentu, który nie jest zadeklarowany w funkcji
	result.innerHTML += a  +  " + " + b + " + " + arguments[2] + " = " + (a + b + arguments[2]) + "<br>";
}


// deklaracja funkcji bez argumentów
function hello()
{
	// zbiór instrukcji
	alert("fhgjhk");
}

//wywołanie funkcji

hello();


// return

function add(a, b)
{
	//return - kończy wykonywanie całej funkcji
	return a + b;
}

var sum = add(5, 5);
result.innerHTML += "Suma = " + sum + "<br>";
alert(add(10, 30));

// rekurencja

// rekurencja wywołuje wewnątrz siebie samą siebie
function silnia(n)
{
	if (n == 1)
		return 1;
	else
		return n * silnia(n - 1);
}

result.innerHTML += "Silnia = " + silnia(9);









