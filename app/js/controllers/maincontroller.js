app.controller('MainController', [
  '$scope', 'HelloWorld', 'TeaService',
  function($scope, HelloWorld, TeaService){

  $scope.greeting = HelloWorld.greet();

  $scope.categories = TeaService.listCategories();
  $scope.teas = TeaService.listTea();

}]);
