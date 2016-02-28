// TODO how inject cartservice ... MainController?
app.directive('cbTeawidget', ['CartService', function(CartService){
  return {
    restrict: 'EA',
    controller: ['$scope', function($scope){
      // control things
      // console.log($scope);
    }],
    link: function(scope, element, attrs){
      // do stuff
      console.log('ffff');
    },
    templateUrl: 'templates/teawidget.html',
    scope: {
      tea: '=cbTeawidget',
      cart: '='
    }

  };
}]);
