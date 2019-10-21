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
  selector: 'app-grid3',
  templateUrl: './grid3.page.html',
  styleUrls: ['./grid3.page.scss'],
})
export class Grid3Page implements OnInit {
public gridImages:Array<any>
  constructor() { 
    this.gridImages = [
      { title: 'V I N Y A S A', image: 'assets/products/vinyasa.jpg' },
      { title: 'A S H T A N G A', image: 'assets/products/ashtanga.jpg' },
      { title: 'I Y E N G A R', image: 'assets/products/gallery7.jpg' },
      { title: 'B I K R A M', image: 'assets/products/bikram.jpg' },
      { title: 'J I V A M U K T I', image: 'assets/products/jivamukti.jpg' },
      { title: 'P O W E R', image: 'assets/products/power.jpg' },
      { title: 'S I V A N A N D A', image: 'assets/products/sivananda.jpg' },
      { title: 'Y I N', image: 'assets/products/yin.jpg' },
      
    ]
  }

  ngOnInit() {
  }

}
