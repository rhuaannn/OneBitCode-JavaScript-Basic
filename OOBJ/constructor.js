class Cachorro{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
    latir(){
        console.log("eu vou latir")
    }
}
Cachorro.prototype.forca = 10;
let viralata = new Cachorro ("Jose",4, "verde");
console.log(viralata.forca)

viralata.latir();