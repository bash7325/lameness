let button = document.querySelector("#button");

const getPersonsLameness =(person_id)=>{
    let lameness = false;
    lamenessData.People.forEach(person => {
        if(person.person_id === person_id && person.is_lame === 1){
            console.log("TRUE")
            lameness =  true;
        }
    })
    return lameness
}

const determineLameness=  (person)=> {
    let lameness = false;

    lamenessData.Names.forEach(element => {
        if(element.name.toLowerCase()=== person.toLowerCase()){
            lameness = getPersonsLameness(element.person_id)
        }
    });
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
    document.getElementById("output").innerHTML = lamenessDisplay;
});