// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let movies = document.getElementById("movies")

let arr= JSON.parse(localStorage.getItem("movie")) || []

let id;
async function search() {
    try {
        let search = document.getElementById("search").value;
        let res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=caa49a1c`)
        let data = await res.json()
        console.log(data.Search)
        return data.Search
    }
    catch (err) {
        console.log(err)
    }
}


function append(data) {
    data.forEach(function (el) {
        let image = document.createElement("img")
        image.src = el.Poster

let idiv=document.createElement("div")
idiv.append(image)

        let name = document.createElement("p")
        name.innerText = el.Title

        let btn = document.createElement("button")
        btn.innerText = "book now"
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){
            book(el)
        })

        let div = document.createElement("div")
        div.append(name, idiv,btn)

        movies.append(div)
    })

    function book(el){
arr.push(el)
window.location.href="checkout.html"
localStorage.setItem("movie",JSON.stringify(arr))
    }
}


async function main(){
    let data=await search()
    if (data==undefined){
        return false
    }
    console.log(data)
    append(data)
}

function debounce(func,time){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func()
    },time)
}


let total=localStorage.getItem("amount")
document.getElementById("mon").innerText=total