
// instrukcje warunkowe

// document.getElementById("result").innerHTML = "hello";

var result = document.getElementById("result");

var x = 5, y = 10;
var age = 15;
var num = -8;

//skrócony zapis warunkowy
// warunek ? wypełni się jeśli jest true : wypełni się jeśli jest false
age >= 35 ? alert("on jest małoletni") : alert("on jest z Kanady")
/*if (age >= 18)
	{
	result.innerHTML = "pełnoletni";	
	}
else //w przeciwnym wypadku
	{
	result.innerHTML = "niepełnoletni";	
	}*/

// zagnieżdżenie funkcji

if (num > 0)
	{
		result.innerHTML = "dodatnia";
	}
	else
		{
			if (num == 0)
				{
					result.innerHTML = "równa 0";
				}
				else
				{
					result.innerHTML = "ujemna"
				}
		}


