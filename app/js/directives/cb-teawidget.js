app.directive('cbTeawidget', function(){
  return {
    restrict: 'EA',
    controller: function($scope){
      // control things
    },
    link: function(scope, element, attrs){
      element.on('click', function(){
        alert('clickkkk');
      });
    },
    templateUrl: 'templates/teawidget.html',
    scope: {
      // TDs are known to be messed up:
      // http://stackoverflow.com/questions/18600710/angularjs-ng-repeat-with-custom-element-inside-a-table-is-rendering-strangely
      tea: '=cbTeawidget'
    }

  };
});
