function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

const products = [
    new Product(1, "iPhone 15", 25000000, 10, "Phone", true),
    new Product(2, "Samsung S23", 22000000, 0, "Phone", true),
    new Product(3, "Tai nghe Sony", 3000000, 5, "Accessories", true),
    new Product(4, "Chuột Logitech", 1500000, 3, "Accessories", false),
    new Product(5, "Laptop Dell", 30000000, 2, "Laptop", true),
    new Product(6, "Bàn phím cơ", 2000000, 0, "Accessories", true)
];

const output = document.getElementById("output");

const namePriceList = products.map(p => ({ name: p.name, price: p.price }));
const inStock = products.filter(p => p.quantity > 0);
const hasExpensive = products.some(p => p.price > 30000000);
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable);
const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);

let forOfResult = "";
for (const p of products) {
    forOfResult += `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}\n`;
}

let forInResult = "";
for (const key in products[0]) {
    forInResult += `${key}: ${products[0][key]}\n`;
}

const availableProducts = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

output.textContent = `
Câu 3:
${JSON.stringify(namePriceList, null, 2)}

Câu 4:
${JSON.stringify(inStock, null, 2)}

Câu 5:
${hasExpensive}

Câu 6:
${allAccessoriesAvailable}

Câu 7:
${totalValue}

Câu 8:
${forOfResult}

Câu 9:
${forInResult}

Câu 10:
${availableProducts.join(", ")}
`;
