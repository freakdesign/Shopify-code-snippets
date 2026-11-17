# Previously purchased

Show a signed-in customer when they last ordered the product they're looking at. The snippet checks up to 20 orders on the first page of their history and matches by product ID, so any variant of the product counts.

Copy `previously-purchased.liquid` into your theme’s `snippets` directory and put this near the price or buy buttons in the product section.

```liquid
{% render 'previously-purchased', product: product %}
```

Cancelled, fully refunded and voided orders are skipped. Refunds are checked at the order level, so a refunded item on a partially refunded order can still count. Older purchases can fall outside the order window.

Tested in an unpublished Freakdesign theme. The note showed the expected purchase date when signed in and disappeared when signed out. On your own theme, also check a signed-in customer with no matching purchase.

[Read the tutorial](https://freakdesign.com.au/blogs/news/show-previous-purchases-on-shopify-product-pages) · [Try the interactive demo](https://freakdesign.com.au/pages/previously-purchased-demo)
