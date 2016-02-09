app.controller('Selection', function($scope, $location, ApiTeaData, ShoppingCart) {
   $scope.teaData = ApiTeaData;
   $scope.cart = ShoppingCart;
   $scope.goToCheckout = function(path) {
       $location.path('/checkout');
   };
   $scope.sort = function(sortValue) {
       if (sortValue === 'highest') {
           $scope.teaData.data.sort(function(a,b) {
               return b.price - a.price;
           });
       } else {
           $scope.teaData.data.sort(function(a,b) {
               return a.price - b.price;
           });
       }
   }
});

app.controller('Checkout', function($scope, ShoppingCart) {
   $scope.shoppingCart = ShoppingCart;
   $scope.shoppingCart.bag.total = function total(el) {
       (el.tea.price * el.quantity) / 100;
   };
});
