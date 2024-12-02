let formsubbmit = document.getElementById("cal-app")
let inputhere = document.getElementById("inputhere")
let lastresult = document.getElementById("lastresult")


let FirstNumber;
secNumber = 0

function onclickbtns() {
    let seven = document.getElementById("seven")
    let four = document.getElementById("four")
    let clearinput = document.getElementById("clearinput")
    let value = 0
    console.log(value);
    clearinput.addEventListener("click" , () =>{
        inputhere.textContent = 0
    })
    seven.addEventListener("click" , () =>{
        value7 = 7
        inputhere.textContent = value7
        console.log(value7);
    })
    four.addEventListener("click" , () =>{
        inputhere.textContent = value4
        console.log(value4);
    })
}
onclickbtns()

