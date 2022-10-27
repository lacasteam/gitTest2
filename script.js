const input_item = document.querySelector("#add_item");
const input_price = document.getElementById("add_price");

let items = {
	cart: []
};

// console.log(`Item: ${input_item} Price: ${input_price}`);


const add_item = () => { 
	let itemValue = input_item.value;
	let priceValue = Number(input_price.value);

	console.log(`Item: ${itemValue} Price: ${priceValue}`);
	items.cart.push({item: itemValue, price: priceValue});
	console.log(`The items ${JSON.stringify(items.cart)}`);

	showcart();
	localStorage.setItem('cart', JSON.stringify(items));
}

const showcart = () => { 
	let x = document.getElementById("items_in_cart");
	let current = "";
	if(items.cart == ""){
		x.innerHTML = "<b>No Items in Cart</b>";
	}else{
		items.cart.map((show_item)=>{
			current += "<b>Item:</b>"+show_item.item + " <b>Price:</b> "+ show_item.price + "<hr>";
		});
		x.innerHTML = current;
	}
	clearInputs();
}

const clearInputs = () => { 
	input_item.value = "";
	input_price.value = "";

}

showcart();

