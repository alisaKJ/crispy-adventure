function myFunction() {
    var txt;
    var person = prompt("Please type your favorite song:", "Sweet potato");
    if (person == null || person == "") {
        txt = "Oh.  Well, Just sing in the car to your kids.";
    } else {
        txt = "I like to sing " + person + " too!!";
    }
    document.getElementById("demo").innerHTML = txt;
}

