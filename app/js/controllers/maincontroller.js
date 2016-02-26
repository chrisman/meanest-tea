app.controller('MainController', [
  '$scope', 'TeaService',
  function($scope, TeaService){

  $scope.categories = TeaService.listCategories();
  $scope.teas = TeaService.listTea();

}]);
