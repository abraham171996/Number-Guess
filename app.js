const input = document.querySelector("#guessInput");
const btn = document.querySelector(".btn");
const respons = document.querySelector("#respons");
const resault = document.querySelector("#resault");

const randomNum = Math.floor(Math.random()*15)+1

btn.addEventListener("click",()=>{
   
    if(randomNum === Number(input.value)){
        respons.textContent = `Your guess is right.Number is ${input.value}`
        
    }
    else if(input.value>15){
        resault.textContent = `Please enter from 1 untill 15 numbers `
    }
    else if(randomNum>input.value){
        respons.textContent = `Your is too low 🤯 `
        resault.textContent = ""
    }
    else if(randomNum<input.value){
        respons.textContent = `Your is too high 😳`
        resault.textContent = ""
    }
})