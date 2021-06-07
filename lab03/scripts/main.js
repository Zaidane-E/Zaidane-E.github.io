	// CODE INSPIRÉ DE:
	// https://carolinebarriere.github.io/SEG3125-Module2-Grocery/

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbox

function populateProductList(slct2) {
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
	optionArray = restrictProducts();

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	for (i = 0 ; i < optionArray.length ; i++) {
		var productName = optionArray[i];
		var productPrice = findPrice(optionArray[i]);
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.id = productName;


		var para = document.createElement('P');
		var priceTag = document.createElement('P');
		var div = document.createElement('div');
		var img = document.createElement('img');
		var span = document.createElement('SPAN');
		var br = document.createElement('BR');
		
		// create a label for the checkbox, and also add in HTML DOM

		var label = document.createElement('LABEL');
		label.appendChild(checkbox);
		label.appendChild(span);
		label.htmlFor = productName;

		label.classList.add('addContainer');
		span.classList.add('addCheckmark');

		span.appendChild(document.createTextNode('SELECT ITEM'));

		img.src = getProductImage(optionArray[i]);

		para.classList.add('productName');
		
		div.classList.add('card');

		priceTag.classList.add('price')

		para.appendChild(document.createTextNode(productName));
		priceTag.appendChild(document.createTextNode("$" + productPrice))

		div.appendChild(para);
		div.appendChild(img);
		div.appendChild(priceTag);
		div.appendChild(label);
		div.appendChild(br);

		s2.appendChild(div);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}

function populateCategorizedProductList(slct2, slct1) {
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
	optionArray = categorize(slct1);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	for (i = 0 ; i < optionArray.length ; i++) {
		var productName = optionArray[i];
		var productPrice = findPrice(optionArray[i]);
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.id = productName;


		var para = document.createElement('P');
		var priceTag = document.createElement('P');
		var div = document.createElement('div');
		var img = document.createElement('img');
		var span = document.createElement('SPAN');
		var br = document.createElement('BR');
		
		// create a label for the checkbox, and also add in HTML DOM

		var label = document.createElement('LABEL');
		label.appendChild(checkbox);
		label.appendChild(span);
		label.htmlFor = productName;

		label.classList.add('addContainer');
		span.classList.add('addCheckmark');

		span.appendChild(document.createTextNode('SELECT ITEM'));

		img.src = getProductImage(optionArray[i]);

		para.classList.add('productName');
		
		div.classList.add('card');

		priceTag.classList.add('price')

		para.appendChild(document.createTextNode(productName));
		priceTag.appendChild(document.createTextNode("$" + productPrice))

		div.appendChild(para);
		div.appendChild(img);
		div.appendChild(priceTag);
		div.appendChild(label);
		div.appendChild(br);

		s2.appendChild(div);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}


// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	var x = document.createElement("B");
	var t = document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts));
	x.appendChild(t);
	c.appendChild(x);

}

// ADDED CODE

function openProduct() {
	document.getElementById("product-open").click();
}

function openCart() {
	document.getElementById("cart-open").click();
}

document.getElementById("default-open").click();
populateProductList("displayProduct");