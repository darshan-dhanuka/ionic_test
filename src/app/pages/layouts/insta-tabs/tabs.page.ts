/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from '../../../services/util/util.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalCtrl:ModalController, public util: UtilService,) {
    this.util.navigate('insta-tabs/home')
  }
}
