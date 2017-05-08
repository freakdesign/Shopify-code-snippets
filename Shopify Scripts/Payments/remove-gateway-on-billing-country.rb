blocked_countries = ['AU', 'NZ']

exit unless Input.cart.billing_address
exit unless Input.cart.billing_address.country

if blocked_countries.include? Input.cart.billing_address.country
  Output.payment_gateways = Input.payment_gateways.delete_if do |payment_gateway|
    payment_gateway.name == "Shopify Payments"
  end
end