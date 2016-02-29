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
  $scope.updateCart = function(i){
    i.is_editing = !i.is_editing;
    CartService.editItem(i);
    $scope.cart.cart = CartService.listItems();
    $scope.cart.total = getCartTotal();
  }
  $scope.removeItem = function(i){
    CartService.removeItem(i);
    $scope.cart.cart = CartService.listItems();
    $scope.cart.total = getCartTotal();
  }

  $scope.tea = {};
  $scope.cart = {};
  
  $scope.cart.qty = getCartQty();
  $scope.cart.total = getCartTotal();
  $scope.cart.cart = CartService.listItems();  

}]);
