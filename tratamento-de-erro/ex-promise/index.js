const calculateImcValue = (weight = 85, height = 1.99) => {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(weight / (height ** 2));
    }
  });
};

const table = (weight, height) => {
  calculateImcValue(weight, height)
    .then((imc) => {
      const tableImc = [
        "Abaixo de 18,5: magreza",
        "Entre 18,5 e 24,9: normal",
        "Entre 25 e 29,9: sobrepeso",
        "Entre 30 e 39,9: obesidade",
        "Acima de 40: obesidade grave",
      ];

      if (imc <= 18.5) {
        console.log(tableImc[0]);
      } else if (imc <= 24.9) {
        console.log(tableImc[1]);
      } else if (imc <= 29.9) {
        console.log(tableImc[2]);
      } else if (imc <= 39.9) {
        console.log(tableImc[3]);
      } else {
        console.log(tableImc[4]);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

console.log(`Calculando..${calculateImcValue}`);
table();
