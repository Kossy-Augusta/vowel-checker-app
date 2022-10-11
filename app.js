import get from "./src/getElement.js";
import processInput from "./src/processInput.js"

const form = get(".form-control");
const input = get(".input");
const submitBtn = get(".submit-btn");
const clearBtn = get(".clear-btn");
const result = get(".result");

form.addEventListener('submit',(e)=>{
  
  e.preventDefault()
  processInput()
  
  
})

clearBtn.addEventListener('click',()=>{
  input.value=''
  result.textContent=''
})


