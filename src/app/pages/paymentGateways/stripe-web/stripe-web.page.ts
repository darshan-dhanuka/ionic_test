/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
declare var Stripe;
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../../../services/util/util.service';
@Component({
  selector: 'app-stripe-web',
  templateUrl: './stripe-web.page.html',
  styleUrls: ['./stripe-web.page.scss'],
})
export class StripeWebPage implements OnInit {

  stripe = Stripe('pk_test_SwGaKHT5AoDU4XP9eErQOZjq00htqO5Gix');
  card: any;
  paymentAmount = '3.33';
  currency = 'USD';
  currencyIcon = '$';

  constructor(public util: UtilService, private http: HttpClient) {
  }

  ngOnInit() {
    this.setupStripe();
  }

  setupStripe() {
    const elements = this.stripe.elements();
    const styles = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: styles });
    console.log(this.card);
    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      const displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    const form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          const errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          console.log(result);
          this.util.presentToast('source for the card is generated here you can make API call from this source', true, 'bottom', 1500);
          this.makePayment(result.source);
        }
      });
    });
  }

  makePayment(token) {
    this.http
      .post('https://us-central1-fullpayment-48a0d.cloudfunctions.net/payWithStripe', {
        token: token.id
      })
      .subscribe(data => {
        console.log('stripe Data', data);
      });
  }

}
