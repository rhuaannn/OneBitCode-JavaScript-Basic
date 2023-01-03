class Endereco {
    contador(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    set novaRua (novaRua){
        this.rua=novaRua;
    }
    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}

let endereco = new Endereco("Rua Imperatriz","Buriti","Goiania","Go");

console.log(endereco);

endereco.novaRua = "Tambaqui"
console.log(endereco);

endereco.bairro = "Aquarius";
console.log(endereco);

endereco.cidade = "Aparecida"
console.log(endereco)

endereco.endereco = "Rj"
console.log(endereco)