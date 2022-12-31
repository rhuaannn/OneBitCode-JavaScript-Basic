let name = prompt("Digite seu nome");

while (name == "") {
    alert("Nome é necessário")
    name = prompt("Digite seu nome");
   
}
 

let city = prompt("Você já visitou alguma cidade?\n 1: Sim \n 2: Nao");
if (city ==2) {
    alert("Precisa visitar alguma cidade")
}

city = prompt("Você já visitou alguma cidade?\n 1: Sim \n 2: Nao");

while(city ==2){
    //alert("Precisa visitar alguma cidade")
    city =  prompt("Você já visitou alguma cidade?\n 1: Sim \n 2: Nao");
}

let visit =""


    
while (city == 1) {
   
    city =  prompt("Você já visitou alguma cidade?\n 1: Sim \n 2: Nao");
    visit++  
}
alert(`Seu nome é ${ name } e visitou um total de ${ visit } cidades`)
alert("Software encerrado!")
     
        

       