app.directive('cbTeawidget', ['CartService', function(CartService){
  return {
    restrict: 'EA',
    controller: ['$scope', function($scope){
      // control things
    }],
    link: function(scope, element, attrs){
      // do stuff
    },
    templateUrl: 'templates/teawidget.html',
    scope: {
      tea: '=cbTeawidget',
      cart: '='
    }

  };
}]);
