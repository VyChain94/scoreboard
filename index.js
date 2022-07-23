let sumA=0
let sumH=0
const home =document.getElementById("homeScore")
const away =document.getElementById("guestScore")

// ***incrementing count here!!***
function addOneH(){

    sumH+=1
    home.textContent=sumH
    }
function addOneA(){

    sumA+=1
     away.textContent=sumA
    }

function addTwoH(){

    sumH+=2
    home.textContent=sumH
    }
function addTwoA(){

    sumA+=2
    away.textContent=sumA
    }
function addThreeH(){

    sumH+=3
    home.textContent=sumH
    }
function addThreeA(){

    sumA+=3
    away.textContent=sumA
    }


// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation 
// Render the result of the calculation through the DOM