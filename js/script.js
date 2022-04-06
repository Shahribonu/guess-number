const inputNum = document.querySelector("#son");
const win = document.querySelector("#win");
const loose = document.querySelector("#loose");
const info = document.querySelector(".infoSpan");
const result = document.querySelector(".result")
const nMarta = document.querySelector(".ushancha");
const player = document.querySelector("#player");
inputNum.focus();
const btn = document.querySelector("#tekshir");
let son = Math.floor(Math.random() * 100) + 1;
console.log(son);
console.log(son);
let count = 10;
let n;

function tekshir() {
    if(inputNum.value == son){
        win.style.display = ("flex");
        
    }
    else if(inputNum.value == ""){
        result.classList.remove("d-none");
        result.innerHTML = "Iltimos son kiriting, bu sizga o`yinchoq emas!";
        inputNum.focus();
        inputNum.value = "";
        return;
    }
    else if(inputNum.value > son && inputNum.value <= 100){
        result.classList.remove("d-none");
        result.innerHTML = "Siz kiritgan son O`ylangan sondan katta!";
    }else if(inputNum.value < son){
        result.classList.remove("d-none");
        result.innerHTML = "Siz kiritgan son O`ylangan sondan kichik!";
    }else if(inputNum.value > 100){
        result.classList.remove("d-none");
        result.innerHTML = "Siz kiritgan son 100 dan katta bu o`yin shartiga to`g`ri kelmaydi!";
    }
    inputNum.value = "";
    inputNum.focus();
    count --;
    n = 10 - count;
    nMarta.innerHTML = n;
    info.innerHTML = (count)
    if(count <= 6)info.style.color = ("#f0932b");
    if(count <= 3)info.style.color = ("#e84118");
    if(count === 0) {
        loose.style.display = ("flex");
    }
}
