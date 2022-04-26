let button = document.querySelector("#button");
console.log(lamenessData)
const determineLameness=  (person)=> {
    console.log(person)
    console.log(lamenessData)
    let lameness = false;
    if (person.toLowerCase() === "corey" || person.toLowerCase() === "corey post") {
        lameness = true;
    }
    return lameness;
}


button.addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;
   let lameAnswer = determineLameness(inputText);
   let lamenessDisplay = "";
   
    if (lameAnswer) {
        lamenessDisplay = "You are a lame person";
    } else {
        lamenessDisplay = "You are not a lame person";
    }
    console.log(lamenessDisplay);
    document.getElementById("output").innerHTML = lamenessDisplay;
});