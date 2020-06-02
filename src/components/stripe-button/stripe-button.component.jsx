import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // stripe wants prices in Cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_YQKpR0SFDuua6fp4D1OFsSwY00ueEPR2Pn';

  const onToken = token => {
    // would normally pass this to backend to 
    // do the charge
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;