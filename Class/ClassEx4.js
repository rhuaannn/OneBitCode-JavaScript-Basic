class Carro {
    constructor  (marca,cor,gasolinaRestante,consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir (km){
       
        let litros = km / this.consumo;

        this.gasolinaRestante -= litros;

    }
    abastecer (litros){
        this.gasolinaRestante += litros;
    }

}

    let carro = new Carro("Chevrolet","Branca",100,10);

   
    console.log(carro)
    carro.dirigir(200)
    console.log(carro)
    carro.abastecer(10)
    console.log(carro)