# Show multiple products reviews on one page

Refers to the [freakdesign blog post](https://freakdesign.com.au/blogs/news/show-multiple-shopify-product-reviews-on-one-page).

Shopify Product reviews is a decent app for getting those important reviews but you might have the need to place a bunch of reviews on one page. This code might help you craft something to do just that.

Since this relies entirely on the Shopfiy app expect this to break at any point. It's a fun experiement.

### Interesting notes:
- you can get multiple badges in one call
- you can NOT get multiple reviews in one call

### Usage
- create a collection with reviewed products
- set the handle below (currently set to 'reviews')
- create a snippet called get-reviews.liquid
- include the snippet in the template where you want the reviews to show