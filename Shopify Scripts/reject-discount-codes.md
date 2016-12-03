# Reject all discount codes

Output.cart = Input.cart
exit unless Input.cart.discount_code

Input.cart.discount_code.reject({ message: 'No discount codes allowed' })
Output.cart = Input.cart