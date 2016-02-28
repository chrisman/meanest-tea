app.controller('CartController', [
  '$scope', 'TeaService', 'CartService',
  function($scope, TeaService, CartService){

  var getCartQty = function(){
    return CartService.listItems().length;
  }

  $scope.tea = {};
  $scope.cart = {};
  
  $scope.cart.qty = getCartQty();

  $scope.cart.cart = CartService.listItems();  

}]);
