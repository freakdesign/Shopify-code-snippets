# Remove or hide map from the order status page
[Related blog post](http://freakdesign.com.au/blogs/news/138552903-hide-the-map-on-the-shopify-order-status-page-aka-the-thank-you-page)

Add one of the following opproaches to the [additional contents and scripts](https://docs.shopify.com/themes/customization/order-status#add-additional-content-and-scripts) section.

### 1. CSS

```
<style>
  .map {display:none }
</style>
```


### 2. Checkout.jQuery

```
<script>
if(Checkout && Checkout.$ && Checkout.$.fn){ Checkout.$('.map[data-mapbox]').parent().remove(); }
</script>
```

### 3. Vanilla JS

```
<script>
if(document.getElementsByClassName('map')[0]){
  document.getElementsByClassName('map')[0].parentNode.remove()
}
</script>
```
