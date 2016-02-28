app.service('CartService', function(){

  var cart = [];

  return {
    // CREATE //
    addItem: function(i){
      cart.push(i);
      console.log('add', i);
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
