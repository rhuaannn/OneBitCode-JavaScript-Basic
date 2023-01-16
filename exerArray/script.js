let fila = [];
let name = "";
let menu = prompt(
"Escolha uma das OPÇÕES: \n 1- Cadastrar Paciente \n 2- Consultar Paciente \n 3- Remover Paciente \n 4- Verificar Disponibilidade \n 5- Sair");      
  
  
while (menu == 1) {
  name = prompt("Digite o nome do paciente?")
    fila.push(name)
      console.log(fila)
        menu = prompt(
          "Escolha uma das OPÇÕES: \n 1- Cadastrar Paciente \n 2- Consultar Paciente \n 3- Remover Paciente \n 4- Verificar Disponibilidade \n 5- Sair");
  switch (menu) {
    case '2':
      alert(`Os pacientes cadastrado são ${fila}`)
      menu = prompt(
        "Escolha uma das OPÇÕES: \n 1- Cadastrar Paciente \n 2- Consultar Paciente \n 3- Remover Paciente \n 4- Verificar Disponibilidade \n 5- Sair");
      break;
    case '3':
      const lastElement = fila.slice(-1)[0]
       fila.pop(name)
        alert(`Paciente removido: ${lastElement}`)
          menu = prompt(
            "Escolha uma das OPÇÕES: \n 1- Cadastrar Paciente \n 2- Consultar Paciente \n 3- Remover Paciente \n 4- Verificar Disponibilidade \n 5- Sair");
      break;
    case '5':

      alert(`Software encerrado!
Os pacientes são: ${fila} `)
break;
         
     
 }};
    
      