$(function() {
  $.ajax({ 
    dataType:'jsonp', 
    url: 'https://jasons-experiments.myshopify.com/cart.json?callback=?', 
    success: function(d){ 
      /* do something with the data. In this example we are just loggin it */
      console.log(d) 
    } 
  });
});