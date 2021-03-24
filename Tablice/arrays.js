
// Tablice

var result = document.getElementById("result");

var tab = new Array("Poniedziałek", "Wtorek", "Środa");
result.innerHTML += tab[0] + "<br>";
// dadanie kolejnego 'indexu' do tablicy
tab[3] = "czwartek";
tab[4] = "piątek";
tab[5] = "sobota";
result.innerHTML += tab[3] + "<br>";
tab[6] = "niedziela";
result.innerHTML += tab.length + "<br>";

console.log(tab);

result.innerHTML += "--------<br>"
// wyświetlanie wszystkich elementów tablicy za pomocą 'pętli'

for (var i = 0; i  <  tab.length; i++ )
	{
		result.innerHTML +=  tab[i]  +  "<br>";
	}

// inny sposób do wyświetlania wszystkich elementów tablicy
tab.forEach(x  =>  console.log(x));

// inny sposób deklarowania tablicy, bez wartości indexów, a jedynie z liczbą posiadanych 'indexów'
// można też zadeklarować pustą tablicę bez indexów
// w nawiasie okrągłym jest ilość elementów które tablica będzie posiadała
var tab2 = new Array(3);
tab2[0] = 10;
tab2[1] = true;
tab2[2] = "javascript";
console.log(tab2);

// trzeci sposób na deklarowanie tablicy

var tab3  =  ["wiosna", "lato", "jesień", "zima"];
console.log(tab3);

// funkcja " CONCAT()"   do pierwszej tablicy dokleja elementy drugiej tablisy, działa jako suma
// poniżej połączono trzy tablice  tab - tab2 - tab3
var tab4 = tab.concat(tab2).concat(tab3);
console.log(tab4);





