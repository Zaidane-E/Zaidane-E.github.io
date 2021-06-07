// CODE INSPIRÉ DE:
// https://carolinebarriere.github.io/SEG3125-Module2-Grocery/

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		img: 'assets/broccoli.png',
		category: 'vegetables',
		vegetarian: true,
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		img: 'assets/bread.png',
		category: 'grains',
		vegetarian: true,
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 2.35
	},
	{
		name: "chicken",
		img: 'assets/chicken.png',
		category: 'meats',
		vegetarian: false,
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 14.00
	},
	{
		name: "salmon",
		img: 'assets/salmon.png',
		category: 'meats',
		vegetarian: false,
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "peanut butter",
		img: 'assets/peanut-butter.png',
		category: 'grains-cereals',
		vegetarian: true,
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 3.50
	},
	{
		name: "eggs",
		img: 'assets/eggs.png',
		category: 'dairy',
		vegetarian: true,
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 3.00
	},
	{
		name: "milk",
		img: 'assets/milk.png',
		category: 'dairy',
		vegetarian: false,
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 4.00
	},
	{
		name: "snickers",
		img: 'assets/snickers.png',
		category: 'snacks',
		vegetarian: true,
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 2.00
	},
	{
		name: "banana",
		img: 'assets/banana.png',
		category: 'fruits',
		vegetarian: true,
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.30
	},
	{
		name: "tuna",
		img: 'assets/tuna.png',
		category: 'meats',
		vegetarian: false,
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 1.00
	}
];

function findPrice(productName) {
	for ( j = 0 ; j < products.length ; j++ ) {
		if ( products[j].name == productName ) {
			return products[j].price.toFixed(2);
		}
	}
}

function getProductImage(productName) {
	for ( k = 0 ; k < products.length ; k++ ) {
		if ( products[k].name == productName ) {
			return products[k].img;
		}
	}
}

products.sort((a,b)=>(a.price>b.price?1:-1));

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictProducts() {

	console.log(products);

	var vegetarianCheck = document.getElementById("Vegetarian").checked;
	var lactoseFreeCheck = document.getElementById("lactoseFree").checked;
	var nutFreeCheck = document.getElementById("NutFree").checked;
	var organicCheck = document.getElementById("Organic").checked;

	restrictedList = products;

	if ( vegetarianCheck ) {
		var restrictedList = restrictedList.filter(function (el) {
			return el.vegetarian === true;
		});
	}

	if ( lactoseFreeCheck ) {
		var restrictedList = restrictedList.filter(function (el) {
			return el.lactoseFree === true;
		});
	}

	if ( nutFreeCheck ) {
		var restrictedList = restrictedList.filter(function (el) {
			return el.nutFree === true;
		});
	}

	if ( organicCheck ) {
		var restrictedList = restrictedList.filter(function (el) {
			return el.organic === true;
		});
	}

	let product_names = [];

	for (let i=0; i<restrictedList.length; i+=1) {
		product_names.push(restrictedList[i].name);
	}
	
	console.log(products);

	return product_names;

}

function restrictProductsAlt() {

	var vegetarianCheck = document.getElementById("Vegetarian").checked;
	var lactoseFreeCheck = document.getElementById("lactoseFree").checked;
	var nutFreeCheck = document.getElementById("NutFree").checked;
	var organicCheck = document.getElementById("Organic").checked;

	restrictedList = products;

	if ( vegetarianCheck ) {
		var restrictedList = restrictedList.filter(function (el) {
			return el.vegetarian === true;
		});
	}

	if ( lactoseFreeCheck ) {
		var restrictedList = restrictedList.filter(function (el) {
			return el.lactoseFree === true;
		});
	}

	if ( nutFreeCheck ) {
		var restrictedList = restrictedList.filter(function (el) {
			return el.nutFree === true;
		});
	}

	if ( organicCheck ) {
		var restrictedList = restrictedList.filter(function (el) {
			return el.organic === true;
		});
	}

	return restrictedList;

}

function categorize(slct) {

	categorizedList = restrictProductsAlt();

	let output = [];

	console.log(slct);
	console.log('Categorized list: ');
	console.log(categorizedList);

	if ( slct == 'all' ) {
		for ( i = 0 ; i < categorizedList.length ; i++) {
			output.push(categorizedList[i].name);
		}
		return output;
	} else {
		var categorizedList = categorizedList.filter(function (el) {
			return el.category == slct;
		});

		for ( i = 0 ; i < categorizedList.length ; i++) {
			output.push(categorizedList[i].name);
		}
		return output;
	}

	console.log(categorizedList);
	console.log(output);

	return output;
 
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}