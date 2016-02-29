app.filter('cb_monetize', function(){
  return function(input){
    return '$' + (input / 100).toFixed(2);
  }
});

app.filter('cb_assertTrue', function(){
  return function(input){
    return (input) ? 'Yes' : 'No';
  }
});
