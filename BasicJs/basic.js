const array = [
  { name: "Iphone", price: 5000, quantity: 0 },
  { name: "Samsung", price: 2000, quantity: 10 },
  { name: "Moto", price: 5500, quantity: 20 },
  { name: "Relogio", price: 5000, quantity: 25 },
];

//metodo find retorna true ou false. Quando a logica for vdd ele retorna o elemento
const find = array.find((product) => {
  console.log(product.name === "Iphone");
  return true;
});
console.log(find);

//retorna a posição do array onde a condição é true.
const findIndex = array.findIndex((product) => product.name === "Moto");
console.log(findIndex);
console.log("Product:", array[findIndex]);

const some = array.some((product) => product.price < 1000);
console.log({ some });

//verifica se todos os intens do array retorna true
const every = array.every((product) => product.price > 1000);
console.log({ every });

//map retorna o array com as modificações que queira fazer
const map = array.map((product) => {
  return {
    ...product,
    subtotal: product.quantity * product.price,
  };
});
console.log({ map });

//filtra um novo array com a condição vdd
const filter = array.filter((product) => {
  return product.quantity > 1;
});
console.log({ filter });

const reduce = array.reduce((acc, current) => {
  return acc + current.price * current.quantity;
}, 0);
console.log({ reduce });
