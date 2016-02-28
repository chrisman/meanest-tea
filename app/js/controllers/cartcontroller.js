app.controller('CartController', [
  '$scope', 'TeaService', 'CartService',
  function($scope, TeaService, CartService){

  var getCartQty = function(){
    return CartService.listItems().length;
  }

  var toSubtotals = function(item) {
    return item.price * item.qty;
  }
  var toTotal = function(acc, curr) {
    return acc + curr;
  }
  var getCartTotal = function(){
    return CartService.listItems()
    .map(toSubtotals)
    .reduce(toTotal);
  }
  var updateCart = function(i){
    i = CartService.editItem(i);
    $scope.cart.total = getCartTotal();
  }
  // cart partial not hitting this function
  $scope.removeItem = function(i){
    console.log('before removal', CartService.listItems());
    CartService.removeItem(i);
    console.log('after removal', CartService.listItems());

    $scope.cart.cart = CartService.listItems();
    $scope.cart.total = getCartTotal();
  }

  $scope.tea = {};
  $scope.cart = {};
  
  $scope.cart.qty = getCartQty();
  $scope.cart.total = getCartTotal();
  $scope.cart.cart = CartService.listItems();  

}]);
