// CartService - a sad little service that didn't end up doing very much

app.service('CartService', function(){

  var cart = [];

  return {
    // CREATE //
    addItem: function(i){
      cart.push(i);
    },
    // READ //
    listItems: function(){
      return cart;
    },
    // UPDATE //
    editItem: function(i){
    },
    // DELETE //
    removeItem: function(i){
      cart = cart.filter( o => {
        return o._id !== i._id;
      });
    }
  }
});
