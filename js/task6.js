// Порівняти отриманий продукт, якщо такого немає дрдати у potions,
// якщо є, виводимо рядок такий продукт вже є
// якщо ціна не співпадає тоді оновлюємо ціну
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
};

const newProduct = { name: 'Stone skin', price: 520 };
const newProduct2 = { name: 'Skin', price: 320 };

function addProduct(product, sklad) {
  for (const item of sklad.potions) {
    if (item.name === product.name) {
      if (item.price !== product.price) {
        item.price = product.price;
      }
      return `такий продукт вже є`;
    }
  }
  sklad.potions.push(product);
}

addProduct(newProduct2, atTheOldToad);
console.log(atTheOldToad);
