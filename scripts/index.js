// Store the wallet amount to your local storage with key "amount"
let total = localStorage.getItem("amount")||0
 document.getElementById("mon").innerText=total

function add() {

    let rup = document.getElementById("amount").value
localStorage.setItem("amount",(+total)+(+rup))
     total = localStorage.getItem("amount")
   

    document.getElementById("mon").innerText=total

}
