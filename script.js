let button = document.querySelector("#button");
let nextBtn = document.querySelector("#reason_btn")
let lamenessReasons = [];
let currentReasonIndex = 0;

const getPersonsLameness =(person_id)=>{
    let lameness = false;
    lamenessData.People.forEach(person => {
        if(person.person_id === person_id && person.is_lame === 1){
            console.log("TRUE")
            lameness =  true;
        }
    })
    return {lame:lameness, person_id}
}

const getPersonId = (personText) =>{
    let id = 0
    lamenessData.Names.forEach(person => {
        if(person.name.toLowerCase()=== personText.toLowerCase()){
            id = person.person_id 
            return;
        }
    });
    return id
}

const determineLameness=  (person)=> {
    let id = getPersonId(person)
    return getPersonsLameness(id)
}

const getLamenessReasons=(lamePerson)=>{
    lamenessReasons = [];
    lamenessData.LamenessReasons.forEach(reason=>{
        if (reason.person_id === lamePerson){
            lamenessReasons = [...lamenessReasons, reason.lameness_reason]
        }
    })
}

button.addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;
    let determinedLameness = determineLameness(inputText);
    let lamenessDisplay = ""
    let lamenessReasonDisplay = ""
    let reasonTitle = ""
    if (determinedLameness.lame) {
        lamenessDisplay = "You are a lame person";
        getLamenessReasons(determinedLameness.person_id)
        document.getElementById("reason_container").style.display="flex";
        document.getElementById("reason_container").style.justifyContent="space-between"
        reasonTitle = "Reason:"
        if(lamenessReasons.length > 1) {
            document.getElementById("reason_btn").style.display="inline";
        }
        else{
            document.getElementById("reason_btn").style.display="none";
        }
        lamenessReasonDisplay = lamenessReasons[0]
    } else {
        lamenessDisplay = "You are not a lame person";
        document.getElementById("reason_btn").style.display="none";
        reasonTitle = ""

    }
    document.getElementById("output_reason").innerHTML = lamenessReasonDisplay
    document.getElementById("output").innerHTML = lamenessDisplay;
    document.getElementById("reason_title").innerHTML = reasonTitle;
});

nextBtn.addEventListener("click", function(){
    console.log(lamenessReasons)
    let lamenessReasonDisplay = ""
    if(currentReasonIndex + 1 > lamenessReasons.length-1){
        lamenessReasonDisplay = lamenessReasons[0]
        currentReasonIndex = 0
    }
    else{
        lamenessReasonDisplay = lamenessReasons[currentReasonIndex + 1]
        currentReasonIndex ++;
    }
    document.getElementById("output_reason").innerHTML = lamenessReasonDisplay
})