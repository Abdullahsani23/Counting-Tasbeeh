var data = 0
function increment(){
    data++
var text = document.getElementById("text").innerText=data
console.log(text);

}

function decrement(){
    data--
    var text =document.getElementById("text").innerText=data
    console.log(text);
}
function reset(){
    data=0
    var text =document.getElementById("text").innerText=data
    console.log(text);
}