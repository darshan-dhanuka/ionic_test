/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/




import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/tinder/data.service';
import { CardServicesService } from 'src/app/services/card/card-services.service';

@Component({
  selector: 'app-card8',
  templateUrl: './card8.page.html',
  styleUrls: ['./card8.page.scss'],
})
export class Card8Page implements OnInit {
  public topSavers;
  constructor(public cardServ:CardServicesService,
    ) { 
      this.topSavers = cardServ.topSaversproduct[0];
    }

  ngOnInit() {
  }

}
