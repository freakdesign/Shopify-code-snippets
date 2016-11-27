# Get url querystring values with Shopify Liquid
Simple code to parse content from the `content_for_header` to grab querystring values. Do note that this code relies entirely on the contents in `content_for_header`. If the contents change in the future it's possible this code will no longer work. **Use this on production sites at your own risk.**

Relates to [Shopify Liquid Querystring](http://freakdesign.com.au/blogs/news/get-the-url-querystring-values-with-liquid-in-shopify) post on the freakdesign blog. Also see [live example](https://jasons-experiments.myshopify.com/collections/all/products/3-4-sleeve-kimono-dress-coral-1?ref=freakdesign).


### Basic setup
- Add the code as is or via a snippet to a template file (such as product.liquid)
- Modify as per your needs
- done...