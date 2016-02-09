app.factory('ShoppingCart', function() {
	var customerCart = {};
	customerCart.bag = [];
	customerCart.addToCart = function addToCart(quantity, teaObj){
		var itemNotSeen = true;
		customerCart.bag.forEach(function(el) {
			if (el.tea._id === teaObj._id) {
				el.quantity = Number(el.quantity) + Number(quantity);
				itemNotSeen = false;
			}
		});
		if (itemNotSeen) {
			customerSelection = {};
			customerSelection.quantity = quantity;
			customerSelection.tea = teaObj;
			customerCart.bag.push(customerSelection);
			itemNotSeen = true;
		}
	};
	return customerCart;
});
