
'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import styles from './paypalButton.module.css'

const PayPalButton = () => {
  const paypalOptions = {
    'client-id': 'AaRKKqG7BeRbI6IEB5bZQwFsN-GCAuBuW42KMS04m3vqdwAFsPif_trkuImm6AZRhBgQby8uML2PozVz',
    currency: 'USD',
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          
          amount: {
            value: '0.10', // Example amount
          },
          
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      alert('Transaction completed by ' + details.payer.name.given_name);
      console.log(details);
    });
  };

  return (
   <div className={styles.container}>
    <PayPalScriptProvider options={paypalOptions}>
    <h2>Pay Dues</h2>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
    </div>
  );
};

export default PayPalButton;