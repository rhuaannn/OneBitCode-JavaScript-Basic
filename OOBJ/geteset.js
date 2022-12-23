class Cachorro {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;

    }
    latir(){
        console.log("latir")
    }
    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    }
}
    let pastor = new Cachorro('verde', 'sem cor');
    console.log(pastor)

    pastor.setCor = "amarelo";

        console.log(pastor.getCor)

console.log(pastor.raca)