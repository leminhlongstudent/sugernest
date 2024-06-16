import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { REST_API_BASE_URL } from '../services/ProductService';

const MyPayPalButton = ({ total, currency, description }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "Abo90Wztq8vanhzw0EO5zMhum7b1O6aI_1x4BTA8v7jqNIOGdthWxF-ZZpjhtEGg6CW0VWRdgg_hjdlb" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return fetch(`${REST_API_BASE_URL}/api/paypal/create-payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              total,
              currency,
              method: 'paypal',
              intent: 'sale',
              description,
            }),
          })
          .then(response => response.json())
          .then(order => {
            if (order.approvalUrl) {
              return order.approvalUrl.split('token=')[1];
            } else {
              throw new Error('Error creating payment');
            }
          });
        }}
        onApprove={(data, actions) => {
          console.log('PayPal onApprove', data);
          return fetch(`${REST_API_BASE_URL}/api/paypal/execute-payment?paymentId=${data.paymentID}&PayerID=${data.payerID}`)
            .then(response => response.text())
            .then(result => {
              if (result.includes('Payment successful')) {
                alert('Payment successful!');
              } else {
                throw new Error('Payment failed');
              }
            })
            .catch(error => {
              console.error('Payment execution error:', error);
              alert('Payment execution failed');
            });
        }}
        onError={(err) => {
          console.error('PayPal Checkout onError', err);
          alert('An error occurred during the transaction');
        }}
      />
    </PayPalScriptProvider>
  );
};

export default MyPayPalButton;
