/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component } from '@angular/core';
import { UtilService } from '../../../services/util/util.service';

@Component({
  selector: 'app-content',
  templateUrl: 'content.page.html',
  styleUrls: ['content.page.scss']
})
export class ContentPage {
  public segmentTab = 'api';
  public loadedData = null;
  constructor(private util: UtilService) {
    this.util.getApiResponse().subscribe(data=>{
      console.log(data);
      this.loadedData = data;
    })
  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }



}
