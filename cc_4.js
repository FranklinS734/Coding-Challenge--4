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
