console.log("sem intervalo")
setTimeout(() => {
  console.log("tres segundos")
}, 3000);


let seconds = 0 
const intervalId = setInterval(() => {
  seconds += 3

  console.log(`O valor é ${seconds}`)
  if (seconds > 20) {
    clearInterval(intervalId)
    console.log("encerrando")
  }
}, 3000);