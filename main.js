let click = document.getElementById("click");
let clickReturn = document.getElementById("return");
let counter = document.getElementById("counter");
let demo = document.getElementById("demo");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");

let count = 0;
let isSelected = false; 

click.onclick = function () {
    if (isSelected) {
        count++;
        counter.textContent = count;
    } else {
        alert("يرجى اختيار الذكر اولا");
    }
};

clickReturn.onclick = function () {
    count = 0;
    counter.textContent = count;
};

function selectText(message) {
    demo.innerHTML = message;
    count = 0;
    counter.textContent = count;
    isSelected = true;
}

button1.onclick = function () { selectText("الحمدلله"); }
button2.onclick = function () { selectText("أستغفر الله"); }
button3.onclick = function () { selectText("الله أكبر"); }
button4.onclick = function () { selectText("لا إله إلا الله"); }
button5.onclick = function () { selectText("سبحان الله وبحمده"); }
button6.onclick = function () { selectText("سبحان الله العظيم"); }
button7.onclick = function () { selectText("لا حول ولا قوة إلا بالله"); }
button8.onclick = function () { selectText("لا إله إلا أنت سبحانك إني كنت من الظالمين"); }
button9.onclick = function () { selectText("اللهم صل وسلم وبارك على نبينا محمد"); }
