let profit = 0;
 profit = parseFloat (prompt("Qual seu saldo inicial?"));
let money = 0
let moneyRemove =0

do{
        removeMoney = parseFloat(prompt("Deseja sacar dinheiro? \n1 - Sim \n2 - Não"))
                if(removeMoney !=1 && removeMoney !=2){
                        alert("Opção inválida.")
                }
}
while(removeMoney !=1) {      
                moneyRemove=parseFloat(prompt("Qual valor do saque?"))
                if(profit>=moneyRemove){
                profit -= moneyRemove  
                } else{
                        alert("Seu saldo é insuficiente.")
                }
                removeMoney = parseFloat(prompt("Deseja sacar dinheiro? \n1 - Sim \n2 - Não"))
                if(removeMoney == 2){              
                alert(`Seu saldo atualizado é: \n${profit}`)
}};
        addToMoney = parseFloat (prompt("Deseja adicionar dinheiro?\n1 - Sim \n2 - Não"))
                if(addToMoney !=1 && addToMoney !=2){
                        alert("Opção inválida.")
                }    
                if(addToMoney ==1){
                money=parseFloat(prompt("Qual valor do depósito?"))
                profit +=money
                alert(`Seu saldo atualizado é: \n${profit}`)
                }
alert("Encerrando o SOFTWARE.\nSaldo disponivel: "+profit)
                