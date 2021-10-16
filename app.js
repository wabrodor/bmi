const height = document.getElementById("height")
const weight = document.getElementById("weight")
const btn = document.querySelector(".btn")
const resultBmi = document.querySelector(".result-bmi")
const resultColor = document.querySelector(".result-color")
      
const percent = document.querySelector(".progress-bar");

const sec = document.querySelector(".modal")

const replay = document.querySelector(".replay");


btn.addEventListener("click", ()=>{
    if(height.value > 0 && weight.value > 0){
        let heightValue = height.value;
        let weightValue = weight.value;

       let calc = weightValue / (heightValue * heightValue)
let result = (calc * 10000).toFixed(1);
    //    console.log(result.toFixed(1))
setTimeout(()=>{
    percent.textContent = result
    resultBmi.textContent = `your bmi = ${result}`

    
    if(result < 18.5){
        resultColor.textContent =  "UNDER weight"
        resultColor.style.color = "red"
    
    }
    if (result > 18.5) {
     resultColor.textContent =  "Normal Weight"
     resultColor.style.color = "green"
    
    }if(result > 24.9){
     resultColor.textContent =  "over Weight"
     resultColor.style.color = "yellow"
    }
    if(result > 30){
        resultColor.textContent =  "Obese"
        resultColor.style.color = "red"
    }
    
   
},1000)




   

           percent.style.width = result + "%"
           percent.style.transition = "1.2s all ease-in"

           sec.classList.toggle("popup")

        
           return result
    }else{
        alert("height and weight must be a whole number")
        height.value = "";
        weight.value = "";
    }
    result = 0;
})


replay.addEventListener("click", ()=>{
    sec.classList.remove("popup")
    result = 0;
    percent.textContent = "";
    percent.style.width = 0 + "%"
    resultColor.textContent = ""
    height.value = ""
    weight.value = ""
})
