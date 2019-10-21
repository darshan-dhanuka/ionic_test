/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../../../services/util/util.service';
@Component({
  selector: 'app-stripepayment',
  templateUrl: './stripepayment.page.html',
  styleUrls: ['./stripepayment.page.scss'],
})
export class StripepaymentPage {

  paymentAmount = '3.33';
  currency = 'USD';
  currencyIcon = '$';
  stripekey = 'pk_test_SwGaKHT5AoDU4XP9eErQOZjq00htqO5Gix';
  cardDetails: any = {
  };
  cardNumber;
  cvcnumber;
  year;
  month;
  GROUP_SEPARATOR = " ";

  constructor(public util: UtilService,private stripe: Stripe, private http: HttpClient) {
  }
  format(valString) {
    if (!valString) {
      return '';
    }
    valString = valString
      .replace(/\W/gi, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    if (valString.length > 19) {
      this.cardNumber = this.cardNumber.slice(0, 19);
    } else {
      this.cardNumber = valString;
    }
  };
  addCardDateSpacing(expiry) {
    expiry = expiry
      .replace(/\W/gi, '')
      .replace(/\//g, '')
      .trim();

    if (expiry.length > 4) {
      return expiry.slice(0, 4).replace(/(.{2})/, '$1 /');
    } else {
      if (expiry.length < 3) { return expiry; }

      return expiry.replace(/(.{2})/, '$1 /');
    }
  }


  payWithStripe() {
    this.stripe.setPublishableKey(this.stripekey);
    this.cardDetails = {
      number: this.cardNumber.replace(/\W/gi, ''),
      expMonth: this.month,
      expYear: this.year,
      cvc: this.cvcnumber
    };
    console.log('card', this.cardDetails);
    this.stripe.createCardToken(this.cardDetails)
      .then(token => {
        console.log(token);
        this.util.presentToast('Stripe token for this payment generated', true, 'bottom', 1500);

        this.makePayment(token.id);
      })
      .catch(error => this.util.presentToast(error , true, 'bottom', 1500));
  }




  makePayment(token) {
    this.http
      .post('https://us-central1-shoppr-c97a7.cloudfunctions.net/payWithStripe', {
        token: token.id
      })
      .subscribe(data => {
        console.log(data);
        alert()
      });
  }


}
