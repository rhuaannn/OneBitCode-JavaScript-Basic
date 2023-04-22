const apiCall = new Promise((resolve,reject)=>{
  //console.log('dentro da promises')
  setTimeout(() => {
   // resolve('Sucesso!')
   reject('Erro!')
    
  }, 2000);
})
// .then não trava seu código enquanto aguardar a promise.
apiCall
.then((resposta)=>{
  console.log(resposta)
})
.catch((erro)=>{
  console.log(erro)
})

//asunc await fica travado até resolve a promise.
 async function run(){

  const resposta = await apiCall;
  console.log(resposta)
}

run()