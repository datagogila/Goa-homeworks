const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(num => num % 2 === 0);

console.log("All Even:", allEven);



const strings = ["hi", "hello", "programming", "js"];

const hasLongString = strings.some(str => str.length > 5);

console.log("Has Long String:", hasLongString);



const nums = [1, 2, 3, 4, 5];
let doubledNumbers = [];

nums.forEach(num => {
  doubledNumbers.push(num * 2);
});

console.log("Doubled Numbers:", doubledNumbers);


const users = [
    { name: "Ana", age: 20 },
    { name: "Giorgi", age: 17 },
    { name: "Mariam", age: 25 }
  ];
  
  const allAdults = users.every(user => user.age >= 18);
  
  console.log("All Adults:", allAdults);

  
  const products = [
    { name: "Book", price: 25 },
    { name: "Pen", price: 5 },
    { name: "Laptop", price: 1200 }
  ];
  
  const hasAffordableProduct = products.some(product => product.price < 20);
  
  console.log("Has Affordable Product:", hasAffordableProduct);

  

  const customerOrders = [
    {
      orderId: 1,
      customerId: 101,
      items: [
        { title: "JavaScript Basics", price: 15, quantity: 1 },
        { title: "React Guide", price: 25, quantity: 2 }
      ],
      shippingAddress: "Tbilisi, Georgia",
      isDelivered: true
    },
    {
      orderId: 2,
      customerId: 102,
      items: [
        { title: "Node.js Handbook", price: 8, quantity: 1 }
      ],
      shippingAddress: "Batumi, Georgia",
      isDelivered: false
    }
  ];
  
  
  const allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
  console.log("All Orders Have Items:", allOrdersHaveItems);
  3
  const hasPendingDelivery = customerOrders.some(order => order.isDelivered === false);
  console.log("Has Pending Delivery:", hasPendingDelivery);
  
  customerOrders.forEach(order => {
    console.log(`Processing Order ID: ${order.orderId}`);
  
    order.items.forEach(item => {
      console.log(` - ${item.title} (Quantity: ${item.quantity})`);
    });
  
    const allExpensive = order.items.every(item => item.price > 10);
    console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);
  
    const hasMultipleCopies = order.items.some(item => item.quantity > 1);
    console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`);
  });
  