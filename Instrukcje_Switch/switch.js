
// instrukcje wyboru Switch

var box = document.getElementById("result");

var color = "pink";

// w okrągłych nawiasach Switch zawsze wstawiamy jakąś zmienną
// Switch powinien mieć jeden przypadek
// case = przypadek
// wartość 'case' jest uzależnione od typu zmiennej którą podaliśmy wyżej do instrukcji wyboru
// po dwukropku piszemy co ma się osiągnąć jeśli 'case' osiągnie wartość 'pink'
// w Switch możemy tworzyć kilka przypadków czyli 'case'
// po wykonaniu instrukcji'case' na której nam zależy piszemy słówko 'break' żeby ona się wykonała
// break musi się znajdować w ostatniej linijce
// przypadek domyślny zawsze musi być ostatni 'default'

switch (color)
	{
		case "pink" :
			box.style.backgroundColor = " pink";
			box.style.color = "white";
			break;
		case "green" :
			box.style.backgroundColor = " green";
			box.style.color = "yellow";
			break;
		case "blue" :
			box.style.backgroundColor = " blue";
			box.style.color = "black";
			break;
		default:
			box.style.backgroundColor = "grey";
			box.style.color = "red";
			break;
	}
			
			
			
			
			
			
			
			
			
			
			
			
			