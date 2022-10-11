import get from "./getElement.js";

const form = get(".form-control");
const input = get(".input");
const submitBtn = get(".submit-btn");
const result = get(".result");

const processInput= ()=>{
  if(!input.value)return result.textContent='please enter a value'
  const value= input.value
  const array= Array.from(value.toLowerCase())
  // convert input value to array
  const newArray= array.filter((item)=>{
    const letters="aeiou".includes(item)
    return letters

  })
  
  if(newArray.length===0){
    result.textContent='no vowel found!!'
  }
  else if(newArray.length===1){
    result.textContent=`${newArray.length} vowel found`}
  else{
    result.textContent=`${newArray.length} vowels found`}

  
}

export default processInput