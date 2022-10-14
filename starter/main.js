


// ESS

// console.log("send me your aza")
// alert(writeup)
// var writeup = "i don dey code since"
// console.log(hamburgerdiv)
// console.log (document)

var hamburgerdiv = document.querySelector(".hamburger");
var mobilelinks = document.querySelector(".mobile-linkholder");
var backdrop = document.querySelector(".backdrop");

function talkanddo() {
    hamburgerdiv.classList.toggle("shopburger")
    mobilelinks.classList.toggle("show-mobile-linkholder")
    backdrop.classList.toggle("show-backdrop")    
}