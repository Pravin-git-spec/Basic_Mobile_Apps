var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelbtn = document.getElementById("cancel-popup")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var container = document.querySelector(".container")
var addbtn = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauth = document.getElementById("book-author-input")
var bookdes = document.getElementById("book-description-input")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
                     <h5>${bookauth.value}</h5>
                     <p>${bookdes.value}</p>
                     <button onclick="del(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

function del(event){
    event.target.parentElement.remove()
}