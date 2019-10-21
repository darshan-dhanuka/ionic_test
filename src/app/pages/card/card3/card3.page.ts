
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
  selector: 'app-card3',
  templateUrl: './card3.page.html',
  styleUrls: ['./card3.page.scss'],
})
export class Card3Page implements OnInit {
  public events:Array<any>
  constructor(public cardServ:CardServicesService) {
    this.events = this.cardServ.allothers[0].data
   }

  ngOnInit() {
  }

}
