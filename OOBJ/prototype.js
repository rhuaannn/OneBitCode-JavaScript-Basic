
function Cachorro (raca,patas,cor){
    this.raca = raca;
    this.patas=patas;
    this.cor=cor;
   

    }
    Cachorro.prototype.uivar = function(){
        console.log("auauaua")
    }

let pit = new Cachorro ("Bil",4,"cinza")

pit.uivar();