/*
const listaDeCompras = []
console.log(listaDeCompras)

listaDeCompras[0] = "Arroz"
listaDeCompras[1] = "Feijão"

console.log(listaDeCompras)
*/


//add to element final array
const elementArray = ["Arroz","Feijão","Sam",15,"Neiva"];

elementArray.push("UltimoItemComPush")

console.log(elementArray)


//add to element first array
elementArray.unshift("Arroz-20")
console.log(elementArray)


///remove to element final
const removeElement = elementArray.pop()
console.log(elementArray)
console.log(removeElement)



//remove first element
firstElement = elementArray.shift()
console.log(firstElement)
console.log(elementArray)

//coppy element array
const coppyElement = elementArray.slice(0,3)
console.log(coppyElement)
console.log(elementArray)

//subsituir element to array
const substituirElement = elementArray.splice(0,5,"Testando Splice")

console.log(substituirElement)
console.log(elementArray)

 
//interação entre array
for (let index =0; index < substituirElement.length; index++){
  const inter = substituirElement[index]
  console.log(inter + " Encontra-se na posição " + index)
}