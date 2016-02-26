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
      console.log('update', i);
    },
    // DELETE //
    removeItem: function(i){
      console.log('delete', i);
    }
  }
});
