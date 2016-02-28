// TODO how inject cartservice ... MainController?
app.directive('cbTeawidget', [function(){
  return {
    restrict: 'EA',
    controller: function($scope){
      // control things
      console.log($scope);
    },
    link: function(scope, element, attrs){
      // do stuff
    },
    templateUrl: 'templates/teawidget.html',
    scope: {
      tea: '=cbTeawidget'
    }

  };
}]);
