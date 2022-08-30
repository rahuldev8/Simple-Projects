//To print the age of user in days

function AgeinDays() {
   var birthyear = prompt("Tell me your Birth Year : ");

   var ageindays = (2022 - birthyear) * 365;

   var h1 = document.createElement("h1");

   var textAnswer = document.createTextNode("You are" + ageindays + " days old....");

   h1.setAttribute("id", "ageindays");

   h1.appendChild(textAnswer);

   document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
   document.getElementById("ageindays").remove();
}
