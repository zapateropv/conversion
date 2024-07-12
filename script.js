const display = document.querySelector("#input1");
const button = document.querySelector("#btn1");

const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");



button.addEventListener("click", function (){

try {

    if(input2.checked){
        let result = ((9/5 * display.value ) + 32).toFixed(2)
        document.querySelector(".container-result").textContent = `result: ${result} °F`
      }
      
      else if(input3.checked){
          let result = ((display.value - 32) * 5/9).toFixed(2)
          document.querySelector(".container-result").textContent = `result: ${result} °C`
      }


}

catch(error){

display.value += error
}



})

