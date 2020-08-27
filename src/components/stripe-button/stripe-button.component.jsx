import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HK2jDCqVh3PAw3aCoCAP5Qf77wB37Up8QcTpi3morrKIHRXUnfjHCiuguoAJYJRjYJt5AY6vWBfpYCnnruaQUEH00wYuJDvDx";

  const ontoken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Cloth Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={ontoken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
