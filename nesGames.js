var games = ["Super Mario Bros.", "Mega Man", "The Legend of Zelda", "Battletoads"];

var text = "<ul>";
var i;

for  (i = 0; i < games.length; i++)
{
  text += "<li>" + games[i] + "</li>"
}

document.getElementById("nesGames").innerHTML = text;
