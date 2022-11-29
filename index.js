const btnAdd = document.querySelector(".add")
const btnRemove = document.querySelector(".remove")
const numEl = document.getElementById("num")
let count = 0;
btnAdd.addEventListener("click",()=>{
    count++;
    numEl.innerHTML = count;
    if (count>0) {
        numEl.style.color = "green";
    }
})

btnRemove.addEventListener("click", ()=>{
    count--;
    numEl.innerHTML = count;
    if(count<0){
        numEl.style.color = "red"
    }
})