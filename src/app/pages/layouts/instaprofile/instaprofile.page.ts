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
  selector: 'app-instaprofile',
  templateUrl: './instaprofile.page.html',
  styleUrls: ['./instaprofile.page.scss'],
})
export class InstaprofilePage implements OnInit {
  segmentTab: any;
  gridGallery=[
    'assets/imgs/grid/1.png',
    'assets/imgs/grid/2.png',
    'assets/imgs/grid/4.png',
    'assets/imgs/grid/5.png',
    'assets/imgs/grid/6.png',
    'assets/imgs/grid/7.png',
    'assets/imgs/grid/8.png'
  ]
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }

}
