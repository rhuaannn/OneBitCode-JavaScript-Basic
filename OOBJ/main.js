function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function () {
        console.log("au au au")
    }
    return cachorro
}

let pibull = criarCachorro("PitBull", 4, "preto")

console.log(pibull);
pibull.latir();
