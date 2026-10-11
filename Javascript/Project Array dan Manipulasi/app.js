const rawInput = "  riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap  ";


const result = rawInput
  .trim()
  .split(",")
  .map(name => name.trim().toLowerCase())
  .join(" | ");

console.log(result);


const products = [
  { name: 'Laptop', price: 1000, active: true },
  { name: 'Mouse', price: 20, active: false },
  { name: 'Keyboard', price: 50, active: true }
];

const activeProducts = products.filter(p => p.active);


const productNames = activeProducts.map(p => p.name.toUpperCase());


const totalPrice = activeProducts.reduce((sum, p) => sum + p.price, 0);

console.log(activeProducts); 
console.log(productNames);   
console.log(totalPrice);     
