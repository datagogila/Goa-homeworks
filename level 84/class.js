const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 50 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
  ];
  
  const productNames = products.map(product => product.name);
  console.log("Product Names:", productNames);

  const affordableProducts = products.filter(product => product.price < 100);
  console.log("Affordable Products:", affordableProducts);

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  console.log("Total Price:", totalPrice);

  const productNamesReversed = products.reduceRight((acc, product, index) => {
    return acc === "" ? product.name : acc + " - " + product.name;}, "");
  console.log("Product Names Reversed:", productNamesReversed);
  