// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Broccoli - $2.99",
		nonDairy: true,
		pesc:true,
		noNuts: true,
    organic:true,
		price: 2.99,
		aisle:'Produce',
		protein: false
	},
	{
		name: "Bread - $2.35",
		nonDairy: false,
		pesc:true,
		noNuts: true,
    organic:false,
		protein: false,
		aisle:'Produce',
		price: 2.35
	},
	{
		name: "Salmon - $10.00",
		nonDairy: true,
		pesc:true,
		noNuts: true,
    organic:false,
		protein: true,
		aisle:'Meat',
		price: 10.00
	},
  {
    name: "Cookies - $1.99",
    nonDairy: false,
		pesc:true,
    noNuts: false,
    organic:false,
		protein: false,
		aisle:'Bakery',
    price: 1.99
  },
  {
    name: "Peanut butter - $3.99",
    nonDairy: true,
		pesc:true,
    noNuts: false,
    organic:true,
		protein: true,
		aisle:'Produce',
    price: 3.99
  },
  {
    name: "Almond milk - $6.45",
    nonDairy: true,
		pesc:true,
    noNuts: false,
    organic:false,
		protein: false,
		aisle:'Refrigerated',
    price: 6.45
  },
  {
    name: "Milk - $5.45",
    nonDairy: false,
		pesc:true,
    noNuts: true,
    organic:true,
		protein: true,
		aisle:'Refrigerated',
    price: 5.45
  },
  {
    name: "Chocolate - $1.35",
    nonDairy: false,
		pesc:true,
    noNuts: true,
    organic:false,
		protein: false,
		aisle:'Bakery',
    price: 1.35
  },
  {
    name: "Carrots - $2.99",
    nonDairy: true,
		pesc:true,
    noNuts: true,
    organic:true,
		protein: false,
		aisle:'Produce',
    price: 2.99
  },
  {
    name: "Watermelon - $7.80",
    nonDairy: true,
		pesc:true,
    noNuts: true,
    organic:true,
		protein: false,
		aisle:'Produce',
    price: 7.80
  },
	{
    name: "Eggs - $3.80",
    nonDairy: true,
		pesc:true,
    noNuts: true,
    organic:true,
		protein: true,
		aisle:'Refrigerated',
    price: 3.80
  },
	{
    name: "Ground beef - $8.79",
    nonDairy: true,
		pesc:false,
    noNuts: true,
    organic:false,
		protein: true,
		aisle:'Meat',
    price: 8.79
  },
	{
    name: "Chicken - $7.99",
    nonDairy: true,
		pesc:false,
    noNuts: true,
    organic:false,
		protein: true,
		aisle:'Meat',
    price: 7.99
  }

];


products.sort((a,b)=>(a.price>b.price?1:-1));

function checkValue(v) {
  return v != undefined;
}
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		product_names.push(prods[i].name);
		console.log(product_names)
	}
	for (let i=0; i<prods.length; i+=1) {
		if (document.getElementById("organic").checked){
			if (prods[i].organic==false && prods[i].name==product_names[i]){
				delete product_names[i];
			}
		}
		if (document.getElementById("lact").checked){
			if (prods[i].nonDairy==false && prods[i].name==product_names[i]){
				delete product_names[i];
			}
		}
		if (document.getElementById("nuts").checked){
			if (prods[i].noNuts==false && prods[i].name==product_names[i]){
			delete product_names[i];
			}
		}
		if (document.getElementById("prot").checked){
			if (prods[i].protein==false && prods[i].name==product_names[i]){
				delete product_names[i];
				console.log(product_names)
			}
		}
		if (document.getElementById("pesc").checked){
			if (prods[i].pesc==false && prods[i].name==product_names[i]){
				delete product_names[i];
			}
		}
	}
	product_names=product_names.filter(checkValue);
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