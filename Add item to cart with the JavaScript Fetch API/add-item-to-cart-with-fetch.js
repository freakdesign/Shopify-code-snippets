/*

Example code showing how to add an item to 
the cart in Shopify using the Fetch API. 

The important line is where we add the 
X-Requested-With header. Without that the 
fetch call will fail with a bad request error.

*/


(function(){

  var addData = {
    'id':21373873027, /* for testing, change this to a variant ID on your store */
    'quantity':1
  };

  fetch('/cart/add.js', {
    body: JSON.stringify(addData),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With':'xmlhttprequest' /* XMLHttpRequest is ok too, it's case insensitive */
    },
    method: 'POST'
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    /* we have JSON */
    console.log(json)
  }).catch(function(err) {
    /* uh oh, we have error. */
    console.error(err)
  });
  
})();
