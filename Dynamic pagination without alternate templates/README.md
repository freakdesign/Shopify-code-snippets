# Dynamic Shopify pagination without alternate or multiple templates
When wanting to view Shopify collections with varied amounts of products per page (aka, pagination) the usual method involves creating a series of alternate templates. Let's explore an idea that ditches the multiples, and just uses one.

[Blog Post](http://freakdesign.com.au/blogs/news/167340935-paginate-a-shopify-collection-by-dynamic-amounts-without-multiple-templates)

[Demo](https://jasons-experiments.myshopify.com/collections/all)


##### dynamic-pagination-select.liquid:
Example HTML / Liquid for the `<select>` menu.

##### dynamic-pagination.liquid:
Example code that applies the cart attribute as a cart attribute

##### dynamic-pagination.js:
Example JavaScript showing how the AJAX API can be used to store a cart attribute