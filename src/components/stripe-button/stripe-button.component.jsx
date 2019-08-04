import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import CustomButton from '../custom-button/custom-button.component';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_JLfv7SEGB9Cnwb9sn8zWQyWi0054u7wH9Q';

  const onToken = token => {
    console.log(token);
    alert('Payment Successfull');
  };

  return (
    <StripeCheckout
      name='Test E-Commerce'
      description={`Your total is ${price}$`}
      image='https://svgshare.com/i/CUz.svg'
      panelLabel='Pay Now'
      amount={priceForStripe}
      stripeKey={publishableKey}
      token={onToken}
      billingAddress
      shippingAddress
    >
      <CustomButton disabled={!priceForStripe}>Pay Now</CustomButton>
    </StripeCheckout>
  );
};

export default StripeButton;
