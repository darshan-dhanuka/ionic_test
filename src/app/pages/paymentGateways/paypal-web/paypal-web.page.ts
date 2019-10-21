/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paypal-web',
  templateUrl: './paypal-web.page.html',
  styleUrls: ['./paypal-web.page.scss'],
})
export class PaypalWebPage {

  paymentAmount = '3.33';
  currency = 'USD';
  currencyIcon = '$';
  constructor() {
    const this$ = this;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      const payPalName = 'paypal';
      window[payPalName].Buttons({
        // Set up the transaction
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: this$.paymentAmount
              }
            }]
          });
        },

        // Finalize the transaction
        onApprove: (data, actions) => {
          return actions.order.capture()
            .then((details) => {
              console.log(details);
              // Show a success message to the buyer
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
            })
            .catch(err => {
              console.log(err);
            });
        }
      }).render('#paypal-button-container');
    }, 500);

  }

}
