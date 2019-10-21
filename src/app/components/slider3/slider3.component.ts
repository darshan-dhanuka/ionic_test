/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit, ViewChild } from '@angular/core';
import { CardServicesService } from 'src/app/services/card/card-services.service';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slider3',
  templateUrl: './slider3.component.html',
  styleUrls: ['./slider3.component.scss'],
})
export class Slider3Component implements OnInit {
  public pages: Array<any> = [];
  @ViewChild('slides', { static: true }) slides: IonSlides;
  constructor(public cardServ: CardServicesService) {
    this.pages = this.cardServ.Slider;
  }

  public ngOnInit() {
    this.slides.options = {
      effect: 'fade'
    }
  }

}
