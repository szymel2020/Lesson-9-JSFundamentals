
// Instrukcje skoku

var box = document.getElementById("result");
var box2 = document.getElementById("result2");

// Continue

loop1:
for (var j = 0; j < 3; j++)
	{
		loop2:
		for (var i = 0; i < 10; i++)
			{
				if (i > 5)
					{
						continue loop1;
					}
					// % - to jest dzielenie z resztą
					if (i % 2 == 1) //sprawdzamy czy po podzieleniu przez 2 liczba daje resztę jeden, czyli czy jest nieparzysta
						{
							continue; // instrukcja skoku - działanie instrukcji skoku jest to, aby przejść do wykonywania kolejnego obiegu pętli w której się znajdujemy , bez wykonywania dalszych instrukcji kodu
						}
					box.innerHTML += j + " - " +  i + "<br>";
				}
	}

// Break

top:
for (var j = 0; j < 3; j++)
	{
		inner:
		for (var i = 0; i < 10; i++)
			{
				if (i == 5)
					{
						break top;
					}
				box2.innerHTML += j + " - " +  i + "<br>";
			}
	}

// blok kodu z urzyciem break
skip:
{
	alert("wrning !");
	break skip;
	alert("skip !");
}









