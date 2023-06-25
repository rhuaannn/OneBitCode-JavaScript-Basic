function execute() {
  return new Promise((resolve, reject) => {
      console.log('A promise está sendo executada.')
      setTimeout(() => {
          console.log('Resolvendo a promise...')
          resolve(2+2*5*4/4)
      }, 3 * 1000)
  })
}

const p = execute()

 p.then((result) =>{
  console.log(`O resultado é ${result}` )
 })

