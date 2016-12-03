# Script to limit the amount of line items in the cart.

itemLimit = 1 #change this to your maximum value

Input.cart.line_items.each do |line_item|
  if (line_item.quantity > itemLimit)
    line_item.instance_variable_set(:@quantity, itemLimit) 
  end
end

Output.cart = Input.cart