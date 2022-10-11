const getElement=(selection)=>{
 const element= document.querySelector(selection)
 if(element){
  return element
 }
 throw new Error(`There is no element called ${selection}`)
}

export default getElement