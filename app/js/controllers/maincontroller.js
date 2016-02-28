// TODO fix item.qty. i need it to persist in shopping carst
app.controller('MainController', [
  '$scope', 'TeaService', 'CartService',
  function($scope, TeaService, CartService){

  var getCartQty = function(){
    return CartService.listItems().length;
  }

  $scope.tea = {};
  $scope.cart = {};

  $scope.categories = TeaService.listCategories();
  $scope.teas = TeaService.listTea();

  $scope.cart.qty = getCartQty();

  $scope.cart.addItem = function(i){
    i.qty = i.qty || 1;
    CartService.addItem(i);
    $scope.cart.qty = getCartQty();
  }
  

}]);
