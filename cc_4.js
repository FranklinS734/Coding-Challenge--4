// Task 1 - Customer Discounts
// Setting a purchase amount to check if discount applies
let purchaseAmount = 420; 
let finalAmount = purchaseAmount; 

// If purchase is more than $100, apply a 10% discount
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.85; // 15% discount
}
console.log(`Final amount after discount: $${finalAmount}`);

// Task 2 - Sales Report
// List of sales figures
let sales = [230, 85, 320, 310, 60];
let totalSales = 0;

// Loop through sales array to add up total
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
console.log(`Total sales: $${totalSales}`);

// Task 3 - Financial Transactions
// Starting stock value
let stock = 10;

// While loop to decrease stock until 0
while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--; // Decrease stock
}
console.log("Stock is empty");

// Task 4 - Customer Messaging
// Starting count of responses
let responses = 0;

// Do...while loop to simulate collecting responses
do {
    responses++;
    console.log(`Thank you for completing response ${responses}!`);
} while (responses < 3);
console.log("Survey completed. We appreciate your feedback!");

// Task 5 - Employee Information
// Employee details as an object
let employee = {
    name: "Sunny Man",
    position: "Data Analyst",
    salary: 65000
};

// Loop through object properties
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// Task 6 - Product Listings
// List of products
let products = ["Iphone", "Bose Headphones", "Smart Watch"];

// Loop through product array
for (let product of products) {
    console.log(`Product: ${product}`);
}

// Task 7 - Order Processing
// List of order IDs
let orders = [721, 722, 723];

// forEach loop to log order IDs
orders.forEach(order => {
    console.log(`Processing order ID: ${order}`);
});

// Task 8 - Tax Calculation
// Function to calculate tax
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

// Showcase
let tax = calculateTax(200, 0.06);
console.log(`Tax amount: $${tax}`);

// Task 9 - Discount Application
// Function expression for applying discount
const applyDiscount = function(price, discountPercentage) {
    return price * (1 - discountPercentage / 100);
};

// Applied on first sale
let discountedPrice = applyDiscount(200, 15);
console.log(`Discounted price: $${discountedPrice}`);