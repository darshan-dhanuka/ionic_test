/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slider1Component } from './slider1/slider1.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Slider2Component } from './slider2/slider2.component';
import { Slider3Component } from './slider3/slider3.component';
import { InstagramComponent } from './instagram/instagram.component';
import { PaymentCardsComponent } from './payment-cards/payment-cards.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { TindericonsComponent } from '../pages/layouts/tinder/tindericons/tindericons.component';
import { ActionsheetComponent } from '../pages/addons/settings/actionsheet/actionsheet.component';
import { AlertComponent } from '../pages/addons/settings/alert/alert.component';
import { RippleComponent } from '../pages/addons/settings/ripple/ripple.component';
import { RangeComponent } from '../pages/addons/settings/range/range.component';
import { DatetimeComponent } from '../pages/addons/settings/datetime/datetime.component';
import { Slider4Component } from './slider4/slider4.component';
import { Slider5Component } from './slider5/slider5.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { TwitterLoginComponent } from './twitter-login/twitter-login.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { CheckDeliveryComponent } from './check-delivery/check-delivery.component';
import { ReviewComponent } from './review/review.component';
import { InnerhomeComponent } from './innerhome/innerhome.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [Slider1Component,RangeComponent,DatetimeComponent,RippleComponent,AlertComponent,ActionsheetComponent,Slider2Component,TindericonsComponent,Slider3Component,InstagramComponent,PaymentCardsComponent,MyProfileComponent,MyAddressComponent,Slider4Component,Slider5Component, FacebookLoginComponent, TwitterLoginComponent, GoogleLoginComponent,CheckDeliveryComponent,ReviewComponent,InnerhomeComponent,ProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[Slider1Component,RangeComponent,DatetimeComponent,RippleComponent,AlertComponent,ActionsheetComponent,Slider2Component,TindericonsComponent,Slider3Component,InstagramComponent,PaymentCardsComponent,MyProfileComponent,MyAddressComponent,Slider4Component,Slider5Component, FacebookLoginComponent, TwitterLoginComponent, GoogleLoginComponent,CheckDeliveryComponent,ReviewComponent,InnerhomeComponent,ProductComponent]
})
export class SharableModule { }
