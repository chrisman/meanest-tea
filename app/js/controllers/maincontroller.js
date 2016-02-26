app.controller('MainController', [
  '$scope', 'HelloWorld', 
  function($scope, HelloWorld){

  $scope.greeting = HelloWorld.greet();

}]);
