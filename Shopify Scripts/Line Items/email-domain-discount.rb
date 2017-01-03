# Discount based on email address
# Could also be a partial domain match but we're doing the whole thing here...
Output.cart = Input.cart
exit unless Input.cart.customer
exit unless Input.cart.customer.email.end_with? "@freakdesign.com.au"

DISCOUNT_PERCENT = 0.5 #50 percent discount. Nice!

Input.cart.line_items.each do |line_item|
  line_item.change_line_price(
    line_item.line_price * DISCOUNT_PERCENT,
    message: 'Freakdesign Discount of Awesome',
  )
end

Output.cart = Input.cart