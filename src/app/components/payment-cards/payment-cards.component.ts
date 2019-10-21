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
  selector: 'payment-cards',
  templateUrl: './payment-cards.component.html',
  styleUrls: ['./payment-cards.component.scss'],
})
export class PaymentCardsComponent implements OnInit {

  cardDetails:any;
  billing;
  constructor() { 
    this.billing = [{card_number:'3124',expiry_date:'12/22',image:'assets/profile/visa.png'},{card_number:'4564',expiry_date:'03/25',image:'assets/profile/mastercard.png'}]
    this.cardDetails = {cardNumber:null,cardType:null,cardCvv:null,cardDate:null,zipCode:null}
  }


  ngOnInit() {}

  SaveCard(){
    if(this.cardDetails.cardType ==='visa'){
      this.billing.push({card_number:'3124',expiry_date:'12/22',image:'assets/profile/visa.png'})
    }
    if(this.cardDetails.cardType === 'master'){
      this.billing.push({card_number:'3124',expiry_date:'12/22',image:'assets/profile/mastercard.png'})
    }
    
  }

}
