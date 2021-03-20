// PĘTLE

var box = document.getElementById("result");
var box2 = document.getElementById("result2");
var box3 = document.getElementById("result3");

// while

// w nawiasie wstawiamy warunek kontynuacji pętli

var i = 0;

while (i < 10)
		 {
		 box.innerHTML += i + "<br>";
		 i++;
		 }

// Do While
// pętle Do While kończymy średnikiem
// jest to pętla w pewien sposób odwrócona
// pętla Do While zawsze wykona się przynajmniej jeden raz
var j = 0;

do
	{
		box2.innerHTML +=  j + "<br>";
		j++;
	} while (j < 10);

// For
// zmienna ; warunek ; instrukcje które mają się wykonać;

for (var k = 0; k < 10;  k++)
	{
		box3.innerHTML += k + "<br>";
	}





