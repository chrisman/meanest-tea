app.service('TeaService', function($http){

  var tea_data = [];
  $http.get('/js/data.js').then( r => {
    tea_data = r.data;
    console.log(tea_data);
  } );

  return {
   listTea: function(){
      return tea_data;
    },

    listCategories: function(){
      var cats = [];

      tea_data.forEach( o => {
        o.categories.forEach( i => {
          if (!(cats.includes(i)))
            cats.push(i)
        } );
      } );

      return cats;
    }
  }
});
