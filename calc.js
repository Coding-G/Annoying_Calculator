let input = ""
let input1 = ""
let input2 = ""
let type = ""
let firstNumber = 0
const inputBox = document.getElementById("inputBox")
const btn1 = document.getElementById("1")
const btn2 = document.getElementById("2")
const btn3 = document.getElementById("3")
const btn4 = document.getElementById("4")
const btn5 = document.getElementById("5")
const btn6 = document.getElementById("6")
const btn7 = document.getElementById("7")
const btn8 = document.getElementById("8")
const btn9 = document.getElementById("9")
const btn0 = document.getElementById("0")
const btnTimes = document.getElementById("x")
const btnDivide = document.getElementById("/")
const btnPlus = document.getElementById("+")
const btnMinus = document.getElementById("-")
const btnC = document.getElementById("c")
const btnAnswer = document.getElementById("Answer")

btn1.addEventListener("click", function() {
    input += "1"
    input1 += "1"
    input2 += "1"
    updateInputBox();
})
btn2.addEventListener("click", function() {
    input += "2"
    input1 += "2"
    input2 += "2"
    updateInputBox();
})
btn3.addEventListener("click", function() {
    input += "3"
    input1 += "3"
    input2 += "3"
    updateInputBox();
})
btn4.addEventListener("click", function() {
    input += "4"
    input1 += "4"
    input2 += "4"
    updateInputBox();
})
btn5.addEventListener("click", function() {
    input += "5"
    input1 += "5"
    input2 += "5"
    updateInputBox();
})
btn6.addEventListener("click", function() {
    input += "6"
    input1 += "6"
    input2 += "6"
    updateInputBox();
})
btn7.addEventListener("click", function() {
    input += "7"
    input1 += "7"
    input2 += "7"
    updateInputBox();
})
btn8.addEventListener("click", function() {
    input += "8"
    input1 += "8"
    input2 += "8"
    updateInputBox();
})
btn9.addEventListener("click", function() {
    input += "9"
    input1 += "9"
    input2 += "9"
    updateInputBox();
})
btn0.addEventListener("click", function() {
    input += "0"
    input1 += "0"
    input2 += "0"
    updateInputBox();
})



btnTimes.addEventListener("click", function () {
    input += " × "
    firstNumber = parseInt(input1, 10)
    input2 = ""
    type = "times"
    updateInputBox();
})
btnDivide.addEventListener("click", function () {
    input += " ÷ "
    firstNumber = parseInt(input1, 10)
    input2 = ""
    updateInputBox();
    type = "divide"
})
btnPlus.addEventListener("click", function () {
    input += " + "
    firstNumber = parseInt(input1, 10)
    input2 = ""
    updateInputBox();
    console.log(input1.value)
    type = "plus"
})
btnMinus.addEventListener("click", function () {
    input += " − "
    firstNumber = parseInt(input1, 10)
    input2 = ""
    updateInputBox();
    type = "minus"
})
btnC.addEventListener("click", function () {
    input = "";
    input1 = "";
    input2 = "";
    i = 5;
    firstNumber = 0;
    updateInputBox();

})
function updateInputBox() {
    console.log(input)
    inputBox.textContent = input
}
let i = 0
btnAnswer.addEventListener("click", function () {
    if (i === 0){
        getToWork();
    }
})
function getToWork() {
    alert("Why are you so lazy? Just work it out.");
    alert("If you are quick enough, you'll get your prize.");
    i = 1
    btnAnswer.addEventListener("click", function() {
        let max = 1000;
        let yValue = Math.floor(Math.random() * (max + 1));
        let xValue = Math.floor(Math.random() * (max + 1));
        moveButton(xValue, yValue);
        i += 1
        console.log(i)
        if (i === 6){
            alert("There you go!")
            workOutAnswer(input1, input2)
        }
    })
}
function moveButton(x, y) {
    console.log("Move")
    btnAnswer.style.left = x + "px";
    btnAnswer.style.top = y + "px";
    console.log(i)
}

function workOutAnswer(n1, n2) {
    input2 = parseInt(input2, 10);
    input = ""
    if (type === "plus"){
        input = firstNumber + input2
    }else if(type === "minus"){
        input = firstNumber - input2
    }else if(type === "times"){
        input = firstNumber * input2
    }else if(type === "divide"){
        input = firstNumber / input2
    }else{
        input = ""
    }
    updateInputBox();
}
