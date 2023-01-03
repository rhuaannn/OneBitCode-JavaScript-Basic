let name = prompt("Digite seu nome");


if (name == "") {
    alert("Nome é necessário")
    name = prompt("Digite seu nome");
   
}
 let city = prompt("Você visitou alguma cidade? \n1-Sim \n2-Não")
    while (city==2) {
        alert("Você precisa visitar uma cidade.")
        city = prompt("Você visitou alguma cidade? \n1-Sim \n2-Não")
}
let visit =0
let cidade = ''

    while(city==1){
       let cidades = prompt("Qual foi nome da cidade?")
       cidade += "" + cidades + "\n"
        city = prompt("Você visitou alguma cidade? \n1-Sim \n2-Não")
        visit++
        
}


alert(`Seu nome é ${ name } e visitou um total de ${ visit } cidades cujo nomes são: -\n ${ cidade }`)
alert("Software encerrado!")
     
        

       