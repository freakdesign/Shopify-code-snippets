/*!

      ############# 
    ##            *## 
   #        %      **#
  #        %%%    ***#
 #       %%F%D%%   ****#
#          %%%    *****#
#   ###     %     ###***# 
#  # ####       #### #**# 
#  #     #     #     #**# 
#   #####  # #  #####***# 
#         #   #  *******# 
 ### #           **# ### 
     # - - - - - - #
      | | | | | | |

    freakdesign.com.au

    JavaScript function to calculate the total stock value within a Shopify store

    Copyright (c) 2016 Jason Bowman (freakdesign.com.au)
    Dual licensed under the MIT and GPL licenses:
    http://www.opensource.org/licenses/mit-license.php
    http://www.gnu.org/licenses/gpl.html

*/
(function(){

  if(!self.fetch) { console.log('fetch() not supported');return }

  var app = {
    apiLimit:250,
    productCount:0,
    variantCount:0,
    stockCount:0,
    totalProductValue:0,
    consoleLine:'------------------------------'
  };

  var getAllProducts = function(page){
    if(app.productCount < 1){ return }
    if(typeof page === 'undefined'){ var page = 1 }
    var totalPages = Math.ceil(app.productCount / app.apiLimit);

    console.log('Getting ' + page +' of '+ totalPages + ' page(s)...');

    var request = new Request('/admin/products.json?limit='+app.apiLimit+'&page='+page, {
      method:'GET',
      credentials:'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    });

    fetch(request).then(function(response) { 
      return response.json();
    }).then(function(j) {
      if(page===1 || typeof app.products === 'undefined'){
        app.products = j.products;
      }else{
        var concatArray = app.products.concat(j.products);
        app.products = concatArray;
      }

      if(totalPages > page){
        page++;
        getAllProducts(page);
      }else{
        getTotalProductValue(app.products);
      }

    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  };

  var getTotalProductValue = function(products){

    console.log(app.consoleLine);

    for (var i = products.length - 1; i >= 0; i--) {
      app.variantCount += parseInt(products[i].variants.length);
      for (var p = products[i].variants.length - 1; p >= 0; p--) {
        var variant = products[i].variants[p];
        if(variant.inventory_quantity && variant.inventory_quantity > 0){
          app.stockCount += variant.inventory_quantity;
          app.totalProductValue += parseFloat(variant.price) * variant.inventory_quantity;
        }
      };
    };

    var message = [
      'Products count: ', products.length, 
      '\nVariant count: ', app.variantCount, 
      '\nStock count: ', app.stockCount, 
      '\nTotal value = ', Shopify.Money.format(app.totalProductValue.toFixed(3),Shopify.Money.moneyFormat())
    ].join('');

    console.log(message);

  }

  var getProductCount = function(){
    var request = new Request('/admin/products/count.json', {
      method:'GET',
      credentials:'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    });
    fetch(request).then(function(response) { 
      return response.json();
    }).then(function(j) {
      app.productCount = j.count || 0;
      getAllProducts();
    }).catch(function(ex) {
      console.log('Function failed: ', ex)
    })
  }

  var init = function(){
    getProductCount();
  }
  
  init();

})()