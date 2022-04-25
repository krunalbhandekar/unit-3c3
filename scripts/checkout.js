// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let container=document.getElementById("movie")
let arr1=JSON.parse(localStorage.getItem("movie"))
console.log(arr1)
append(arr1)
function append(data){

    container.innerHTML=null
arr1.map((el)=>{

   let div= document.createElement("div")

   let image=document.createElement("img")
   image.src=el.Poster

   let title=document.createElement("p")
   title.innerText=el.Title

   div.append(title,image)
   container.append(div)
})
}
let total;
function money(){
    document.querySelector("p").innerText=null
let no=document.getElementById("number_of_seats").value
console.log(no)

let total= 100*Number(no)

console.log(total)

document.querySelector("p").append(total)

}

let total1=localStorage.getItem("amount")
document.getElementById("mon").innerText=total1


function confirm(){
   

    let bal=Number(total1)
    let seat= document.querySelector("#number_of_seats").value
    var totalprice=100*Number(seat)
    if(bal>totalprice){
        alert("Booking Succesfully")
        let newbal=bal-totalprice
        localStorage.setItem("amount",newbal)
    }
    else{
        alert("Insufficient Balance !")

    }
    document.querySelector("#mon").innerText=total1
}