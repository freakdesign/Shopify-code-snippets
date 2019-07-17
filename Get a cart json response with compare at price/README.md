# Get a cart json response with compare at price

The default Shopify AJAX cart json doesn't include the compare at price. If you really need this, we can create an alternate template and output a json string with that data in place. This will be a quick and dirty guide to serve as inspiration. 

Base concept is to create a new alternate tempalte in the theme. I've called this one cart.compare.liquid. Feel free to change _compare_ to whatever you like but make sure you also use the same word in the link (seen below).

At the time of posting [this item](https://jasons-experiments.myshopify.com/products/basic-tie) had a compare at price set:

And to view the alternate template on a cart afterwards use the ?view= parameter. [Example](https://jasons-experiments.myshopify.com/cart?view=compare).

