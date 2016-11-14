/*

  This is not a complete code sample ready to copy and paste so you will need to be ready to adapt this to your own theme.
  My example store uses Venture as the base so this is what this code is tailored for.

  Relates to the blog post here:
  http://freakdesign.com.au/blogs/news/167340935-paginate-a-shopify-collection-by-dynamic-amounts-without-multiple-templates

*/

/* Grab the <select> element, and cache it should it be needed later */
theme.cache.paginateDropdown = $('#paginateBy');

/* Bind a change event to the dropdown */
theme.cache.paginateDropdown.on('change', function(){

  /* Get the current value. Some value validation could be added here (but we don't) */
  var val = $(this).val();

  /* Send the value as a cart attribute via the AJAX API */
  $.ajax({
    type: "POST",
    url: '/cart.js',
    data: {"attributes[pagination]": val}, /* We are using an attribute named "pagination" */
    success: function(d){
      /* 

      On sucess, reload the page.  

      Warning: If you have scripts on the page that auto trigger the change even the page may reload forever.
      If you do, be sure to add code to account for that.

      */
      window.location.reload(); 
    },
    dataType: 'json'
  });
});