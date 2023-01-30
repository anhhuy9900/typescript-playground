type Product = {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: 'A', price: 100 },
    { name: 'B', price: 200 },
];

products.forEach(p => {
    p.price = 1;
})

const readOnlyProduct: Readonly<Product>[] = products;
readOnlyProduct.forEach(p => {
    // Cannot assign to 'price' because it is a read-only property
    p.price = 1;
})