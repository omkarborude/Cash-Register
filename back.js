var cash = document.querySelector("#paid-input");
var bill = document.querySelector("#cost_input");
var btncheck = document.querySelector("#checkbtn");
var nofnotes = document.getElementsByClassName("noOfNotes");

var notearray = ['500','100','20','10','5','1'];

var cashamount;
var billamount;
var totalchange;

//getting value of input
cash.addEventListener("change",function(){
    cashamount = cash.value;
})

bill.addEventListener("change",function(){
    billamount = bill.value;
})

btncheck.addEventListener("click",calc);

function calc(){
    var totalchange = cashamount - billamount;
    console.log(billamount,cashamount,totalchange);
    
    if(totalchange < 0 ) {
        alert("You Have to pay More !!");
    } else if(cashamount === billamount){
        alert("Thanku !! You Have Paid Right Amount !");
    } else if(totalchange > 0 ) {
        
        for (i=0; i<=notearray.length; i++){
            while (totalchange >= notearray[i]) {
                var notes = Math.floor(totalchange / notearray[i])
                console.log(`${notes} notes of ${notearray[i]}`)
                nofnotes[i].innerHTML = `${notes}`
                totalchange = totalchange % notearray[i];
            }
        }
        
    }
}