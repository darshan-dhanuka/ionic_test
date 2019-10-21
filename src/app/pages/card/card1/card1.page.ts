
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import { CardServicesService } from 'src/app/services/card/card-services.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.page.html',
  styleUrls: ['./card1.page.scss'],
})
export class Card1Page implements OnInit {
public cardData:Array<any>;
  constructor(public cardServ:CardServicesService) {
    this.cardData = this.cardServ.cardData;
   }

  ngOnInit() {
  }

}
