// CODE INSPIRÉ DE:
// https://carolinebarriere.github.io/SEG3125-Module2-Grocery/

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli - $1.99",
		vegetarian: true,
		glutenFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread - $2.35",
		vegetarian: true,
		glutenFree: false,
		nutFree: true,
		organic: true,
		price: 2.35
	},
	{
		name: "chicken - $14.00",
		vegetarian: false,
		glutenFree: true,
		nutFree: true,
		organic: true,
		price: 14.00
	},
	{
		name: "salmon - $10.00",
		vegetarian: false,
		glutenFree: true,
		nutFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "peanut butter - $3.50",
		vegetarian: true,
		glutenFree: true,
		nutFree: false,
		organic: false,
		price: 3.50
	},
	{
		name: "eggs - $8.00",
		vegetarian: false,
		glutenFree: true,
		nutFree: true,
		organic: true,
		price: 8.00
	},
	{
		name: "milk - $4.00",
		vegetarian: false,
		glutenFree: false,
		nutFree: true,
		organic: true,
		price: 4.00
	},
	{
		name: "snickers - $2.00",
		vegetarian: true,
		glutenFree: false,
		nutFree: false,
		organic: false,
		price: 2.00
	},
	{
		name: "banana - $1.30",
		vegetarian: true,
		glutenFree: true,
		nutFree: true,
		organic: true,
		price: 1.30
	},
	{
		name: "tuna - $1.00",
		vegetarian: false,
		glutenFree: true,
		nutFree: true,
		organic: false,
		price: 1.00
	}
];

products.sort((a,b)=>(a.price>b.price?1:-1));

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "NutFree"){
			product_names.push(prods[i].name);
		}
		else if (restriction == "Organic"){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}